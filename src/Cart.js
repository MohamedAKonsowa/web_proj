import React, {useEffect, useState} from 'react';
import ShoppingCart from "./ShoppingCart";
import Order from "./Order";
import "./shippinginfo.css"
import axios from "axios";

const Cart = ({ productsData, setClickedItem, setOrders, orders, loginName}) => {
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const user_URL = 'http://localhost:3030/user';


    useEffect(() => {
        const getAllOrders = async () => {
            try {
                const getOrderURL = user_URL + "/getOrder";
                const response = await axios.post(getOrderURL, loginName);
                //use setOrders to edit the array of orders
            } catch (error) {
                console.error('Error:', error);
            }
        };

        // Call the function when the component mounts
        getAllOrders();
    }, []);

    const generateRandomNumbers = () => {
        const numbers = [];
        for (let i = 0; i < 16; i++) {
            const randomNumber = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
            numbers.push(randomNumber);
        }
        return numbers;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newOrder = {
                loginName: loginName,
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
            const orderURI = user_URL+"/order";
            const response = await axios.post(orderURI, newOrder);
            if (response.status === 200) alert("Order Confirmed")
            else alert("Order Failed")
        } catch (error) {
            console.error('Error:', error);
            // Handle other errors (e.g., network issues)
            // Optionally, you can display a generic error message to the user
        }
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
