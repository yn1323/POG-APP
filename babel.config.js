const path = require('path')

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '@/helper': path.resolve(__dirname, 'helpers'),
            '@/hooks': path.resolve(__dirname, 'hooks'),
            '@/constant': path.resolve(__dirname, 'constants'),
            '@/recoil': path.resolve(__dirname, 'recoils'),
            '@/atom': path.resolve(__dirname, 'components/atom'),
            '@/molucule': path.resolve(__dirname, 'components/molucule'),
            '@/organism': path.resolve(__dirname, 'components/organism'),
            '@/template': path.resolve(__dirname, 'components/template'),
            '@/styles': path.resolve(__dirname, 'styles'),
          },
        },
      ],
    ],
  }
}
