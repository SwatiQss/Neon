"use strict";

// controllers/userController.js
var Event = require('../models/modelEvent');

exports.getEvent = function _callee(req, res) {
  var event;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Event.getEvent());

        case 3:
          event = _context.sent;
          res.json(event);
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error('Error fetching event:', _context.t0);
          throw new Error('Error fetching event: ' + _context.t0.message);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};