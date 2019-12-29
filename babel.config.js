module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: [
            'last 2 Chrome versions',
            'last 2 Firefox versions',
            'last 2 Safari versions',
            'last 2 iOS versions',
            'last 1 Android version',
            'last 1 ChromeAndroid version',
            'ie 11'
          ]
        }
      }
    ],
    '@babel/preset-react'
  ],
  plugins: ['emotion', '@babel/plugin-proposal-class-properties'],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current'
            }
          }
        ],
        '@babel/preset-react'
      ],
      plugins: ['emotion', '@babel/plugin-proposal-class-properties']
    }
  }
};
