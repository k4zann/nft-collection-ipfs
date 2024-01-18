require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.20",
  networks: {
    mumbai: {
      url: "https://still-silent-panorama.matic-testnet.quiknode.pro/a9a2dcee70c57492a9aebf8cf7878af025bcbbb1/",
      accounts: ["c33747530beec1120ed3fdc89951bd8e77cfff09ade5543fdce84dd5a5d2a9e4"],
    },
  },
};