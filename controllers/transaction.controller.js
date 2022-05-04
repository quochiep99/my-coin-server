const Block = require("../models/block.model");
const { mineBlock } = require("../services/block.service");

const postMineUnconfirmedTransactions = async (req, res) => {
  //
  try {
    const { body } = req;
    const blocks = await Block.find();
    const latestBlock = blocks[blocks.length - 1];
    const newBlock = mineBlock(
      latestBlock.index + 1,
      latestBlock.hash,
      JSON.stringify(body)
    );
    await Block.create(newBlock);
    res.status(200).json({ message: "Success" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  postMineUnconfirmedTransactions,
};
