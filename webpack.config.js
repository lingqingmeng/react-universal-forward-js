module.exports = {
  entry: './client/components/App.js',
  output: {
    path: __dirname + '/public',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};
