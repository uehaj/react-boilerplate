// http://minotaur.badwitch.io/react-webpack-boilerplate/
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
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
    // import/requireをするときに拡張子を省略できるようにする
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: PATHS.build,
    filename: 'build.js'
  },

   module: {
     loaders: [
       {
         // Babelローダー
         test: /\.jsx?$/,
         loaders: ['babel'],
         include: PATHS.app
       }
       ]
  },

  plugins: [
    new HtmlwebpackPlugin({
      title: 'Kanban'
    })
  ]

};

// npm startを実行した時の設定
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
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
  });
}
