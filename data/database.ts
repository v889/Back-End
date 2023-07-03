import mongoose from "mongoose";
export const connectdb=()=>{
    const mongoUrl= process.env.MONGO_URL || "mongodb://localhost:27017/Ecommerce";
   mongoose
    .connect(mongoUrl, { dbName: "Ecommerce" })
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));
}