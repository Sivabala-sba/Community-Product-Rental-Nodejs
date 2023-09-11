// frontend/public/js/add-product.js

// Example JavaScript code for your "Add Product" page (add-product.html)

// You can add your JavaScript code here to handle the form submission and other interactions.

// Example: Handle form submission
document.addEventListener("DOMContentLoaded", function () {
    const addProductForm = document.getElementById("add-product-form");

    addProductForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form input values
        const productName = document.getElementById("productName").value;
        const description = document.getElementById("description").value;
        const contactInfo = document.getElementById("contactInfo").value;

        // Example: Send data to the server (replace with actual API request)
        const formData = {
            productName,
            description,
            contactInfo,
        };

        // You can use fetch or another library to send a POST request to your server
        // fetch("/api/add-product", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(formData),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Handle the response from the server
        //     console.log(data);
        // })
        // .catch(error => {
        //     // Handle errors
        //     console.error(error);
        // });
        
        // Clear form fields after submission (you can customize this behavior)
        addProductForm.reset();

        // Display a success message or handle the response from the server
        alert("Product added successfully!");
    });
});
