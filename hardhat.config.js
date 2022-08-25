/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");

const { HARDHAT_PORT } = process.env;

module.exports = {
  solidity: "0.7.3",
  networks: {
    localhost: { url: `http://127.0.0.1:${HARDHAT_PORT}` },
    hardhat: {
      accounts: [{"privateKey":"0xdae4ba43e2cff61e2c2649a7669f5e0a00a484eb2f8b16834fa0229acc9808ba","balance":"1000000000000000000000"},{"privateKey":"0x09900c4b5f60538356bfd2f5ba0594613157571a447918913d85c5e0bc2ed88b","balance":"1000000000000000000000"},{"privateKey":"0x0028e869823d057b2df1caf996a51913bb527e94c6ee5b5cd94f4f4a04430f91","balance":"1000000000000000000000"},{"privateKey":"0x0a28f3a7f48c77b4ecb588e1921485addc6c56e64a31a14e93a5ac48da115d8b","balance":"1000000000000000000000"},{"privateKey":"0x71bb66851d913dd046e7bb6e8d37d52357cba6777e711fcdcf6a2760d7942532","balance":"1000000000000000000000"},{"privateKey":"0x6183a10d5d92ce5261d8d8a78d8818bf0ced00f3de4a70686651b6c5b339bd00","balance":"1000000000000000000000"},{"privateKey":"0xb0b0bad7e0201cffaba37b0c37ec856dc07374aebf9b5d92afbd80e016a25387","balance":"1000000000000000000000"},{"privateKey":"0x997485fddb8a98453fa1c463f6d83caf6f8b557bfc09b87c9d86580cc6d216aa","balance":"1000000000000000000000"},{"privateKey":"0x95fe7eaccc62002d5102242fd678ceb4c9ffecbbbf1967dbfc081ebf2335cae6","balance":"1000000000000000000000"},{"privateKey":"0xad07d299a34c787785719ccc5fdc1b9082de4c9c5fbc72ff6d35ef6a6e06290d","balance":"1000000000000000000000"}]
    },
  },
  paths: {
    sources: './contracts',
    tests: './__tests__/contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};