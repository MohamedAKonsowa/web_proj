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
    import AdminAddPage from "./AdminAddPage";
    import AdminRemovePage from "./AdminRemovePage";
    import AdminPage from "./AdminPage";

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
            { id: 8, imageSrc: downloadImage, productName: 'Product 9' , description: 'description', quantity: 0, price:700, category:"Hoodie"}
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
        const [showAdmin, setShowAdmin] = useState(false);
        const [showLogin , setLogin] = useState(false);
        const [showRegister , setRegister] = useState(false);
        const toggleOff = (show) => {
            setCartSection(!show);
            setProductDescriptionSection(!show);
            setSearchSection(!show);
            setProductSection(!show);
            setHomeSection(!show);
            setLogin(!show);
            setRegister(!show)
            setContactSection(!show);
            setShowAdmin(!show);
        }
        const toggleLogin =(show) => {
            toggleOff(show);
            setLogin(show);
        }

        const toggleRegister =(show) => {
            toggleOff(show);
            setRegister(show);
        }

        const toggleAdminPage = (show) => {
            toggleOff(show);
            setShowAdmin(show);
        }

        const toggleSearchSections = (show)=> {
            toggleOff(show);
            setSearchSection(show);
            setProductSection(show);
        };
        const toggleHomeSearchSections = (show) => {
            toggleOff(show);
            setHomeSection(show);
        };
        const toggleProductDescriptionSection = (show) => {
            toggleOff(show);
            setProductDescriptionSection(show);
        };
        const toggleCartSection = (show) =>{
            toggleOff(show);
            setCartSection(show);
        };
        const toggleContactSection = (show) =>{
            toggleOff(show);
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
                        {showLogin && <Login toggleRegister={toggleRegister} toggleAdminPage={toggleAdminPage}/>}
                    </div>
                    <div>
                        {showRegister && <Register toggleLogin={toggleLogin}/>}
                    </div>
                    <div>
                        {showAdmin && (<AdminPage productsData={productsData}></AdminPage>)}
                    </div>
                </div>
            </>
        );
    }

    export default App;
