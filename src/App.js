    import React, { useState } from 'react';
    import TopSection from './TopSection';
    import HomePage from './HomePage';
    import downloadImage from 'C:\\Users\\mkonm\\WebstormProjects\\web_proj\\src\\hoddie.jpg';
    import downloadImage2 from 'C:\\Users\\mkonm\\WebstormProjects\\web_proj\\src\\OIP.jpg';

    import SearchPage from "./SearchPage";
    import Cart from "./Cart";
    import ProductDescriptionSection from "./ProductDescriptionSection";

    function App() {
        const productsData = [
            { id: 0, imageSrc: downloadImage, productName: 'Product 1' , description: 'description', quantity: 0, price:700, category:"Hoodie"},
            { id: 1, imageSrc: downloadImage, productName: 'Product 2' , description: 'description', quantity: 0, price:700, category:"Hoodie"},
            { id: 2, imageSrc: downloadImage2, productName: 'Product 3' , description: 'description', quantity: 0, price:700, category:"Hoodie"},
            { id: 3, imageSrc: downloadImage2, productName: 'Product 4' , description: 'description', quantity: 0, price:700, category:"Hoodie"},
            { id: 4, imageSrc: downloadImage, productName: 'Product 5' , description: 'description', quantity: 0, price:700, category:"Hoodie"},
            { id: 5, imageSrc: downloadImage, productName: 'Product 6' , description: 'description', quantity: 0, price:700, category:"Hoodie"},
            { id: 6, imageSrc: downloadImage2, productName: 'Product 7' , description: 'description', quantity: 0, price:700, category:"Hoodie"},
            { id: 7, imageSrc: downloadImage, productName: 'Product 8' , description: 'description', quantity: 0, price:700, category:"Hoodie"},
            { id: 8, imageSrc: downloadImage, productName: 'Product 9' , description: 'description', quantity: 0, price:700, category:"Hoodie"},
        ];
        const [orders, setOrders] = useState([]);
        const [clickedItem, setClickedItem] = useState([]);
        const [selectedItems, setSelectedItems] = useState([]);
        const [showSearchSection, setSearchSection] = useState(false);
        const [showProductSection, setProductSection] = useState(false);
        const [showHomeSection, setHomeSection] = useState(true);
        const [showProductDescriptionSection, setProductDescriptionSection] = useState(false);
        const [showCartSection, setCartSection] = useState(false);


        const toggleSearchSections = (show) => {
            setSearchSection(show);
            setProductSection(show);
            setProductDescriptionSection(!show);
            setCartSection(!show);
            setHomeSection(!show);
        };
        const toggleHomeSearchSections = (show) => {
            setSearchSection(!show);
            setProductSection(!show);
            setHomeSection(show);
            setProductDescriptionSection(!show);
            setCartSection(!show);
        };
        const toggleProductDescriptionSection = (show) => {
            setProductDescriptionSection(show);
            setSearchSection(!show);
            setProductSection(!show);
            setHomeSection(!show);
            setCartSection(!show);
        };
        const toggleCartSection = (show) => {
            setCartSection(show);
            setProductDescriptionSection(!show);
            setSearchSection(!show);
            setProductSection(!show);
            setHomeSection(!show);
        };

        return (
            <>
                <div>
                    <TopSection toggleSections={toggleSearchSections} toggleHomeSearchSections={toggleHomeSearchSections} toggleCartSection={toggleCartSection} />
                </div>
                <div className={"test1"}>

                    <div>
                        <SearchPage showSearchSection={showSearchSection} showProductSection={showProductSection}
                                    productsData={productsData}
                                    toggleSearchSections={toggleSearchSections}
                                    toggleProductDescriptionSection={toggleProductDescriptionSection}
                                    setClickedItem={setClickedItem}>
                        </SearchPage>
                    </div>
                    <div>
                        {showHomeSection && (
                            <HomePage productsData={productsData} toggleSections={toggleProductDescriptionSection}
                                      setClickedItem={setClickedItem}></HomePage>)}
                    </div>
                    <div>
                        {showProductDescriptionSection &&
                            <ProductDescriptionSection product={clickedItem} setSelectedItems={setSelectedItems}
                                                       selectedItems={selectedItems}></ProductDescriptionSection>}
                    </div>
                    <div>
                        {showCartSection && (
                            <Cart productsData={selectedItems} setClickedItem={setSelectedItems} setOrders={setOrders}
                                  orders={orders}></Cart>)}
                    </div>
                </div>
            </>
        );
    }

    export default App;
