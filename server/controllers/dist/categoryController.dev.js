"use strict";

var Category = require('../models/modelsCategory');

var Favourite = require('../models/modelFavourite');

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

exports.getFavourite = function _callee2(req, res) {
  var favourite;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Favourite.getFavourite());

        case 3:
          favourite = _context2.sent;
          res.json(favourite);
          console.log("getting favourite");
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.error('Error fetching category', _context2.t0);
          throw new Error('Error fetching event,arr.message');

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.updateStatus = function _callee3(req, res) {
  var category_id, active, updatedCategory;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          category_id = req.params.id; //category id from the url

          active = req.body.active;
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(Category.updateStatus(category_id, active));

        case 5:
          updatedCategory = _context3.sent;

          if (!updatedCategory) {
            _context3.next = 10;
            break;
          }

          return _context3.abrupt("return", res.json({
            updateStatus: updatedCategory.saved_status
          }));

        case 10:
          return _context3.abrupt("return", res.status(404).json({
            error: 'category not found'
          }));

        case 11:
          _context3.next = 17;
          break;

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](2);
          console.error('Errror updatign category', _context3.t0);
          res.status(500).json({
            error: 'failed to update category status'
          });

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 13]]);
};