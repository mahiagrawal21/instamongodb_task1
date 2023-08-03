"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import express, { Router } from "express";
const userSignup_1 = __importDefault(require("./userSignup"));
const productrouter_1 = require("./productrouter");
const addressrouter_1 = require("./addressrouter");
const imagerouter_1 = require("./imagerouter");
const categoryrouter_1 = require("./categoryrouter");
exports.default = [
    userSignup_1.default,
    categoryrouter_1.categRouter,
    productrouter_1.productRouter,
    addressrouter_1.addressRouter,
    imagerouter_1.imageRouter,
];
