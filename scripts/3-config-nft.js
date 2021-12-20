import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xd3c7161D36A0E4c74aEb9377d41015A350e4Ed09"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "HBCU Coin",
        description: "This NFT will give you access to HBCUDAO!",
        image: readFileSync("scripts/assets/hbcuCoin.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
