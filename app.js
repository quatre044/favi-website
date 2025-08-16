// Entry point for the Express application
const express = require('express');
const app = express();

// Middleware and routes will be added here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});