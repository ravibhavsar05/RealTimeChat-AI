module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jestSetup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|@react-navigation' +
      '|react-native-gesture-handler' +
      '|react-native-vector-icons' +
      '|react-native-reanimated' +
      '|react-native-keyboard-aware-scroll-view' +
      '|react-native-iphone-x-helper' +
      '|react-native-linear-gradient' +
      '|react-native-paper' + // 👈 Add this!
      ')/)',
  ],
  moduleNameMapper: {
    '\\.png$': '<rootDir>/__mocks__/fileMock.js',
  },
};
