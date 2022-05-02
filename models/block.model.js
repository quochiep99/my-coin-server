// block is a block in a blockchain

// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const Mixed = Schema.Types.Mixed;

const BlockSchema = new Schema({
  index: {
    type: Number,
    required: true,
  },
  previousHash: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Number,
    required: true,
  },
  data: {
    type: Mixed,
    required: true,
  },
  nonce: {
    type: Number,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
});

// Compile model from schema
const Block = mongoose.model("Block", BlockSchema);

module.exports = Block;
