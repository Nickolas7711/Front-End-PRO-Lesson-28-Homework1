const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        alias: {
            images: path.resolve(__dirname, 'src/images/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
        use: [
            'style-loader',
            'css-loader',
            // 'sass-loader'
        ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: ['file-loader'],
                // type: 'asset/resource',
                // generator: {
                //     filename: '/images/[name].[ext]',
                // },
            },
        ],
    },
    
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    plugins: [ new CopyPlugin({
        patterns: [
            {
              from: path.resolve(__dirname, 'src/images'),
              to:   path.resolve(__dirname, 'dist/images')
            }
          ]
        })
      ]
};