const sha256 = require("js-sha256");
const Block = require("../models/block.model");

const createBlockFromData = (index, previousHash, data) => {
  let timestamp;
  let nonce;
  let hash;
  let genesisBlock;

  let previousTimestamp;
  while (true) {
    previousTimestamp = Math.floor(Date.now() / 1000);
    for (nonce = 0; nonce <= Number.MAX_SAFE_INTEGER; nonce++) {
      timestamp = Math.floor(Date.now() / 1000);

      // within 1 second
      if (timestamp - previousTimestamp < 1) {
        hash = sha256("" + index + previousHash + timestamp + data + nonce);
        // difficulty : 3
        if (hash.substr(0, 3) === "000") {
          genesisBlock = {
            index,
            previousHash,
            timestamp,
            data,
            nonce,
            hash,
          };
          console.log("" + index + previousHash + timestamp + data + nonce);
          return genesisBlock;
        }
      } else {
        // move onto new second, start nonce from 0 again
        break;
      }
    }
  }
};

const createGenesisBlock = async () => {
  try {
    const blocks = await Block.find();
    // empty blockchain, then create the genesis (the first) block
    if (blocks.length === 0) {
      //   const genesisBlock = createBlockFromData(
      //     0,
      //     "0",
      //     "Welcome to coinbase wallet"
      //   );
      const genesisBlock = {
        index: 0,
        previousHash: "0",
        timestamp: 1651474851,
        data: "Welcome to coinbase wallet",
        nonce: 780,
        hash: "000ef091366758caa1efda12fba3baae62ddf6d6e388b2fa8c9f1dacdb8c9398",
      };
      await Block.create(genesisBlock);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createGenesisBlock,
};
