import path from 'path';
import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import dotenv from 'dotenv';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

export default () => {
  dotenv.config();

  return {
    entry: {
      components: './dev/Components',
      main: './dev/main.ts',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './dist'),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: './dev/index.html', to: 'index.html' },
          { from: './dev/css/style.css', to: 'css/style.css' },
          { from: './dev/css/normalize.css', to: 'css/normalize.css' },
        ],
      }),
      new webpack.DefinePlugin({
        GITHUB_URL: JSON.stringify(process.env.GITHUB_URL),
        GAT1: JSON.stringify(process.env.GITHUB_ACCESS_TOKEN1),
        GAT2: JSON.stringify(process.env.GITHUB_ACCESS_TOKEN2),
        GAT3: JSON.stringify(process.env.GITHUB_ACCESS_TOKEN3),
      }),
    ],
    devServer: {
      static: {
        directory: 'dist/',
      },
      port: 3000,
    },
  };
};
