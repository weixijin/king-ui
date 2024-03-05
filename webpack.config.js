
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode:'development',
  entry: {
    // 全部
    index: './src/components/index.js',
    // 单个
    klMaxEllPro: './src/components/klMaxEllPro/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].umd.js',
    library: 'king-ui', // 组件库
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','vue-style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}