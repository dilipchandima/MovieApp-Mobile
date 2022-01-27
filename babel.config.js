module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          actions: './src/actions',
          components: './src/components',
          constants: './src/constants',
          libraries: './src/libraries',
          navigation: './src/navigation',
          reducers: './src/reducers',
          res: './src/res',
          saga: './src/saga',
          screens: './src/screens',
          store: './src/store',
          types: './src/types',
          apis: './src/apis',
        },
      },
    ],
  ],
};
