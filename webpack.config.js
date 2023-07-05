const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: ['./src/scripts/index.ts', './src/styles/index.scss'],
	context: __dirname,
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.cjs', '.mjs', '.js', '.ts', '.tsx'],
		plugins: [new TsconfigPathsPlugin()]
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					transpileOnly: true,
					experimentalFileCaching: true
				}
			},
			{
				test: /\.(css|scss|sass)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: './assets'
						}
					},
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			}
		]
	},

	plugins: [
		new ForkTsCheckerWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'index.css'
		})
	]
}
