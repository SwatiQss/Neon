"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var pool = require('../db');

var Category =
/*#__PURE__*/
function () {
  function Category() {
    _classCallCheck(this, Category);
  }

  _createClass(Category, null, [{
    key: "getCategory",
    value: function getCategory() {
      var sql, result;
      return regeneratorRuntime.async(function getCategory$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              sql = 'SELECT c.category_id, c.category_name, c.saved_status, e.title, e.img FROM category c JOIN  events e ON c.event_id = e.id;';
              _context.prev = 1;
              _context.next = 4;
              return regeneratorRuntime.awrap(pool.query(sql));

            case 4:
              result = _context.sent;
              return _context.abrupt("return", result.rows);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error('Error fetching reviews', _context.t0);
              throw new Error("Error fetching Catagories:".concat(_context.t0.message));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }]);

  return Category;
}();

module.exports = Category;