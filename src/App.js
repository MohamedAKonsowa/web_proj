    import React, { useState } from 'react';
    import TopSection from './TopSection';
    import HomePage from './HomePage';
    import downloadImage from './hoddie.jpg';
    import downloadImage2 from './OIP.jpg';
    import ContactSection from './ContactSection';
    import SearchPage from "./SearchPage";
    import Cart from "./Cart";
    import ProductDescriptionSection from "./ProductDescriptionSection";
    import Login from "./Login";
    import Register from "./Register";

    function App() {
        const productsData  = [
            { id: 0, imageSrc: downloadImage, productName: 'Product 1' , description: 'description', quantity: 0, price:700, category:"Hoodie"},
            { id: 1, imageSrc: downloadImage, productName: 'Product 2' , description: 'description', quantity: 0, price:700, category:"Hoodie"},
            { id: 2, imageSrc: downloadImage2, productName: 'Product 3' , description: 'description', quantity: 0, price:700, category:"T-shirt"},
            { id: 3, imageSrc: downloadImage2, productName: 'Product 4' , description: 'description', quantity: 0, price:700, category:"T-shirt"},
            { id: 4, imageSrc: downloadImage, productName: 'Product 5' , description: 'description', quantity: 0, price:700, category:"Hoodie"},
            { id: 5, imageSrc: downloadImage, productName: 'Product 6' , description: 'description', quantity: 0, price:700, category:"Hoodie"},
            { id: 6, imageSrc: downloadImage2, productName: 'Product 7' , description: 'description', quantity: 0, price:700, category:"T-shirt"},
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
        const [showContactSection, setContactSection] = useState(false);
        const [showLogin , setLogin] = useState(false);
        const [currentPage, setCurrentPage] = useState("login");

        const handleFormSwitch = (page) => {
            setCurrentPage(page);
        };
        const toggleLogin =(show) => {
            setCartSection(!show);
            setProductDescriptionSection(!show);
            setSearchSection(!show);
            setProductSection(!show);
            setHomeSection(!show);
            setLogin(show);
            setContactSection(!show);
        }


        const toggleSearchSections = (show)=> {
            setSearchSection(show);
            setProductSection(show);
            setProductDescriptionSection(!show);
            setCartSection(!show);
            setHomeSection(!show);
            setContactSection(!show);
            setLogin(!show);
        };
        const toggleHomeSearchSections = (show) => {
            setSearchSection(!show);
            setProductSection(!show);
            setHomeSection(show);
            setProductDescriptionSection(!show);
            setCartSection(!show);
            setContactSection(!show);
            setLogin(!show);
        };
        const toggleProductDescriptionSection = (show) => {
            setProductDescriptionSection(show);
            setSearchSection(!show);
            setProductSection(!show);
            setHomeSection(!show);
            setCartSection(!show);
            setContactSection(!show);
            setLogin(!show);
        };
        const toggleCartSection = (show) =>{
            setSearchSection(!show);
            setProductSection(!show);
            setHomeSection(!show);
            setProductDescriptionSection(!show);
            setCartSection(show);
            setContactSection(!show);
            setLogin(!show);
        };
        const toggleContactSection = (show) =>{
            setCartSection(!show);
            setProductDescriptionSection(!show);
            setSearchSection(!show);
            setProductSection(!show);
            setHomeSection(!show);
            setLogin(!show);
            setContactSection(show);
        };

        return (
            <>
                <div>
                    <TopSection toggleSections={toggleSearchSections} toggleHomeSearchSections={toggleHomeSearchSections} toggleCartSection={toggleCartSection}  toggleContactSection={toggleContactSection} toggleLogin={toggleLogin}/>
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
                    <div>
                        {showContactSection && (
                            <ContactSection></ContactSection>)}
                    </div>
                    <div>
                        {showLogin && (
                            currentPage === 'login' ? (
                                <Login onFromSwitch={() => handleFormSwitch('register')}/>
                            ) : (
                                <Register onFromSwitch={() => handleFormSwitch('login')}/>
                            )
                        )}
                    </div>
                </div>
            </>
        );
    }

    export default App;
