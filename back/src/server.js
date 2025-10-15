import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import noderoutes from "./routes/noderoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middle/rateLimiter.js"


dotenv.config();

//const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001


//middleware
app.use(cors( {
    origin:"http://localhost:5173",
}));
app.use(express.json());
app.use(rateLimiter);


// //middleware for checking
// app.use((req, res, next) => {
//     console.log(`req method is ${req.method} & req url is ${req.url}`)
//     next()
// })

app.use("/api/notes", noderoutes)

connectDB().then(() => {

app.listen(PORT, () => {
    console.log("server started on PORT: ",PORT);   
})
})


