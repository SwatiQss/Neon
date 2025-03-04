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
    key: "getItenary",
    value: function getItenary() {
      var sql, result;
      return regeneratorRuntime.async(function getItenary$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              sql = "Select * FROM events where status='active'";
              _context2.prev = 1;
              _context2.next = 4;
              return regeneratorRuntime.awrap(pool.query(sql));

            case 4:
              result = _context2.sent;
              console.log('😂😁');
              return _context2.abrupt("return", result.rows);

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              console.error('Error creating', _context2.t0);
              throw new Error('Error creating user:' + _context2.t0.message);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 9]]);
    }
  }, {
    key: "getMap",
    value: function getMap() {
      var sql, result;
      return regeneratorRuntime.async(function getMap$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              sql = "Select l.latitude, l.longitude, e.title FROM loc l JOIN events e ON l.event_id=e.id";
              _context3.prev = 1;
              console.log("mapsss");
              _context3.next = 5;
              return regeneratorRuntime.awrap(pool.query(sql));

            case 5:
              result = _context3.sent;
              return _context3.abrupt("return", result.rows);

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);
              console.error('Error creating user:', _context3.t0);
              throw new Error('Error creating user:' + _context3.t0.message);

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[1, 9]]);
    }
  }, {
    key: "createEvent",
    value: function createEvent(title, location, adult_price, child_price, total_seat, from_date, to_date, created_at, status, category, description, img) {
      var sql, values, result;
      return regeneratorRuntime.async(function createEvent$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              sql = "\n    INSERT INTO events (\n    \n    title,\n    location,\n    adult_price,\n    child_price,\n    total_seat,\n    from_date,\n    to_date,\n    created_at,\n    status,\n    category,\n    description,\n    img\n  )VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)\n  RETURNING *\n    ";
              values = [title, location, adult_price, child_price, total_seat, from_date, to_date, created_at, status, category, description, img];
              _context4.prev = 2;
              _context4.next = 5;
              return regeneratorRuntime.awrap(pool.query(sql, values));

            case 5:
              result = _context4.sent;
              console.log("reached to model events");
              return _context4.abrupt("return", result.rows[0]);

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](2);
              console.error('Error inserting reviews', _context4.t0);
              throw new Error('Error creating reviews');

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[2, 10]]);
    }
  }]);

  return Event;
}();

module.exports = Event;