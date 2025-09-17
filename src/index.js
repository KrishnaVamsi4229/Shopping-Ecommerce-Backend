const express = require('express');
const responseTime = require('response-time');
const { PORT } = require('./config/server_config')
const api = require('./routes/api_router')

const app = express();
//app.use(responseTime());

// app.use(responseTime(function fn(request,response,time){
//     console.log(time);
//     response.setHeader("X-Response-Time",time);
// }))

//app.get("/ping",(request,response) => {
//    return response.json({ message : "ok" });
//})

app.use("/api", api);


app.listen(PORT || 3000,() => {
    console.log(` Server Stared on ${PORT} `);
})