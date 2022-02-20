const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    entry: './src/index.tsx',
    output: {
      filename: 'js/app.js',
      path: path.resolve('public'),
      assetModuleFilename: 'images/[hash][ext][query]',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      plugins: [new TsconfigPathsPlugin({})],
    },
    mode: 'development',
    module: {
      rules: [
        { test: /\.tsx?$/, exclude: /node_modules/, use: 'ts-loader' },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'resolve-url-loader',
            { loader: 'sass-loader', options: { sourceMap: true } },
          ],
        },
        { test: /\.(png|svg|jpe?g|gif)$/, type: 'asset/resource' },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/app.css',
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/favicon.ico',
        base: '/',
      }),
    ],
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
    },
  },
  {
    entry: './server/index.tsx',
    output: {
      filename: 'index.js',
      path: path.resolve('dist'),
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      plugins: [new TsconfigPathsPlugin({})],
    },
    externalsPresets: { node: true },
    externals: [nodeExternals()],
    mode: 'development',
    module: {
      rules: [
        { test: /\.tsx?$/, exclude: /node_modules/, use: 'ts-loader' },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'resolve-url-loader',
            { loader: 'sass-loader', options: { sourceMap: true } },
          ],
        },
        { test: /\.(png|svg|jpe?g|gif)$/, type: 'asset/resource' },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/app.css',
      }),
    ],
    devtool: 'source-map',
  },
];
