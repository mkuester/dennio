const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: {
        dennio: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: './dist',
        host: true
    },

    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]

                /*use: [{
                    loader: "style-loader!css-loader!sass-loader"
                },
                {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                },
                {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]*/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            title: 'Dennio Music'
        }),
        new HtmlWebpackPlugin({
            filename: 'home.html',
            template: './src/pages/home.html',
            title: 'Home'
        }),
        new HtmlWebpackPlugin({
            filename: 'bio.html',
            template: './src/pages/bio.html',
            title: 'Biographie'
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/pages/contact.html',
            title: 'Contact'
        }),
        new HtmlWebpackPlugin({
            filename: 'music.html',
            template: './src/pages/music.html',
            title: 'Music'
        }),
        new HtmlWebpackPlugin({
            filename: 'acts.html',
            template: './src/pages/acts.html',
            title: 'Acts'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
};

module.exports = config;