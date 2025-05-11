import React from 'react';
import loadRazorpayScript from './loadRazorpay';
import axios from 'axios';

const Billing = ({store}) => {

    var cart = JSON.parse(localStorage.getItem('cl'));
    var totalAmount = cart.reduce((sum, item) => sum + (item.item.pcost * item.qty), 0);
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    console.log(totalItems)
    console.log(cart)

  // const handlePayment1 = async () => {
    //    const res = await axios.post(`http://54.208.245.240:8081/order`, {
      //      "name": localStorage.getItem('name'),
        //    "email": localStorage.getItem('email'),
          //  "cart": localStorage.getItem('cart')
       // });
        //const {data} = result;
    //     console.log(res.data);
    //     handlePayment();
    // }

    const handlePayment = async () => {
        // Load the Razorpay script
        const isLoaded = await loadRazorpayScript();
        if (!isLoaded) {
            alert('Failed to load Razorpay SDK. Please check your internet connection.');
            return;
        }

        // Initialize Razorpay options
        const options = {
            key: 'rzp_live_oI9TuWQAHOCphM', // Replace with your Razorpay Key ID
            amount: totalAmount * 100, // Amount in the smallest currency unit (e.g., 500.00 INR = 50000 paise)
            currency: 'INR',
            name: 'ExcelR',
            description: 'Test Transaction',
            image: 'https://example.com/your_logo', // Replace with your company logo URL
            handler: (response) => {
                // This function handles the payment success event
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                console.log('Payment Response:', response);
                // You can also verify the payment on the server-side here
            },
            prefill: {
                name: localStorage.getItem('name'), // Pre-filled customer name
                email: localStorage.getItem('email'), // Pre-filled customer email
                contact: '9003632708', // Pre-filled customer contact number
            },
            notes: {
                address: 'Corporate Office', // Additional notes
            },
            theme: {
                color: '#3399cc', // Theme color of the Razorpay modal
            },
        };

        // Open the Razorpay payment modal
        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    return (
        <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Invoice</h1>

            {/* Billing and From Addresses */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                {/* From Address */}
                <div>
                    <h3 style={{ marginBottom: '5px' }}>From:</h3>
                    <p style={{ margin: 0 }}>{localStorage.getItem('name')}</p>
                    <p style={{ margin: 0 }}>K L University</p>
                    <p style={{ margin: 0 }}>Vijayawada</p>
                    <p style={{ margin: 0 }}>Andhra Pradesh</p>
                </div>
                {/* Billing Address */}
                <div>
                    <h3 style={{ marginBottom: '5px' }}>Billing Address:</h3>
                    <p style={{ margin: 0 }}>KLUniversity</p>
                    <p style={{ margin: 0 }}>Vijayawada</p>
                    <p style={{ margin: 0 }}>FDP</p>
                    <p style={{ margin: 0 }}>Andhra Pradesh</p>
                </div>
            </div>

            {/* Table Format */}
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f4f4f4', textAlign: 'left' }}>
                        <th style={{ border: '1px solid #ddd', padding: '10px' }}>#</th>
                        <th style={{ border: '1px solid #ddd', padding: '10px' }}>Product Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '10px' }}>Price (₹)</th>
                        <th style={{ border: '1px solid #ddd', padding: '10px' }}>Quantity</th>
                        <th style={{ border: '1px solid #ddd', padding: '10px' }}>Total (₹)</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={index}>
                            {console.log(item)}
                            <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{index + 1}</td>
                            <td style={{ border: '1px solid #ddd', padding: '10px' }}>{item.item.pname}</td>
                            <td style={{ border: '1px solid #ddd', padding: '10px' }}>₹{item.item.pcost}</td>
                            <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{item.qty}</td>
                            <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                                ₹{(item.item.pcost * item.qty).toLocaleString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Total Amount */}
            <div style={{ textAlign: 'right', fontSize: '18px', fontWeight: 'bold', marginTop: '20px' }}>
                Total Amount: ₹{totalAmount.toLocaleString()}
            </div>

            {/* Proceed to Pay Button */}
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <button
                    onClick={handlePayment}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#3399cc',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Proceed to Pay
                </button>
            </div>
        </div>
    );
};

export default Billing;

