let paypal = null;

try {
    if (process.env.PAYPAL_CLIENT_ID && process.env.PAYPAL_CLIENT_SECRET) {
        paypal = require('paypal-rest-sdk');
        paypal.configure({
            mode: process.env.PAYPAL_MODE || 'sandbox', // default sandbox
            client_id: process.env.PAYPAL_CLIENT_ID,
            client_secret: process.env.PAYPAL_CLIENT_SECRET
        });
        console.log("✅ PayPal configured");
    } else {
        console.warn("⚠ PayPal credentials missing, PayPal features disabled.");
    }
} catch (err) {
    console.warn("⚠ PayPal SDK not loaded:", err.message);
}

module.exports = paypal;
