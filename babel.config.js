module.exports = {
  presets: ['module:@react-native/babel-preset'],
  
  plugins: [
    'react-native-reanimated/plugin',
    'react-native-paper/babel',
    [
      'module-resolver',
      {
        root: ['./src'], // Base directory for resolution
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@xyz': './src', // Maps @xyz to the src folder
        },
      },
    ],
  ],
};