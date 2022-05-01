// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const WalletSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  privateKey: {
    type: String,
    required: true,
  },
  publicKey: {
    type: String,
    required: true,
  },
});

// Compile model from schema
const Wallet = mongoose.model("Wallet", WalletSchema);

module.exports = Wallet;
