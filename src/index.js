import 'dotenv/config'
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from './db/index.js';
import { app } from "./app.js"

connectDB()
.then(app.listen(process.env.PORT || 8080, (req, res) => {
    console.log(`\nServer started on Port : ${process.env.PORT}`);
}))
.catch((err) => {
    console.log("\nError while connecting DB!! : ", err);
})











// (async () => {
//     try {
//         const connectionInstance = await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         console.log(`DB connected : ${connectionInstance}`);
//     } catch (error) {
//         console.error(`Failed to connect to DB : ${error}`);
//         throw error;
//     }
// })()