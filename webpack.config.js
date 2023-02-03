"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const TSConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const glob = require("glob");
const webpack = require("webpack");

const pagesSourceDirectory = `${__dirname}/src/pages/`;

const baseConfig = {
	entry: {
		main: `${__dirname}/src/main.tsx`
	},
	output: {
		filename: "[name].js",
		path: `${__dirname}/site`,
		publicPath: "/",
		clean: true
	},
	resolve: {
		extensions: [".js", ".ts", ".jsx", ".tsx"],
		plugins: [
			new TSConfigPathsPlugin({
				configFile: `${__dirname}/tsconfig.json`
			})
		]
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			exclude: /node_modules/,
			use: [{
				loader: "ts-loader"
			}]
		},{
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader,
				"css-loader",
				"sass-loader",
				"glob-import-loader"
			]
		}]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		...glob.sync(`${pagesSourceDirectory}**/*.tsx`).map((file) => {
			return new HtmlWebpackPlugin({
				filename: `${file.slice(pagesSourceDirectory.length, -4)}.html`,
				hash: true,
				cache: false,
				template: file
			});
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css"
		})
	],
	devServer: {
		server: "http",
		webSocketServer: false,
		static: `${__dirname}/site`,
		open: true
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				extractComments: false
			})
		]
	},
	stats: {
		builtAt: true,
		context: `${__dirname}/src`,
		entrypoints: false,
		errorDetails: false,
		modules: false
	}
};

module.exports = (env) => {
	if (env.dev) {
		baseConfig.mode = "development";
		baseConfig.devtool = "inline-source-map";
	}

	if (env.dist) {
		baseConfig.mode = "production";
	}

	return baseConfig;
};
