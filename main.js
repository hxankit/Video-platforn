import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { connectdb } from "./src/DB/connect.db.js"
import { app } from "./app.js"

dotenv.config()


connectdb()
    .then(() => {

        app.listen(process.env.PORT, () => {
            console.log("Server started");
        })

    })
    .catch((err) => {
        console.log("Mongo db connection fail");
    })
