import { useState } from "react";

export default function AdminRemovePage({ productsData }) {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductSelectChange = (event) => {
        const productId = event.target.value;
        const product = productsData.find(product => product.id === parseInt(productId));
        setSelectedProduct(product);
    };

    const handleRemoveButtonClick = () => {
        if (selectedProduct) {
            // Perform removal logic here, such as updating state or making an API call
            console.log(`Removing product: ${selectedProduct.productName}`);
            // Reset the selected product
            setSelectedProduct(null);
        }
    };

    return (
        <div>
            <form className="adminRemoveForm">
                <label htmlFor="productName">Select Product:</label>
                <select
                    id="productName"
                    value={selectedProduct ? selectedProduct.id : ''}
                    onChange={handleProductSelectChange}
                >
                    <option value="">Select a product...</option>
                    {productsData.map(product => (
                        <option key={product.id} value={product.id}>
                            {product.productName}
                        </option>
                    ))}
                </select>
                {selectedProduct && (
                    <div className="adminRemoveImage">
                        <img src={selectedProduct.imageSrc} alt="Product Image" />
                    </div>
                )}
                <button
                    className="adminRemoveButton"
                    type="button"
                    onClick={handleRemoveButtonClick}
                    disabled={!selectedProduct}
                >
                    Confirm Removal
                </button>
            </form>
        </div>
    );
}
