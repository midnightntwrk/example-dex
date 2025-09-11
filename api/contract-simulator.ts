// This file is part of midnightntwrk/example-bboard.
// Copyright (C) 2025 Midnight Foundation
// SPDX-License-Identifier: Apache-2.0
// Licensed under the Apache License, Version 2.0 (the "License");
// You may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  type CircuitContext,
  QueryContext,
  constructorContext,
  decodeContractAddress
} from "@midnight-ntwrk/compact-runtime";
import {
  Contract,
  type Ledger,
  ledger,
  pureCircuits,
  Token
} from "../contract/managed/contract/index.cjs";
import {
  type ContractPrivateState,
  witnesses
} from "../contract/src/witnesses";
import {
  sampleCoinPublicKey,
  sampleContractAddress
} from "@midnight-ntwrk/zswap";
import {
  type Either,
  type ZswapCoinPublicKey,
  type ContractAddress
} from "./index";

/**
 * Serves as a testbed to exercise the contract in tests
 */
export class ContractSimulator {
  readonly contract: Contract<ContractPrivateState>;
  readonly address: string;
  circuitContext: CircuitContext<ContractPrivateState>;

  constructor() {
    this.contract = new Contract<ContractPrivateState>(witnesses);
    const initialPrivateState = { amountToBuy: 69n, amountToSell: 420n };
    const context = constructorContext(
      initialPrivateState,
      sampleCoinPublicKey()
    );

    const {
      currentPrivateState,
      currentContractState,
      currentZswapLocalState
    } = this.contract.initialState(context, ["foo", "bar"], ["$FOO", "$BAR"]);
    this.circuitContext = {
      currentPrivateState,
      currentZswapLocalState,
      originalState: currentContractState,
      transactionContext: new QueryContext(
        currentContractState.data,
        sampleContractAddress()
      )
    };
    this.address = this.circuitContext.transactionContext.address;
  }

  /***
   * Switch to a different secret key for a different user
   *
   * TODO: is there a nicer abstraction for testing multi-user dApps?
   */
  //   public switchUser(secretKey: Uint8Array) {
  //     this.circuitContext.currentPrivateState = {
  //       secretKey
  //     };
  //   }

  public static pad(val: bigint): bigint {
    return val * 10n ** 18n;
  }

  public static unpad(val: bigint): bigint {
    return val / 10n ** 18n;
  }

  public getLedger(): Ledger {
    return ledger(this.circuitContext.transactionContext.state);
  }

  public getPrivateState(): ContractPrivateState {
    return this.circuitContext.currentPrivateState;
  }

  public mintInitialBalances(fixedSupply: bigint): Ledger {
    this.circuitContext = this.contract.impureCircuits.mintInitialBalances(
      this.circuitContext,
      fixedSupply
    ).context;
    return ledger(this.circuitContext.transactionContext.state);
  }

  public claim(token: Token): Ledger {
    // Update the current context to be the result of executing the circuit.
    this.circuitContext = this.contract.impureCircuits.claim(
      this.circuitContext,
      token
    ).context;
    return ledger(this.circuitContext.transactionContext.state);
  }

  public balanceOf(
    address: Either<ZswapCoinPublicKey, ContractAddress>,
    token: Token
  ): bigint {
    const result = this.contract.impureCircuits.balanceOf(
      this.circuitContext,
      address,
      token
    );
    this.circuitContext = result.context;
    return result.result;
  }
}
