const express = require('express');
const setupRoutes = require('./routers/indexRouter');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 8000;

setupRoutes(app);

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
});