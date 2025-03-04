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

exports.getItenary = function _callee2(req, res) {
  var itenary;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Event.getItenary());

        case 3:
          itenary = _context2.sent;
          res.json(itenary);
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error('Error fetching data', _context2.t0);
          throw new Error('Error fetching itenary:' + _context2.t0.message);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getMap = function _callee3(req, res) {
  var map;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          console.log("we reached here 2222");
          _context3.next = 4;
          return regeneratorRuntime.awrap(Event.getMap());

        case 4:
          map = _context3.sent;
          res.json(map);
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error('Error fetching map: ', _context3.t0);
          throw new Error('Error fetching map:' + _context3.t0.message);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.createEvent = function _callee4(req, res) {
  var _req$body, title, location, adult_price, child_price, total_seat, from_date, to_date, created_at, status, category, description, img, eventId;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _req$body = req.body, title = _req$body.title, location = _req$body.location, adult_price = _req$body.adult_price, child_price = _req$body.child_price, total_seat = _req$body.total_seat, from_date = _req$body.from_date, to_date = _req$body.to_date, created_at = _req$body.created_at, status = _req$body.status, category = _req$body.category, description = _req$body.description, img = _req$body.img;
          console.log("Received dadta:", req.body);
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(Event.createEvent(title, location, adult_price, child_price, total_seat, from_date, to_date, created_at, status, category, description, img));

        case 5:
          eventId = _context4.sent;
          res.status(201).json({
            message: 'event created successfully',
            eventId: eventId
          });
          _context4.next = 13;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](2);
          console.error('Error creating user', _context4.t0.message);
          res.status(500).json({
            message: 'Failed to create user',
            err: _context4.t0
          });

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 9]]);
};