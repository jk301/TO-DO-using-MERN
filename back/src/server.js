import express from "express"
import noderoutes from "./routes/noderoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config();

//const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001

connectDB();

//middleware
app.use(express.json());

app.use("/api/notes", noderoutes)


app.listen(PORT, () => {
    console.log("server started on PORT: ",PORT);   
})



