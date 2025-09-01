import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export enum Token { foo = 0, bar = 1 }

export type Witnesses<T> = {
  amountsToSwap(context: __compactRuntime.WitnessContext<Ledger, T>): [T, [bigint,
                                                                           bigint]];
}

export type ImpureCircuits<T> = {
  claim(context: __compactRuntime.CircuitContext<T>, token_0: Token): __compactRuntime.CircuitResults<T, []>;
  addLiquidity(context: __compactRuntime.CircuitContext<T>,
               token_0: Token,
               amount_0: bigint): __compactRuntime.CircuitResults<T, []>;
  removeLiquidity(context: __compactRuntime.CircuitContext<T>,
                  token_0: Token,
                  amount_0: bigint): __compactRuntime.CircuitResults<T, []>;
  transferFoo(context: __compactRuntime.CircuitContext<T>,
              to_0: { is_left: boolean,
                      left: { bytes: Uint8Array },
                      right: { bytes: Uint8Array }
                    },
              value_0: bigint): __compactRuntime.CircuitResults<T, boolean>;
  transferBar(context: __compactRuntime.CircuitContext<T>,
              to_0: { is_left: boolean,
                      left: { bytes: Uint8Array },
                      right: { bytes: Uint8Array }
                    },
              value_0: bigint): __compactRuntime.CircuitResults<T, boolean>;
  swap(context: __compactRuntime.CircuitContext<T>, from_0: Token): __compactRuntime.CircuitResults<T, [bigint,
                                                                                                        bigint]>;
}

export type PureCircuits = {
  padTokenAmount(amount_0: bigint): bigint;
}

export type Circuits<T> = {
  padTokenAmount(context: __compactRuntime.CircuitContext<T>, amount_0: bigint): __compactRuntime.CircuitResults<T, bigint>;
  claim(context: __compactRuntime.CircuitContext<T>, token_0: Token): __compactRuntime.CircuitResults<T, []>;
  addLiquidity(context: __compactRuntime.CircuitContext<T>,
               token_0: Token,
               amount_0: bigint): __compactRuntime.CircuitResults<T, []>;
  removeLiquidity(context: __compactRuntime.CircuitContext<T>,
                  token_0: Token,
                  amount_0: bigint): __compactRuntime.CircuitResults<T, []>;
  transferFoo(context: __compactRuntime.CircuitContext<T>,
              to_0: { is_left: boolean,
                      left: { bytes: Uint8Array },
                      right: { bytes: Uint8Array }
                    },
              value_0: bigint): __compactRuntime.CircuitResults<T, boolean>;
  transferBar(context: __compactRuntime.CircuitContext<T>,
              to_0: { is_left: boolean,
                      left: { bytes: Uint8Array },
                      right: { bytes: Uint8Array }
                    },
              value_0: bigint): __compactRuntime.CircuitResults<T, boolean>;
  swap(context: __compactRuntime.CircuitContext<T>, from_0: Token): __compactRuntime.CircuitResults<T, [bigint,
                                                                                                        bigint]>;
}

export type Ledger = {
  readonly admin: { bytes: Uint8Array };
  alreadyMinted: {
    isEmpty(): boolean;
    size(): bigint;
    member(elem_0: { bytes: Uint8Array }): boolean;
    [Symbol.iterator](): Iterator<{ bytes: Uint8Array }>
  };
  liquidityProviders: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: [{ bytes: Uint8Array }, Token]): boolean;
    lookup(key_0: [{ bytes: Uint8Array }, Token]): bigint;
    [Symbol.iterator](): Iterator<[[{ bytes: Uint8Array }, Token], bigint]>
  };
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<T, W extends Witnesses<T> = Witnesses<T>> {
  witnesses: W;
  circuits: Circuits<T>;
  impureCircuits: ImpureCircuits<T>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<T>,
               names_0: [string, string],
               symbols_0: [string, string],
               fixedSupply_0: bigint): __compactRuntime.ConstructorResult<T>;
}

export declare function ledger(state: __compactRuntime.StateValue): Ledger;
export declare const pureCircuits: PureCircuits;
