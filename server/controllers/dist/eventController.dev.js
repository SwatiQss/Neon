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

exports.getMap = function _callee2(req, res) {
  var map;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          console.log("we reached here 2222");
          _context2.next = 4;
          return regeneratorRuntime.awrap(Event.getMap());

        case 4:
          map = _context2.sent;
          res.json(map);
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.error('Error fetching map: ', _context2.t0);
          throw new Error('Error fetching map:' + _context2.t0.message);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};