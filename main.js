'use strict';

require('babel-polyfill');

function getData() {
  return new Promise(function (resolve, reject) {
    resolve('ok');
  });
}

function run() {
  var data;
  return regeneratorRuntime.async(function run$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(getData());

        case 3:
          data = _context.sent;

          console.log(data);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context['catch'](0);

          console.log('An error occurred: \n', _context.t0);

        case 10:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this, [[0, 7]]);
}

run().then(function (d) {
  return console.log('Done!');
});