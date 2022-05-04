const Block = require("../models/block.model");

const getBlocks = async (req, res) => {
  try {
    const blocks = await Block.find();
    res.status(200).json({ blocks });
  } catch (err) {
    res.status(400).json({ message: "Cannot get blocks" });
  }
};

const postBlocks = async (req, res) => {
  try {
    const { body } = req;
    const newBlock = body;
    await Block.create(newBlock);
    res.status(200).json({ messsage: "A new block was created" });
  } catch (err) {
    res.status(400).json({ message: "Cannot create a new block" });
  }
};

module.exports = {
  getBlocks,
  postBlocks,
};
