import type { Token } from "@dahlia-labs/token-utils";

export enum Exchange {
  UniswapV2,
  UniswapV3,
  Curve,
  Saddle,
}

export interface Pool {
  chainID: number;
  exchange: Exchange;
  tokens: Token[];
  address: string;
}
