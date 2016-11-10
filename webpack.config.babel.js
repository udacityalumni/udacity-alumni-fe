const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const ROOT_PATH = path.resolve(__dirname);
const env = process.env.NODE_ENV || 'development';
const isProduction = env === 'production';
const PORT = process.env.PORT || 1337;
const HOST = '0.0.0.0'; // Set to localhost if need be.

module.exports = {
  devtool: isProduction ? '' : 'cheap-module-eval-source-map',
  entry: isProduction ? {
    main: [
      path.resolve(ROOT_PATH, 'app/src/index')
    ],
    vendor: [
      'react',
      'react-dom',
      'grommet-udacity'
    ]
  }
  :
  [
    'webpack-dev-server/client?http://0:0:0:0:1337',
    'webpack/hot/only-dev-server',
    path.resolve(ROOT_PATH,'app/src/index')
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: isProduction ? [] : ['eslint'],
        include: path.resolve(ROOT_PATH, './app')
      }
    ],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      include: path.join(__dirname, 'app/src'),
      loaders: ['react-hot-loader/webpack', 'babel'],
    },
    {
      test: /\.svg$/,
      loader: 'babel!svg-react'
    },
    {
      test: /\.json$/,
      loader: 'json'
    },
    {
      test: /\.module\.scss$/,
      loader: !isProduction ?
        'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!resolve-url-loader!postcss-loader!sass-loader'
      :
        ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!resolve-url-loader!postcss-loader!sass-loader'
        }),
    },
    {
      test: /\.scss$/,
      exclude: /\.module\.scss$/,
      loader: !isProduction ?
        'style-loader!css-loader!postcss-loader!sass-loader'
      :
        ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: '!css-loader!postcss-loader!sass-loader'
        }),
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
      loader: "url-loader?mimetype=application/font-woff"
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
      loader: "file-loader?name=[name].[ext]"
    },
    {
      test: /\.(jpg|png)$/,
      loader: 'file?name=[path][name].[hash].[ext]'
    }
  ]
  },
  sassLoader: {
    includePaths: [
      './node_modules',
    ]
  },
  postcss: function () {
    return {
      defaults: [precss, autoprefixer],
      cleaner:  [autoprefixer({ browsers: [] })]
    };
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      components: path.resolve(ROOT_PATH, 'app/src/components'),
      containers: path.resolve(ROOT_PATH, 'app/src/containers'),
      pages: path.resolve(ROOT_PATH, 'app/src/pages'),
      utils: path.resolve(ROOT_PATH, 'app/utils')
    },
  },
  output: {
    path: isProduction ?
      path.resolve(ROOT_PATH, 'server/public')
    :
      path.resolve(ROOT_PATH, 'app/build'),
    publicPath: '/',
    filename: isProduction ? '[name].[chunkhash].js' : 'bundle.js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  stats: {
    chunks: isProduction,
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'app/build'),
    historyApiFallback: true,
    publicPath: '/',
    hot: true,
    inline: true,
    progress: true,
    host: HOST,
    port: PORT,
    quiet: true, // Make it fast by not logging
    noInfo: true,
  },
  cache: true,
  plugins: isProduction ?
    [
      new ExtractTextPlugin({
        filename: '[name].[contenthash].css',
        allChunks: false
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        children: true,
        minChunks: 2,
        async: true,
      }),
      new HtmlwebpackPlugin({
        template: 'config/templates/_index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
        inject: true,
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }),
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: false
      }),
      new OfflinePlugin({
        relativePaths: false,
        publicPath: '/',
        caches: {
          main: [':rest:'],

          // All chunks marked as `additional`, loaded after main section
          // and do not prevent SW to install. Change to `optional` if
          // do not want them to be preloaded at all (cached only when first loaded)
          additional: ['*.chunk.js'],
        },
        safeToUseOptionalCaches: true,
        AppCache: false,
      }),
    ]
  :
    [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin(),
      new HtmlwebpackPlugin({
        title: 'Udacity Alumni Client',
        template: 'index.html'
      }),
    ]
};
