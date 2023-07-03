import express, { Request, Response, NextFunction } from "express";
import { Product} from "../model/product";
import * as fs from "fs";
import mongoose, { Schema, Document, ObjectId } from "mongoose";

const data = fs.readFileSync("data.json", "utf-8");
const products = JSON.parse(data).products;

export const getAllProduct = async (req: Request, res: Response) => {
  const products = await Product.find();
  res.json(products);
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(req.params);
  const product = await Product.findById(id);
  res.json(product);
};

export const createProduct = (req: Request, res: Response): void => {
  console.log("Create Product call")
  const product = new Product(req.body);
  product.save();
  res.status(201).json("Data send successfully");
};

export const replaceProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndReplace({ _id: id }, req.body, { new: true });
    res.status(201).json([{ message: "Update successfully" }, product]);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
    res.status(201).json([{ message: "Update successfully" }, product]);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndDelete({ _id: id });
    res.status(201).json([{ message: "Delete successfully" }, product]);
  } catch (err) {
    res.status(400).json(err);
  }
};
