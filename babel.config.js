module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@assets': './assets',
          "@components": "./src/components",
          "@screens": "./src/screens"
        },
      },
    ],
  ],
};
