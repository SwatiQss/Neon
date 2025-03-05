"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var pool = require('../db'); // Import PostgreSQL client (db.js)


var User =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, null, [{
    key: "getUser",
    // Method to get users
    value: function getUser() {
      var sql, result;
      return regeneratorRuntime.async(function getUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              sql = "SELECT * FROM profile";
              _context.prev = 1;
              _context.next = 4;
              return regeneratorRuntime.awrap(pool.query(sql));

            case 4:
              result = _context.sent;
              return _context.abrupt("return", result.rows);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error('Error fetching users:', _context.t0);
              throw new Error('Error fetching users: ' + _context.t0.message);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 8]]);
    } // Method to create a new user

  }, {
    key: "createUser",
    value: function createUser(id, name, email, contact, dob, password, avatar_public_id, avatar_url, created_at, updated_at) {
      var sql, values, result;
      return regeneratorRuntime.async(function createUser$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // SQL query to insert the data into the 'profile' table
              sql = "\n            INSERT INTO profile (id, name, email, contact, dob, password, avatar_public_id, avatar_url, created_at, updated_at)\n            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id\n        ";
              values = [id, name, email, contact, dob, password, avatar_public_id, avatar_url, created_at, updated_at];
              _context2.prev = 2;
              _context2.next = 5;
              return regeneratorRuntime.awrap(pool.query(sql, values));

            case 5:
              result = _context2.sent;
              return _context2.abrupt("return", result.rows[0].id);

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);
              console.error('Error inserting user:', _context2.t0);
              throw new Error('Error saving user data: ' + _context2.t0.message);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[2, 9]]);
    }
  }, {
    key: "updateInterest",
    value: function updateInterest(user_id, interest) {
      var sql, values, result;
      return regeneratorRuntime.async(function updateInterest$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              sql = ' UPDATE interests SET interest=$1 WHERE user_id=$2 RETURNING *';
              values = [interest, user_id];
              _context3.prev = 2;
              console.log('UPDATE IN INTREST');
              _context3.next = 6;
              return regeneratorRuntime.awrap(pool.query(sql, values));

            case 6:
              result = _context3.sent;
              return _context3.abrupt("return", result.rows[0]);

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](2);
              console.error('Eror updating from model', _context3.t0);
              throw new Error('failed from model');

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[2, 10]]);
    }
  }]);

  return User;
}();

module.exports = User;