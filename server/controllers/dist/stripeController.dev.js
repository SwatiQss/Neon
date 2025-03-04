"use strict";

var stripe = require("stripe")("sk_test_51QyrP8RwSMiXBxKwjfkHLlm8FCbneCAAERkxmjNlHZYVHQUGm66xOJAq9wTHoe9ZXPgj2WhULi22uMtQ3ICb0MXT00BnW6uWPu");

exports.createPayment = function _callee(req, res) {
  var _req$body, event_id, adult, child, adultPrice, childPrice, totalAmount, _req$body2, _event_id, _adult, _child, _adultPrice, _childPrice, lineItems, session;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, event_id = _req$body.event_id, adult = _req$body.adult, child = _req$body.child;
          adultPrice = 1000;
          childPrice = 500; // Convert string values to numbers and calculate total price

          totalAmount = parseInt(adult) * adultPrice + parseInt(child) * childPrice;
          _context.prev = 4;
          _req$body2 = req.body, _event_id = _req$body2.event_id, _adult = _req$body2.adult, _child = _req$body2.child;
          _adultPrice = 100000; // $1000 in cents

          _childPrice = 50000; // $500 in cents

          lineItems = [{
            price_data: {
              currency: "usd",
              product_data: {
                name: "Adult Ticket"
              },
              unit_amount: _adultPrice
            },
            quantity: _adult
          }, {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Child Ticket"
              },
              unit_amount: _childPrice
            },
            quantity: _child
          }];
          _context.next = 11;
          return regeneratorRuntime.awrap(stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel"
          }));

        case 11:
          session = _context.sent;
          res.json({
            id: session.id
          });
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](4);
          console.error("Stripe Error:", _context.t0);
          res.status(500).json({
            error: _context.t0.message
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 15]]);
};