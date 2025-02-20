"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// models/userModel.js
var pool = require('../db'); // Import PostgreSQL client (db.js)


var User =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, null, [{
    key: "getUser",
    //Method to get users
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
              console.error('Error creating user:', _context.t0);
              throw new Error('Error creating user: ' + _context.t0.message);

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
      var sql, values, result, insertedId;
      return regeneratorRuntime.async(function createUser$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log("Received data:", req.body); // Ensure the data is valid and that all required fields are present.

              if (!(!name || !email || !contact || !dob || !password)) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return", res.status(400).send({
                message: 'Missing required fields'
              }));

            case 3:
              // SQL query to insert the data into the 'profile' table
              sql = "\n        INSERT INTO profile (id, name, email, contact, dob, password, avatar_public_id, avatar_url, created_at, updated_at)\n        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id\n    ";
              values = [id, name, email, contact, dob, password, avatar_public_id, avatar_url, created_at, updated_at];
              _context2.prev = 5;
              _context2.next = 8;
              return regeneratorRuntime.awrap(pool.query(sql, values));

            case 8:
              result = _context2.sent;
              // Returning the inserted row's id
              insertedId = result.rows[0].id;
              res.status(200).json({
                message: 'User added successfully',
                userId: insertedId
              });
              _context2.next = 17;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](5);
              console.error('Error inserting data:', _context2.t0);
              res.status(500).send({
                message: 'Error saving user data'
              });

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[5, 13]]);
    }
  }]);

  return User;
}();

module.exports = User;