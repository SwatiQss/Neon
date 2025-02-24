"use strict";

var Category = require('../models/modelsCategory');

exports.getCategory = function _callee(req, res) {
  var category;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Category.getCategory());

        case 3:
          category = _context.sent;
          res.json(category);
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error('Error fetching catagory', _context.t0);
          throw new Error('Error fetching event', _context.t0.message);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};