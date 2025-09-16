const express = require('express');
const { PORT } = require('./config/serverConfig')

const app = express();


app.listen(PORT || 3000,() => {
    console.log(` Server Stared on ${PORT} `);
})