const express = require('express');
const { PORT } = require('./config/server_config')
const api = require('./routes/api_router')

const app = express();

//app.get("/ping",(request,response) => {
//    return response.json({ message : "ok" });
//})

app.use("/api", api);


app.listen(PORT || 3000,() => {
    console.log(` Server Stared on ${PORT} `);
})