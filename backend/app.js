// backend/app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const addProductRouter = require("./routes/add-product");
const searchProductsRouter = require("./routes/search-products");

// Use the routes
app.use("/api/add-product", addProductRouter);
app.use("/api/search", searchProductsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
