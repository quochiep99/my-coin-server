const Block = require("../models/block.model");

const getBlocks = async (req, res) => {
  try {
    const blocks = await Block.find();
    res.status(200).json({ blocks });
  } catch (err) {
    res.status(400).json({ message: "Cannot get blocks" });
  }
};

module.exports = {
  getBlocks,
};
