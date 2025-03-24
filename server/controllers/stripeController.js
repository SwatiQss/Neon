const stripe = require("stripe")("sk_test_51QyrP8RwSMiXBxKwjfkHLlm8FCbneCAAERkxmjNlHZYVHQUGm66xOJAq9wTHoe9ZXPgj2WhULi22uMtQ3ICb0MXT00BnW6uWPu");

exports.createPayment = async (req, res) => {
    try {

        const { event_id, adult, child } = req.body;


        const adultCount = parseInt(adult) || 0;
        const childCount = parseInt(child) || 0;


        const adultPrice = 100000; // $1000 in cents
        const childPrice = 50000;  // $500 in cents


        const totalAmount = (adultCount * adultPrice) + (childCount * childPrice);


        if (totalAmount < 1) {
            return res.status(400).json({ error: "Total amount must be at least $0.01." });
        }


        const lineItems = [];//line items is a list

        if (adultCount > 0) {//push adultdata in lineItems
            lineItems.push({
                price_data: {
                    currency: "usd",
                    product_data: { name: "Adult Ticket" },
                    unit_amount: adultPrice,
                },
                quantity: adultCount,
            });
        }

        if (childCount > 0) {//push childdata in lineItems
            lineItems.push({
                price_data: {
                    currency: "usd",
                    product_data: { name: "Child Ticket" },
                    unit_amount: childPrice,
                },
                quantity: childCount,
            });
        }

        // ✅ Create a new Stripe Checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3000/",
            cancel_url: "http://localhost:3000/cancel",
        });

        // ✅ Return session ID to the frontend
        res.json({ id: session.id });

    } catch (error) {
        console.error("Stripe Error:", error);
        res.status(500).json({ error: error.message });
    }
};
