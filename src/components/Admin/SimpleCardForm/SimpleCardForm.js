import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './SimpleCardForm.css';

const SimpleCardForm = ({ handlePayment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handlePayment(paymentMethod.card.brand)
            // setPayment(paymentMethod.card.brand)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className="pay-btn" type="submit" disabled={!stripe}>
                    PAY
                </button>
            </form>
            <div className="mt-3">
                {
                    paymentError && <h5 style={{ color: 'red' }}>{paymentError}</h5>
                }
                {
                    paymentSuccess && <h5 style={{ color: 'green' }}>Your payment is successful.</h5>
                }
            </div>
        </div>
    );
};

export default SimpleCardForm;