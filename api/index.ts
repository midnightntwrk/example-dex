export * from "./contract-simulator";

export type Either<A, B> =
  | {
      is_left: true;
      left: A;
      right: any;
    }
  | {
      is_left: false;
      left: any;
      right: B;
    };
export const right = <A, B>(b: B, defaultLeft?: A): Either<A, B> => ({
  is_left: false,
  left: defaultLeft ?? null,
  right: b
});
export const left = <A, B>(a: A, defaultRight?: B): Either<A, B> => ({
  is_left: true,
  left: a,
  right: defaultRight ?? null
});

export type ZswapCoinPublicKey = {
  bytes: Uint8Array;
};
export type ContractAddress = {
  bytes: Uint8Array;
};
