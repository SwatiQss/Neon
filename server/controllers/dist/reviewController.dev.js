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