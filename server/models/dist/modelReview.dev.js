"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var pool = require('../db');

var Review =
/*#__PURE__*/
function () {
  function Review() {
    _classCallCheck(this, Review);
  }

  _createClass(Review, null, [{
    key: "getReview",
    // Method to get reviews from the database
    value: function getReview() {
      var sql, result;
      return regeneratorRuntime.async(function getReview$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              sql = 'SELECT r.id, r.comment, r.experience, e.title FROM reviews r JOIN events e ON r.event_id=e.id';
              _context.prev = 1;
              _context.next = 4;
              return regeneratorRuntime.awrap(pool.query(sql));

            case 4:
              result = _context.sent;
              return _context.abrupt("return", result.rows);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error('Error fetching reviews:', _context.t0);
              throw new Error("Error fetching reviews: ".concat(_context.t0.message));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 8]]);
    } // Method to create a review

  }, {
    key: "createReview",
    value: function createReview(id, user_id, event_id, quality_of_event, services_at_event, operator_of_event, facilities_of_events, staff_politeness, comment, created_at, updated_at) {
      var sql, values, result;
      return regeneratorRuntime.async(function createReview$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!id || !user_id || !event_id || !quality_of_event || !services_at_event || !operator_of_event || !facilities_of_events || !staff_politeness || !comment || !created_at || !updated_at)) {
                _context2.next = 2;
                break;
              }

              throw new Error("Missing required fields to create a review");

            case 2:
              // SQL query to insert a new review
              sql = "\n        INSERT INTO reviews (id, user_id, event_id, quality_of_event, services_at_event, operator_of_event, facilities_of_events, staff_politeness, comment, created_at, updated_at)\n        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)\n        RETURNING *  -- This will return the inserted row\n        ";
              values = [id, user_id, event_id, quality_of_event, services_at_event, operator_of_event, facilities_of_events, staff_politeness, comment, created_at, updated_at];
              _context2.prev = 4;
              _context2.next = 7;
              return regeneratorRuntime.awrap(pool.query(sql, values));

            case 7:
              result = _context2.sent;
              return _context2.abrupt("return", result.rows[0]);

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](4);
              console.error('Error inserting review:', _context2.t0);
              throw new Error("Error creating review: ".concat(_context2.t0.message));

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[4, 11]]);
    }
  }, {
    key: "createVibe",
    value: function createVibe(id, vibes, experience) {
      var sql, values, result;
      return regeneratorRuntime.async(function createVibe$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              sql = "INSERT INTO vibometer(id,vibes,experience)\n    VALUES($1, $2,$3)\n    RETURNING *";
              values = [id, vibes, experience];
              _context3.prev = 2;
              _context3.next = 5;
              return regeneratorRuntime.awrap(pool.query(sql, values));

            case 5:
              result = _context3.sent;
              return _context3.abrupt("return", result.rows[0]);

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](2);
              console.error('Error inserting review:', _context3.t0);
              throw new Error("Error creating review: ".concat(_context3.t0.message));

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[2, 9]]);
    }
  }]);

  return Review;
}();

module.exports = Review;