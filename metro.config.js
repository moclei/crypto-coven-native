const extraNodeModules = require("node-libs-browser");
const path = require("path");

module.exports = {
  resolver: {
    extraNodeModules: {
      "react-native-svg": path.resolve(
        __dirname,
        "./node_modules/react-native-svg-gg"
      ),
      ...extraNodeModules,
    },
  },
  transformer: {
    assetPlugins: ["expo-asset/tools/hashAssetFiles"],
  },
};
