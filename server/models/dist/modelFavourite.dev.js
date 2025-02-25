"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var pool = require('../db');

var Favourite =
/*#__PURE__*/
function () {
  function Favourite() {
    _classCallCheck(this, Favourite);
  }

  _createClass(Favourite, null, [{
    key: "getFavourite",
    value: function getFavourite() {
      var sql, result;
      return regeneratorRuntime.async(function getFavourite$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              sql = 'SELECT c.category_id, c.category_name, c.saved_status, e.title, e.img FROM category c JOIN events e ON c.event_id = e.id WHERE c.saved_status = true;';
              _context.prev = 1;
              _context.next = 4;
              return regeneratorRuntime.awrap(pool.query(sql));

            case 4:
              result = _context.sent;
              return _context.abrupt("return", result.rows);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error('error fetchingfavourites', _context.t0);
              throw new Error('Error fetching cat');

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }]);

  return Favourite;
}();

module.exports = Favourite;