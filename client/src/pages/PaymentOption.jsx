import React, { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Typography,
    Paper
} from "@mui/material";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

const PaymentOption = () => {
    // const KEY = process.env.REACT_APP_STRIPE;
    const KEY = "pk_test_51Mk8csSDOpj5LyOrqDAw18LXXdXTYpzhzFC3fVzpjyvFe8hAMUMaGLIJ1bUkhLo9hZLpoQNyAxYo5pwqX7ouj4q500q8hwVaK7";
    console.log(KEY)
    const [paymentMethod, setPaymentMethod] = useState("COD");
    const [stripeToken, setStripeToken] = useState(null);
    const total = useSelector(state => state.cart.totalPrice);

    const onToken = (token) => {
        setStripeToken(token);
    }

    console.log(stripeToken);

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handlePaymentSubmit = (event) => {
        event.preventDefault();
        console.log(paymentMethod); // Do something with selected payment method
    };

    return (
        <>
            <Paper elevation={3} sx={{ margin: "10px auto", width: "500px", padding: "20px" }}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>Payment Options</Typography>

                <Box sx={{ margin: "20px 150px", width: "100%" }}>
                    <FormControl component="fieldset">
                        <FormLabel>Select Payment Method</FormLabel>
                        <RadioGroup
                            aria-label="payment-method"
                            name="payment-method"
                            value={paymentMethod}
                            onChange={handlePaymentMethodChange}
                        >
                            <FormControlLabel
                                value="COD"
                                control={<Radio />}
                                label="COD(Cash On Delivery)"
                            />
                            <FormControlLabel
                                value="UPI"
                                control={<Radio />}
                                label="UPI"
                            />
                            <FormControlLabel
                                value="Card"
                                control={<Radio />}
                                label="Debit/Credit Card"
                            />
                        </RadioGroup>
                        <StripeCheckout
                            name="Bookmart"
                            description={`Your total amout is ₹${total}`}
                            billingAddress
                            shippingAddress
                            amount={total * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <Button variant="contained">Continue To Payment</Button>
                        </StripeCheckout>
                    </FormControl>
                </Box>
            </Paper>
        </>
    )
}

export default PaymentOption;