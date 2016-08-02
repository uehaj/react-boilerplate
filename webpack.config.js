// http://minotaur.badwitch.io/react-webpack-boilerplate/
var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;  // トップレベルに追加

const PATHS = {
  app:   path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

// 共通設定
const common = {
  entry: PATHS.app,

  resolve: {
    extensions: ['', '.js']
  },

  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/js/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: PATHS.app
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules',
        include: /flexboxgrid/,
      }
    ]
  },
  plugins: [
  ]

};

// npm startを実行した時の設定
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    //devtool: 'eval-source-map',
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

// npm buildを実行した時の設定
if(TARGET === 'build') {
  module.exports = merge(common, {
// productionとしてのbuild時にDevToolsを削除するには以下を有効にする。
//    plugins: [
//      new webpack.DefinePlugin({
//        'process.env.NODE_ENV': JSON.stringify('production')
//      })
//    ]
  });
}
