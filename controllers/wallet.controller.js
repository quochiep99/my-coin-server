const { ethers } = require("ethers");
const Wallet = require("../models/wallet.model");

exports.postOneWallet = async (req, res) => {
  try {
    const { body } = req;
    const {
      username,
      mnemonic,
      firstWord,
      lastWord,
      password,
      verifyPassword,
    } = body;
    // some validations
    //   let isValid = true
    //   if(firstWord)

    const walletFromMnemonic = ethers.Wallet.fromMnemonic(mnemonic);

    await Wallet.create({
      username: username,
      mnemonic: walletFromMnemonic.mnemonic,
      privateKey: walletFromMnemonic.privateKey,
      publicKey: walletFromMnemonic.publicKey,
    });
    res.status(200).json({ message: "Created a new wallet successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log(err);
  }
};
