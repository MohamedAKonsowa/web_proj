import React, { useState } from 'react';
import ShoppingCart from "./ShoppingCart";
import Order from "./Order";
import "./shippinginfo.css"

const Cart = ({ productsData, setClickedItem, setOrders, orders}) => {
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const generateRandomNumbers = () => {
        const numbers = [];
        for (let i = 0; i < 16; i++) {
            const randomNumber = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
            numbers.push(randomNumber);
        }
        return numbers;
    };
    const handelOrder = () => {
        const newOrder = {
            street: street,
            city: city,
            country: country,
            phoneNumber: phoneNumber,
            orderData: productsData,
            trackingNumber: generateRandomNumbers()
        };
        setOrders([...orders, newOrder]);
        setClickedItem([]);
        // Additional logic for handling the order submission
    };

    return (
        <div className="container">
            <div className="item" id="products">
                <ShoppingCart productsData={productsData} setClickedItem={setClickedItem}/>
            </div>

            <div className="item" id="shippingDiv">
                <div className="shipping">
                    <h2>Shipping Information</h2>
                    <label className={"shippingInfoLabel"} htmlFor={"street"}>Street:</label>
                    <input className={"input"} type="text" name={"street"} value={street} placeholder={"Street Name/No."} onChange={(e) => setStreet(e.target.value)}/>

                    <label className={"shippingInfoLabel"} htmlFor={"city"}>City:</label>
                    <input className={"input"} type="text" name={"city"} placeholder={"City Name"} value={city} onChange={(e) => setCity(e.target.value)}/>

                    <label className={"shippingInfoLabel"} htmlFor={"country"}>Country:</label>
                    <input className={"input"} type="text" name={"country"} placeholder={"Country Name"} value={country} onChange={(e) => setCountry(e.target.value)}/>

                    <label className={"shippingInfoLabel"} htmlFor={"phoneNumber"}>Phone Number:</label>
                    <input className={"input"}  type="text" name={"phoneNumber"} placeholder={"+20123457891"} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>

                    <input id={"submitButton"} type="submit" onClick={handelOrder}/>
                </div>
            </div>
            {orders.length > 0 && (
                <div className="item" id="orders">
                    {orders.map((order, index) => (
                        <div key={index} className="order">
                            <h3>Order {index + 1}</h3>
                            <Order
                                orderData={order.orderData}
                                city={order.city}
                                country={order.country}
                                phoneNumber={order.phoneNumber}
                                street={order.street}
                                trackingNumber={order.trackingNumber}
                            />
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default Cart;
