/*
import mongoose from "mongoose";
require('dotenv').config()

async function Connect() {
    mongoose
    .connect(
        process.env.DB_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            userCreateIndex: true,
        }
    )
    .then(() => {
        console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
        console.log("Unable to connect to MongoDB Atlas!");
        console.error(error);
      });
}

export default Connect

*/
