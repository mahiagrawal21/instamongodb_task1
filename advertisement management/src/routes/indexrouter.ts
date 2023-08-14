//import express, { Router } from "express";
import  userrouter  from "./userSignup"; 
import { productRouter } from "./productrouter";
import { addressRouter } from "./addressrouter";
import { imageRouter } from "./imagerouter";
import { categRouter } from "./categoryrouter";


export default [
    userrouter,
    categRouter,
    productRouter,
    addressRouter,
    imageRouter,
];