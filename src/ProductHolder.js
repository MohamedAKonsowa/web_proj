import './App.css'
import React, {useEffect, useState} from 'react';
import Product from './Product';
import axios from "axios";

const ProductHolder = ({  toggleSections, setClickedItem}) => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get('/api/products'); // dont forget updating the back end url
                setProducts(response.data)
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchData(); // Call the function to fetch data when the component mounts
    }, []);

    return (
        <div className="product-holder">
            {products.map((product, index) => (
                <Product key={index} id={product.id} imageSrc={product.imageSrc} productName={product.productName}
                         description={product.description} toggleSections={toggleSections}
                         setClickedItem={setClickedItem} quantity={product.quantity} price={product.price} category={product.category}
                         sizes={product.sizes}
                />
            ))}
        </div>
    );
};

export default ProductHolder;



