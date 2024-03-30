import React from 'react';
import './productDescription.css'
const ProductDescriptionSection = ({product, setSelectedItems, selectedItems}) => {
    const addItemToCart = () => {
        if (!selectedItems.some(item => item.id === product.id)) {
            setSelectedItems(prevItems => [...prevItems, product]);
        }
    };
    return (
        <div className="main-containerDes">
            <div className={"img-card"}>
                <img src={product.imageSrc} alt={product.productName} className="ProductDescription-image"/>

            </div>
            <div className="description-area">
                <h2>{product.productName}</h2>
                {product.price && <p>price: {product.price}</p>}
                {product.category && <p>category: {product.category}</p>}
                <p>{product.description}</p>
                <a href={"#.com"} onClick={addItemToCart}>Add to cart</a>
            </div>
        </div>
    );
}

export default ProductDescriptionSection;
