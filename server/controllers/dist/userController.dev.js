"use strict";

var User = require('../models/modelUser');

var _require = require('./reviewController'),
    createVibe = _require.createVibe;

exports.createUser = function _callee(req, res) {
  var _req$body, id, name, email, contact, dob, password, avatar_public_id, avatar_url, created_at, updated_at, userId;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, id = _req$body.id, name = _req$body.name, email = _req$body.email, contact = _req$body.contact, dob = _req$body.dob, password = _req$body.password, avatar_public_id = _req$body.avatar_public_id, avatar_url = _req$body.avatar_url, created_at = _req$body.created_at, updated_at = _req$body.updated_at;
          console.log("Received data:", req.body); // To check the data
          // Validate input fields

          if (!(!name || !email || !contact || !dob || !password)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: 'Missing required fields'
          }));

        case 4:
          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(User.createUser(id, name, email, contact, dob, password, // You should hash the password here if needed
          avatar_public_id, avatar_url, created_at, updated_at));

        case 7:
          userId = _context.sent;
          // Send success response with the new user ID
          res.status(201).json({
            message: 'User created successfully',
            userId: userId
          });
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](4);
          console.error('Error creating user:', _context.t0.message);
          res.status(500).json({
            message: 'Failed to create user',
            error: _context.t0.message
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 11]]);
};

exports.updateInterest = function _callee2(req, res) {
  var user_id, interest, updatedInterest;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          user_id = req.params.id;
          interest = req.body.interest;
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(User.updateInterest(user_id, interest));

        case 5:
          updatedInterest = _context2.sent;

          if (!updatedInterest) {
            _context2.next = 8;
            break;
          }

          return _context2.abrupt("return", res.json({
            updatedInterest: updatedInterest.interest
          }));

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](2);
          console.error("error updating intrest", _context2.t0);
          res.status(500).json({
            error: 'failed to update category status'
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 10]]);
};