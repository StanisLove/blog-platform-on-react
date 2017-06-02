const path = require('path');
require('app-module-path').addPath(path.join(process.cwd(), 'src'));
require('babel-core/register');
require('babel-polyfill');
require('./global');

require.extensions['.css'] = () => {
  return;
};

const webpack = require('webpack');
const host = 'localhost';
const port = 3000;

const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');

const config = require('../../webpack.config.js').default;
const compiler = webpack(config);

const express = require('express');
const application = express();

application.use(express.static('src/static'));
application.use(
  webpackDev(
    compiler,
    {
      hot: true,
      publicPath: config.output.publicPath,
      stats: { colors: true }
    }
  )
);
application.use(webpackHot(compiler));


application.set('views', __dirname);
application.set('view engine', 'ejs');

application.get('*', require('./render').default);

application.listen(port, function() { `Server listening on ${host}:${port}`; });
