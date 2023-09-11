const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the frontend build files
app.use(express.static(path.join(__dirname, "frontend/build")));

// Import and use your backend routes (assuming it returns a router)
const backendRoutes = require("./backend/app");
app.use("/api", backendRoutes);

// Serve the frontend application for any other routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
