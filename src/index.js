const express = require('express');
const mysql = require("mysql2");
const { PORT , DB_HOST , DB_USER , DB_PASS , DB_NAME } = require('./config/server_config')

const db = mysql.createConnection({
    host : DB_HOST,
    user : DB_USER,
    password : DB_PASS,
    database : DB_NAME,
});



const bodyParser = require('body-parser')
const responseTime = require('response-time');
const api = require('./routes/api_router')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended : true}));


//app.use(responseTime());

// app.use(responseTime(function fn(request,response,time){
//     console.log(time);
//     response.setHeader("X-Response-Time",time);
// }))

//app.get("/ping",(request,response) => {
//    return response.json({ message : "ok" });
//})

app.use("/api", api);


app.listen(PORT || 3000 , () => {
    console.log(`Server Stared on ${PORT} `);

    db.connect((err) => {
        if(err){
            console.log("DB didn't connect");
            console.log(err);
            throw err;
        }
        console.log("DB connected");
        db.query("select * from products",(err,result) => {
            if(err){
                console.log(err);
                throw err;
            }
            console.log(result);
        })
    });
})