const stripe=require ("stripe")("sk_test_51QyrP8RwSMiXBxKwjfkHLlm8FCbneCAAERkxmjNlHZYVHQUGm66xOJAq9wTHoe9ZXPgj2WhULi22uMtQ3ICb0MXT00BnW6uWPu")
exports.createPayment=async(req,res)=>{
    const { event_id, adult, child } = req.body;
    const adultPrice = 1000;
    const childPrice = 500;
  
    // Convert string values to numbers and calculate total price
    const totalAmount = (parseInt(adult) * adultPrice) + (parseInt(child) * childPrice);
  
    try {
        const { event_id, adult, child } = req.body;
        
        const adultPrice = 100000; // $1000 in cents
        const childPrice = 50000;  // $500 in cents

        const lineItems = [
            { price_data: { currency: "usd", product_data: { name: "Adult Ticket" }, unit_amount: adultPrice }, quantity: adult },
            { price_data: { currency: "usd", product_data: { name: "Child Ticket" }, unit_amount: childPrice }, quantity: child }
        ];

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
        });

        res.json({ id: session.id });
    } catch (error) {
      console.error("Stripe Error:", error);
      res.status(500).json({ error: error.message });
    }
  
};