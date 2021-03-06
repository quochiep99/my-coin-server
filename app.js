const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const blockService = require("./services/block.service");
const walletController = require("./controllers/wallet.controller");
const blockController = require("./controllers/block.controller");
const transactionController = require("./controllers/transaction.controller");

require("dotenv").config();

// Set up default mongoose connection
const mongoDB =
  "mongodb+srv://quochiep99:azvZH4UEfec8J2qc@cluster0.aruyv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// Get the default connection
const db = mongoose.connection;
db.on("connected", () => {
  console.log("MongoDB connection success");
});
// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// ROUTES
app.post("/api/wallets", walletController.postOneWallet);
app.get("/api/blocks", blockController.getBlocks);
app.post("/api/blocks", blockController.postBlocks);
app.post(
  "/api/unconfirmedTransactions/mine",
  transactionController.postMineUnconfirmedTransactions
);

// DEPLOYMENT/PRODUCTION ENVIRONMENT
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, async () => {
  await blockService.createGenesisBlock();
  console.log(`My-Coin server is listening on PORT ${PORT}`);
});
