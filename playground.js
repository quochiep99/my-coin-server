const { ethers } = require("ethers");

let isAddress = ethers.utils.isAddress(
  "0x0331FE596dAE3778932835fcAde2197b75beccaaa"
);

console.log(isAddress);
