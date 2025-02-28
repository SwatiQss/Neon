"use strict";

var Review = require('../models/modelReview');

exports.createReview = function _callee(req, res) {
  var _req$body, id, user_id, event_id, quality_of_event, services_at_event, operator_of_event, facilities_of_event, staff_politeness, comment, created_at, updated_at, reviewId;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, id = _req$body.id, user_id = _req$body.user_id, event_id = _req$body.event_id, quality_of_event = _req$body.quality_of_event, services_at_event = _req$body.services_at_event, operator_of_event = _req$body.operator_of_event, facilities_of_event = _req$body.facilities_of_event, staff_politeness = _req$body.staff_politeness, comment = _req$body.comment, created_at = _req$body.created_at, updated_at = _req$body.updated_at; // Validate the input values for ratings (assuming the allowed range is 1 to 5)

          if (!(facilities_of_event < 1 || facilities_of_event > 5)) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: 'Facilities rating must be between 1 and 5'
          }));

        case 3:
          if (!(quality_of_event < 1 || quality_of_event > 5)) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: 'Quality rating must be between 1 and 5'
          }));

        case 5:
          if (!(services_at_event < 1 || services_at_event > 5)) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: 'Services rating must be between 1 and 5'
          }));

        case 7:
          if (!(operator_of_event < 1 || operator_of_event > 5)) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: 'Operator rating must be between 1 and 5'
          }));

        case 9:
          if (!(staff_politeness < 1 || staff_politeness > 5)) {
            _context.next = 11;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: 'Staff politeness rating must be between 1 and 5'
          }));

        case 11:
          console.log("Received data", req.body);
          _context.prev = 12;
          _context.next = 15;
          return regeneratorRuntime.awrap(Review.createReview(id, user_id, event_id, quality_of_event, services_at_event, operator_of_event, facilities_of_event, staff_politeness, comment, created_at, updated_at));

        case 15:
          reviewId = _context.sent;
          res.status(201).json({
            message: 'Review added successfully'
          });
          _context.next = 23;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](12);
          console.error('Error creating review:', _context.t0.message);
          res.status(500).json({
            message: 'Failed to create review',
            error: _context.t0.message
          });

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[12, 19]]);
};

exports.getReview = function _callee2(req, res) {
  var review;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Review.getReview());

        case 3:
          review = _context2.sent;
          res.json(review);
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error('Error fetching reviews:', _context2.t0);
          throw new Error('Error fetching reviews:' + _context2.t0.message);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.createVibe = function _callee3(req, res) {
  var _req$body2, user_id, event_id, vibes, experience, vibe;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body2 = req.body, user_id = _req$body2.user_id, event_id = _req$body2.event_id, vibes = _req$body2.vibes, experience = _req$body2.experience;
          console.log("received data", req.body);
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(Review.createVibe(user_id, event_id, vibes, experience));

        case 5:
          vibe = _context3.sent;
          res.status(201).json({
            message: 'Vibes added succefully'
          });
          _context3.next = 13;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](2);
          console.error('Error creating review:', _context3.t0.message);
          res.status(500).json({
            message: 'failed to create review',
            error: _context3.t0.message
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 9]]);
};