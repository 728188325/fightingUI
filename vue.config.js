module.exports = {
  pages: {
    index: {
      publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  css: {
    extract: true
  }
};
