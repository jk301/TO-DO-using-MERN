import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import path from "path"

import noderoutes from "./routes/noderoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middle/rateLimiter.js"


dotenv.config();

//const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001
const __dirname = path.resolve();


//middleware
if(process.env.NODE_ENV !== "production"){
    app.use(
        cors( {
        origin:"http://localhost:5173",
    }));
}

app.use(express.json());
app.use(rateLimiter);


// //middleware for checking
// app.use((req, res, next) => {
//     console.log(`req method is ${req.method} & req url is ${req.url}`)
//     next()
// })

app.use("/api/notes", noderoutes)



if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../front/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../front","dist","index.html"))
    });

}

connectDB().then(() => {

app.listen(PORT, () => {
    console.log("server started on PORT: ",PORT);   
})
})


