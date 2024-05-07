const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration for handling SVG files with react-native-svg-transformer
 * https://facebook.github.io/metro/docs/configuration
 * https://github.com/kristerkari/react-native-svg-transformer
 */
module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  const {
    resolver: {sourceExts, assetExts},
  } = defaultConfig;

  const config = {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'), // Exclude 'svg' from asset extensions
      sourceExts: [...sourceExts, 'svg'], // Include 'svg' in source extensions
    },
  };

  return mergeConfig(defaultConfig, config);
})();
