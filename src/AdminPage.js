import { useState } from "react";
import AdminAddPage from "./AdminAddPage";
import AdminRemovePage from "./AdminRemovePage";

export default function AdminPage({productsData}) {
    const [currentPage, setCurrentPage] = useState("remove");

    const handleAddClick = () => {
        setCurrentPage("add");
    };

    const handleRemoveClick = () => {
        setCurrentPage("remove");
    };

    return (
        <div className="adminPage">
            <div className="sidebar">
                <button onClick={handleAddClick}>Add</button>
                <button onClick={handleRemoveClick}>Remove</button>
            </div>
            <div className="content">
                {currentPage === "remove" ? <AdminRemovePage productsData={productsData} /> : <AdminAddPage />}
            </div>
        </div>
    );
}
