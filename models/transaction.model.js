// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const Mixed = Schema.Types.Mixed;

const TransactionSchema = new Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  // status here means a transaction is unspent or spent
  status: {
    type: String,
    required: true,
  },
  signature: {
    type: String,
    required: true,
  },
});

// Compile model from schema
const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;
