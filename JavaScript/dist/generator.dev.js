"use strict";

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(testGenerator);

function testGenerator() {
  return regeneratorRuntime.wrap(function testGenerator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 'hello';

        case 2:
          _context.next = 4;
          return 'world';

        case 4:
          return _context.abrupt("return", 'done');

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var tg = testGenerator();
console.log(tg.next());
console.log(tg.next());
console.log(tg.next());