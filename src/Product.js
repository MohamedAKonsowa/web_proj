import React from 'react';
import './producthome.css'
const Product = ({ id, imageSrc, productName, description, toggleSections, setClickedItem, quantity, price, category}) => {
    const handleClick = () => {
        setClickedItem({id: id, imageSrc: imageSrc, productName: productName, description: description, quantity: 1, price: price, category: category});
        toggleSections(true);
    };

    return (

        <div className={"product-card"} onClick={handleClick}>
            <img src={imageSrc} alt={productName}/>
            <a href="#" >
                <h5>{productName}</h5>
            </a>
        </div>
    );
};

export default Product;
