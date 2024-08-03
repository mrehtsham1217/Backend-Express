// require("dotenv").config({ path: './env' })
import dotenv from 'dotenv'
import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from './db/database.db.js';
const app = express();
//This is an IFFY statement
dotenv.config({
    path: './env'
})

connectDB()
























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