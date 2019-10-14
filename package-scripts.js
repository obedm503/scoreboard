const { concurrent } = require('nps-utils');

exports.scripts = {
  dev: concurrent({
    webpack: 'webpack -w',
    start: 'nodemon dist/ -e js --ignore node_modules/ --exec "npm run start"',
  }),
};
