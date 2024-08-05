import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

// for middleware-->While connection with frontend
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

// data will come from different sources json,forms urls and etc... you can put a limit
app.use(express.json({
    limit: "16kb",
}));

// express setting for urs-->urlencoded
app.use(express.urlencoded({
    extends: true,
    limit: "16kb",
}))
// for storing static files-->pdf or word files 
app.use(express.static("public"))

// server-->user browser can perform crud operations for usert
app.use(cookieParser())


export default app;