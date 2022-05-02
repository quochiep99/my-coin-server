const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const blockService = require("./services/block.service");

// Set up default mongoose connection
const mongoDB = "mongodb://127.0.0.1/mycoin-db";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// Get the default connection
const db = mongoose.connection;
db.on("connected", () => {
  console.log("MongoDB connection success");
});
// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const walletController = require("./controllers/wallet.controller");

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// ROUTES
app.post("/wallets", walletController.postOneWallet);

app.listen(port, () => {
  blockService.createGenesisBlock();
  console.log(`My-Coin server is listening on port ${port}`);
});
