"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const TSConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const glob = require("glob");
const path = require("path");
const webpack = require("webpack");

const npmPackage = require(path.resolve(__dirname, "package.json"));

const siteOutputDirectory = path.resolve(__dirname, "site");
const pagesSourceDirectory = path.resolve(__dirname, "src", "pages");

const baseConfig = {
	entry: {
		main: path.resolve(__dirname, "src", "main.tsx")
	},
	output: {
		filename: "[name].js",
		path: path.resolve(siteOutputDirectory, npmPackage.name),
		publicPath: `/${npmPackage.name}/`,
		clean: true
	},
	resolve: {
		extensions: [".js", ".ts", ".jsx", ".tsx"],
		plugins: [
			new TSConfigPathsPlugin({
				configFile: path.resolve(__dirname, "tsconfig.json")
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
		...glob.sync(`${pagesSourceDirectory}/**/*.tsx`).map((file) => {
			return new HtmlWebpackPlugin({
				filename: `${file.slice(pagesSourceDirectory.length + 1, -4)}.html`,
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
		static: siteOutputDirectory,
		open: [npmPackage.name]
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
		context: path.resolve(__dirname, "src"),
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
