"use strict";

var stripe = require("stripe")("sk_test_51QyrP8RwSMiXBxKwjfkHLlm8FCbneCAAERkxmjNlHZYVHQUGm66xOJAq9wTHoe9ZXPgj2WhULi22uMtQ3ICb0MXT00BnW6uWPu");

exports.createPayment = function _callee(req, res) {
  var _req$body, event_id, adult, child, adultCount, childCount, adultPrice, childPrice, totalAmount, lineItems, session;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, event_id = _req$body.event_id, adult = _req$body.adult, child = _req$body.child;
          adultCount = parseInt(adult) || 0;
          childCount = parseInt(child) || 0;
          adultPrice = 100000; // $1000 in cents

          childPrice = 50000; // $500 in cents

          totalAmount = adultCount * adultPrice + childCount * childPrice;

          if (!(totalAmount < 1)) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            error: "Total amount must be at least $0.01."
          }));

        case 9:
          lineItems = []; //line items is a list

          if (adultCount > 0) {
            //push adultdata in lineItems
            lineItems.push({
              price_data: {
                currency: "usd",
                product_data: {
                  name: "Adult Ticket"
                },
                unit_amount: adultPrice
              },
              quantity: adultCount
            });
          }

          if (childCount > 0) {
            //push childdata in lineItems
            lineItems.push({
              price_data: {
                currency: "usd",
                product_data: {
                  name: "Child Ticket"
                },
                unit_amount: childPrice
              },
              quantity: childCount
            });
          } // ✅ Create a new Stripe Checkout session


          _context.next = 14;
          return regeneratorRuntime.awrap(stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel"
          }));

        case 14:
          session = _context.sent;
          // ✅ Return session ID to the frontend
          res.json({
            id: session.id
          });
          _context.next = 22;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          console.error("Stripe Error:", _context.t0);
          res.status(500).json({
            error: _context.t0.message
          });

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 18]]);
};