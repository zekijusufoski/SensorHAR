module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "presets": ["module:metro-react-native-babel-preset"],
  "plugins": [
    [
      "react-native-stylename-to-style",
      {
        "extensions": ["css"]
      }
    ],
    [
      "react-native-platform-specific-extensions",
      {
        "extensions": ["css"]
      }
    ]
  ]
};

