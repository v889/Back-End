import express, { Request, Response, NextFunction } from "express";
export const productRouter=express.Router();
import { createProduct,deleteProduct,replaceProduct,updateProduct,getProduct,getAllProduct} from "../Controller/product";
productRouter.get('/products',getAllProduct)
.get("/products/:id",getProduct)
.post("/products",createProduct)
.put("/products/:id",replaceProduct)
.patch("/products/:id",updateProduct)
.delete("/products/:id",deleteProduct)
