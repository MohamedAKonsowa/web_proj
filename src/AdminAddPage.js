import {useState} from "react";
import './AdminPage.css'

export default function AdminAddPage() {
    const [imageSelected, setImageSelected] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    const handleAddItemClick = () => {
        // Trigger click event on file input
        document.getElementById('fileInput').click();
    };
    const handleSubmitClick = () => {
    };

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        // Check if a file is selected
        if (file) {
            setImageSelected(true);
            // Read the file and set the image URL
            const reader = new FileReader();
            reader.onload = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
            // You can handle the file here as needed (e.g., upload to server)
        }
    };

    return (
        <div>
        <form action="submit_product.php" method="POST" className="adminAddingForm">
            <label htmlFor="Name">Name:</label>
            <input type="text" name="Name" id="Name" required placeholder="Name..."/>

            <label htmlFor="Price">Price:</label>
            <input type="number" name="Price" id="Price" required placeholder="Price..."/>

            <label htmlFor="Description">Description:</label>
            <input type="text" name="Description" id="Description" required placeholder="Description..."/>

            <label htmlFor="Category">Category:</label>
            <input type="text" name="Category" id="Category" required placeholder="Category..."/>

            <div id="dropzone">Drop Image Here</div>

            {/* File input for image */}
            <input
                type="file"
                id="fileInput"
                style={{display: 'none'}}
                accept="image/*"
                onChange={handleFileInputChange}
            />

            {/* Display selected image */}
            {imageSelected && (
                <div className="adminAddImage">
                    <img id="image" src={imageUrl} alt="Uploaded Image"/>
                </div>
            )}

            {/* Button to trigger file input */}
            <button className="adminAddButton" type="button" onClick={handleAddItemClick}>
                Add Image
            </button>
            <button className="adminAddButton" type="button" onClick={handleSubmitClick}>
                Submit
            </button>
        </form>
        </div>
    );
}