import express, { Request, Response, NextFunction } from "express";
import * as fs from "fs"
import morgan from 'morgan';
import {config} from "dotenv";
import { productRouter } from "./Routes/product";
import  {connectdb} from "./data/database";
import cors from "cors"
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true // Enable sending cookies along with the request
  };
const server=express()
server.use(express.json())
server.use(cors(corsOptions));
const data=fs.readFileSync('data.json','utf-8')
const products = JSON.parse(data).products;

config(
    {
        path:"./data/config.env"
    }
)
connectdb();
server.use('/api/v1/',productRouter)



server.listen(process.env.PORT,()=>{
    console.log("Server is working")
})

/*
server.get('/products/:id', (req, res) => {
    const id = +req.params.id;
    const product = products.find((p: Product) => p.id == id);
    res.json(product);
});
server.post("/products",(req,res)=>{
    console.log(req.body)
    products.push(req.body)
    res.status(201).json(req.body)

})

server.put('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex((p: Product) => p.id == id);
    products.splice(productIndex,1,{...req.body,id:id})
    res.status(201).json({"message":"update sucessfully"});
});
server.patch('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex((p: Product) => p.id == id);
    const product=products[productIndex]
    products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json({"message":"update sucessfully"});
});

server.delete('/products/:id',(req,res)=>{
    const id=+req.params.id;
    const productIndex = products.findIndex((p: Product) => p.id == id);
    products.splice(productIndex,1)
    res.status(201).json({"message":"Delete sucessfully"});
})
*/
//custom middleware
//Applicationlevel middleware
/*
server.use((req,res,next)=>{
    console.log(req.method,req.hostname,req.ip,new Date())
    next();
})*/
//morgan use for server log
/*
server.use(morgan('combined'));

const auth = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.query);
    if (req.query.password) {
        next();
    } else {
        res.sendStatus(401);
    }
};
const auth2 = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.query);
    if (req.body.password==='123') {
        next();
    } else {
        res.sendStatus(401);
    }
};
//server.use(auth)
//bulid in bulid middleware

server.get('/',auth,(req,res)=>{
    res.json({type:'GET'})
})
server.post('/',auth2,(req,res)=>{
    res.json({type:'POST'})
})
server.put('/',(req,res)=>{
    res.json({type:'PUT'})
})
server.delete('/',(req,res)=>{
    res.json({type:'DELETE'})
})*/
//Route Based Middleware

/* 
server.get('/',(req,res)=>{
    //res.sendStatus(404)
    //res.end("<h1>Hello world</h1>")
    res.status(201).send('<h1>Hello world</h1>')
})*/

