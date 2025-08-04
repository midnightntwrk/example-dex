import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export enum Token { foo = 0, bar = 1 }

export type Witnesses<T> = {
  amountsToSwap(context: __compactRuntime.WitnessContext<Ledger, T>): [T, [bigint,
                                                                           bigint]];
}

export type ImpureCircuits<T> = {
  mint(context: __compactRuntime.CircuitContext<T>, tk_0: Token): __compactRuntime.CircuitResults<T, { nonce: Uint8Array,
                                                                                                       color: Uint8Array,
                                                                                                       value: bigint
                                                                                                     }>;
  addLiquidity(context: __compactRuntime.CircuitContext<T>,
               coin__0: { nonce: Uint8Array, color: Uint8Array, value: bigint }): __compactRuntime.CircuitResults<T, bigint>;
  removeLiquidity(context: __compactRuntime.CircuitContext<T>,
                  token__0: Token,
                  amount__0: bigint): __compactRuntime.CircuitResults<T, []>;
  swapFooForBar(context: __compactRuntime.CircuitContext<T>,
                fromCoin__0: { nonce: Uint8Array,
                               color: Uint8Array,
                               value: bigint
                             }): __compactRuntime.CircuitResults<T, [bigint,
                                                                     bigint]>;
  swapBarForFoo(context: __compactRuntime.CircuitContext<T>,
                fromCoin__0: { nonce: Uint8Array,
                               color: Uint8Array,
                               value: bigint
                             }): __compactRuntime.CircuitResults<T, [bigint,
                                                                     bigint]>;
}

export type PureCircuits = {
}

export type Circuits<T> = {
  mint(context: __compactRuntime.CircuitContext<T>, tk_0: Token): __compactRuntime.CircuitResults<T, { nonce: Uint8Array,
                                                                                                       color: Uint8Array,
                                                                                                       value: bigint
                                                                                                     }>;
  addLiquidity(context: __compactRuntime.CircuitContext<T>,
               coin__0: { nonce: Uint8Array, color: Uint8Array, value: bigint }): __compactRuntime.CircuitResults<T, bigint>;
  removeLiquidity(context: __compactRuntime.CircuitContext<T>,
                  token__0: Token,
                  amount__0: bigint): __compactRuntime.CircuitResults<T, []>;
  swapFooForBar(context: __compactRuntime.CircuitContext<T>,
                fromCoin__0: { nonce: Uint8Array,
                               color: Uint8Array,
                               value: bigint
                             }): __compactRuntime.CircuitResults<T, [bigint,
                                                                     bigint]>;
  swapBarForFoo(context: __compactRuntime.CircuitContext<T>,
                fromCoin__0: { nonce: Uint8Array,
                               color: Uint8Array,
                               value: bigint
                             }): __compactRuntime.CircuitResults<T, [bigint,
                                                                     bigint]>;
}

export type Ledger = {
  readonly counter: bigint;
  readonly fooNonce: Uint8Array;
  readonly barNonce: Uint8Array;
  readonly fooTotalSupply: bigint;
  readonly barTotalSupply: bigint;
  readonly admin: { bytes: Uint8Array };
  readonly fooColor: Uint8Array;
  readonly barColor: Uint8Array;
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
  readonly fooPool: bigint;
  readonly barPool: bigint;
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<T, W extends Witnesses<T> = Witnesses<T>> {
  witnesses: W;
  circuits: Circuits<T>;
  impureCircuits: ImpureCircuits<T>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<T>,
               initialNonce_0: Uint8Array): __compactRuntime.ConstructorResult<T>;
}

export declare function ledger(state: __compactRuntime.StateValue): Ledger;
export declare const pureCircuits: PureCircuits;
