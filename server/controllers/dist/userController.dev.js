"use strict";

var User = require('../models/modelUser'); //const bcrypt = require('bcrypt');


var saltRounds = 10;

exports.createUser = function _callee(req, res) {
  var _req$body, id, name, email, contact, dob, password, avatar_public_id, avatar_url, created_at, updated_at, hashedPassword;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, id = _req$body.id, name = _req$body.name, email = _req$body.email, contact = _req$body.contact, dob = _req$body.dob, password = _req$body.password, avatar_public_id = _req$body.avatar_public_id, avatar_url = _req$body.avatar_url, created_at = _req$body.created_at, updated_at = _req$body.updated_at;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(bcrypt.hash(password, saltRounds));

        case 4:
          hashedPassword = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(User.createUser({
            id: id,
            name: name,
            email: email,
            contact: contact,
            dob: dob,
            password: password,
            // Save the hashed password
            avatar_public_id: avatar_public_id,
            avatar_url: avatar_url,
            created_at: created_at,
            updated_at: updated_at
          }));

        case 7:
          res.status(201).json({
            message: 'User created successfully'
          });
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          console.error('Error creating user:', _context.t0.message); // Log the error

          res.status(500).json({
            message: 'Failed to create user',
            error: _context.t0.message
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

exports.getUser = function _callee2(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.getUser());

        case 3:
          user = _context2.sent;
          res.json(user);
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error('Error fetching user:', _context2.t0); // Log the error

          res.status(500).json({
            message: 'Failed to fetch user',
            error: _context2.t0.message
          }); // Return a 500 error response with message

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};