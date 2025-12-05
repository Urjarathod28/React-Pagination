import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors"
import productsRoutes from "./routes/product.router.js"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api",productsRoutes);

app.listen(process.env.PORT ,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})