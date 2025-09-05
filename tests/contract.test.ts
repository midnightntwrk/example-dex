import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync } from "fs";
import { createHash } from "crypto";
import { join } from "path";
import contractRunTime from "../contract/managed/contract/index.cjs";
import {
  ContractSimulator,
  right,
  type ZswapCoinPublicKey,
  type ContractAddress,
  left
} from "../api";

beforeAll(() => {
  // Verify FungibleToken.compact file integrity
  const verifyFungibleTokenContract = () => {
    const files = [
      {
        fileName: "FooToken.compact",
        contractPath: [process.cwd(), "contract", "src", "lib", "foo"],
        expectedHash:
          "99ecf255460a5bfeff2f9b16bc424abcbf133d0d0173008d416830e117efca3d"
      },
      {
        fileName: "BarToken.compact",
        contractPath: [process.cwd(), "contract", "src", "lib", "bar"],
        expectedHash:
          "165fc5e071008587d6791b41d1889996d5a985f5de8ff5e4898499df9e6ce9d6"
      }
    ];
    files.forEach(({ fileName, contractPath, expectedHash }) => {
      try {
        // Read the FungibleToken.compact file
        const fileContent = readFileSync(
          join(...contractPath, fileName),
          "utf8"
        );

        // Strip all whitespaces (spaces, tabs, newlines, etc.)
        const strippedContent = fileContent.replace(/\s/g, "");

        // Create SHA256 hash
        const hash = createHash("sha256").update(strippedContent).digest("hex");

        // Compare with expected hash
        if (hash !== expectedHash) {
          throw new Error(
            `${fileName} hash mismatch!\n` +
              `Expected: ${expectedHash}\n` +
              `Got: ${hash}\n` +
              `The contract file may have been modified or corrupted.`
          );
        }

        console.log("✅ " + fileName + " hash verification passed");
      } catch (error) {
        console.error("❌ " + fileName + " hash verification failed:", error);
        throw error;
      }
    });
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
  const fixedSupply = 20_000_000n;
  const contract = new ContractSimulator(fixedSupply);
  const contractAddress = new Uint8Array(32);

  it("must verify that the contract is set with the right ledger values", () => {
    const ledger = contract.getLedger();
    expect(ledger).toHaveProperty("admin");
    expect(ledger.admin).toHaveProperty("bytes");
    expect(ledger).toHaveProperty("claimAmount");
    expect(ledger.claimAmount).toEqual(ContractSimulator.pad(100n));
  });

  it("must verify the admin holds the right balance", () => {
    const ledger = contract.getLedger();
    const admin = ledger.admin;
    const adminFooBalance = contract.balanceOf(
      left<ZswapCoinPublicKey, ContractAddress>(admin, {
        bytes: new Uint8Array(32)
      }),
      contractRunTime.Token.foo
    );
    expect(ContractSimulator.unpad(adminFooBalance)).toEqual(1_000_000n);
  });

  it("must verify the contract holds the right balances", () => {
    const contractFooBalance = contract.balanceOf(
      right<ZswapCoinPublicKey, ContractAddress>(
        {
          bytes: contractAddress
        },
        { bytes: new Uint8Array(32) }
      ),
      contractRunTime.Token.foo
    );
    expect(ContractSimulator.unpad(contractFooBalance)).toEqual(fixedSupply);
  });
});
