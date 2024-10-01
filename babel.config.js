module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'nativewind/babel', // Keep your NativeWind plugin
    'react-native-paper/babel', // Add this for React Native Paper // Optional: If you're using react-native-reanimated
  ],
};
