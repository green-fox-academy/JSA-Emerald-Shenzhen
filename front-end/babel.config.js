module.exports = api => {
  api.cache(true)
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ],
      'babel-preset-expo',
      'module:react-native-dotenv'
    ],
    sourceMaps: true,
    plugins: ['@babel/transform-react-jsx-source']
  }
}
