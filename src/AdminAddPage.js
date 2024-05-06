import { useState } from "react";
import './AdminPage.css';
import axios from "axios";

export default function AdminAddPage() {
    const [imageSelected, setImageSelected] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [sizes, setSizes] = useState([]);

    const handleAddItemClick = () => {
        // Trigger click event on file input
        document.getElementById('fileInput').click();
    };

    const handleSubmitClick = async () => {
        try{
            const formData = {
                Name: document.getElementById('Name').value,
                Price: parseFloat(document.getElementById('Price').value),
                Description: document.getElementById('Description').value,
                Category: document.getElementById('Category').value,
                Sizes: sizes,
                Image: imageSelected ? imageUrl : null
            };
        // Append image file if selected
        if (imageSelected) {
            formData.append('Image', document.getElementById('fileInput').files[0]);
        }
        await axios.post('https://localhost/submit_form', formData);

            document.getElementById('adminForm').reset(); //3lshan reset el form


        } catch (error) {
            console.error('Error submitting form:', error);
        }
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

    const handleSizeChange = (event) => {
        // Update sizes array when input field for sizes changes
        setSizes(event.target.value.split(',').map(size => size.trim()));
    };

    return (
        <div>
            <form action="submit_product.php" method="POST" className="adminAddingForm">
                <label htmlFor="Name">Name:</label>
                <input type="text" name="Name" id="Name" required placeholder="Name..." />

                <label htmlFor="Price">Price:</label>
                <input type="number" name="Price" id="Price" required placeholder="Price..." />

                <label htmlFor="Description">Description:</label>
                <input type="text" name="Description" id="Description" required placeholder="Description..." />

                <label htmlFor="Category">Category:</label>
                <input type="text" name="Category" id="Category" required placeholder="Category..." />

                <label htmlFor="Sizes">Sizes (comma-separated):</label>
                <input type="text" name="Sizes" id="Sizes" onChange={handleSizeChange} placeholder="Sizes..." />

                <div id="dropzone">Drop Image Here</div>

                {/* File input for image */}
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={handleFileInputChange}
                />

                {/* Display selected image */}
                {imageSelected && (
                    <div className="adminAddImage">
                        <img id="image" src={imageUrl} alt="Uploaded Image" />
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
