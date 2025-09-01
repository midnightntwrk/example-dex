import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync } from "fs";
import { createHash } from "crypto";
import { join } from "path";
import contractRunTime from "./contract/contract/index.cjs";
import { constructorContext } from "@midnight-ntwrk/compact-runtime";
import { sampleCoinPublicKey } from "@midnight-ntwrk/zswap";
import { type ContractPrivateState, witnesses } from "../contract/src";

// Expected hash of the FungibleToken.compact file
const EXPECTED_FUNGIBLE_TOKEN_HASH =
  "31bdc8bf48de6d6deecea6e57361fbca23999dca9e81486c66ff415931ef337b";

beforeAll(() => {
  // Verify FungibleToken.compact file integrity
  const verifyFungibleTokenContract = () => {
    try {
      // Read the FungibleToken.compact file
      const contractPath = join(
        process.cwd(),
        "contract",
        "src",
        "lib",
        "FungibleToken.compact"
      );
      const fileContent = readFileSync(contractPath, "utf8");

      // Strip all whitespaces (spaces, tabs, newlines, etc.)
      const strippedContent = fileContent.replace(/\s/g, "");

      // Create SHA256 hash
      const hash = createHash("sha256").update(strippedContent).digest("hex");

      // Compare with expected hash
      if (hash !== EXPECTED_FUNGIBLE_TOKEN_HASH) {
        throw new Error(
          `FungibleToken.compact hash mismatch!\n` +
            `Expected: ${EXPECTED_FUNGIBLE_TOKEN_HASH}\n` +
            `Got: ${hash}\n` +
            `The contract file may have been modified or corrupted.`
        );
      }

      console.log("✅ FungibleToken.compact hash verification passed");
    } catch (error) {
      console.error(
        "❌ FungibleToken.compact hash verification failed:",
        error
      );
      throw error;
    }
  };

  verifyFungibleTokenContract();
});

describe("Contract Runtime Tests", () => {
  it("must verify that the runtime is correct", () => {
    expect(contractRunTime).toHaveProperty("Contract");
    expect(contractRunTime).toHaveProperty("ledger");
    expect(contractRunTime).toHaveProperty("pureCircuits");
  });
});

describe("Contract must be constructed correctly", () => {
  it("must verify that the contract is set with the right ledger values", () => {
    const initialPrivateState = { amountToBuy: 69n, amountToSell: 420n };
    const contract = new contractRunTime.Contract<ContractPrivateState>(
      witnesses
    );
    const context = constructorContext(
      initialPrivateState,
      sampleCoinPublicKey()
    );
    const {
      currentPrivateState,
      currentContractState,
      currentZswapLocalState
    } = contract.initialState(
      context,
      ["foo", "bar"],
      ["$FOO", "$BAR"],
      contractRunTime.pureCircuits.padTokenAmount(21_000_000n)
    );
    console.log(
      currentContractState,
      currentZswapLocalState,
      currentPrivateState
    );
  });
});
