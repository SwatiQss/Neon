"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// models/userModel.js
var pool = require('../db'); // Import PostgreSQL client (db.js)


var Event =
/*#__PURE__*/
function () {
  function Event() {
    _classCallCheck(this, Event);
  }

  _createClass(Event, null, [{
    key: "getEvent",
    //Method to get users
    value: function getEvent() {
      var sql, result;
      return regeneratorRuntime.async(function getEvent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              sql = "SELECT e.*, c.category_name\nFROM events e\nJOIN category c ON e.id = c.event_id;\n";
              _context.prev = 1;
              _context.next = 4;
              return regeneratorRuntime.awrap(pool.query(sql));

            case 4:
              result = _context.sent;
              return _context.abrupt("return", result.rows);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error('Error creating user:', _context.t0);
              throw new Error('Error creating user: ' + _context.t0.message);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }, {
    key: "getMap",
    value: function getMap() {
      var sql, result;
      return regeneratorRuntime.async(function getMap$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              sql = "Select l.latitude, l.longitude, e.title FROM loc l JOIN events e ON l.event_id=e.id";
              _context2.prev = 1;
              console.log("mapsss");
              _context2.next = 5;
              return regeneratorRuntime.awrap(pool.query(sql));

            case 5:
              result = _context2.sent;
              return _context2.abrupt("return", result.rows);

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              console.error('Error creating user:', _context2.t0);
              throw new Error('Error creating user:' + _context2.t0.message);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 9]]);
    }
  }]);

  return Event;
}();

module.exports = Event;