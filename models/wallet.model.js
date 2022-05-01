// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const Mixed = Schema.Types.Mixed;

const WalletSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  mnemonic: {
    type: Mixed,
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
