// require("dotenv").config({ path: './env' })
import dotenv from 'dotenv'
import express from "express";
import connectDB from './db/database.db.js';
const app = express();
//This is an IFFY statement
dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        })
        app.on("error", () => {
            console.log("App is unable to connect");
            throw error;
        })

    })
    .catch((error) => {
        console.log("Mongodb error: ", error);


    })
























/*
; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", () => {
            console.log("App is unable to connect");
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port http://localhost:${process.env.PORT}`);


        })


    } catch (error) {
        console.error("ERROR...!", error);
        throw error

    }
})()
    */