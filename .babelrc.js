const rootImportOpts = {
  paths: [
    {
      root: process.env.PWD,
      rootPathPrefix: '!/',
      rootPathSuffix: './',
    },
    {
      root: __dirname,
      rootPathPrefix: '~/',
      rootPathSuffix: 'src',
    },
  ],
};

module.exports = {
  presets: ['@babel/preset-react'],
  plugins: [['babel-plugin-root-import', rootImportOpts]],
};
