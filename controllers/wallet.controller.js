const { ethers } = require("ethers");

exports.postOneWallet = (req, res) => {
  console.log(req.body);
  console.log("POST /wallets accessed");
  const { body } = req;
  console.log(body);
  res.end();
};
