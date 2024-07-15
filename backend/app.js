import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config({path:"./config/config.env"});

const allowedOrigins = [process.env.FRONTEND_URL];

app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ["POST"],
    credentials: true,
}));

app.options("*", cors({ origin: allowedOrigins, methods: ["POST"], credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/api/v1/message",messageRouter);

dbConnection();

export default app;