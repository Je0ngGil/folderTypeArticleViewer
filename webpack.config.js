import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

export default {
  entry: {
    components: './dev/Components',
    main: './dev/main.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './'),
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
  ],
  devServer: {
    static: {
      directory: './dev',
    },
    port: 3000,
  },
};
