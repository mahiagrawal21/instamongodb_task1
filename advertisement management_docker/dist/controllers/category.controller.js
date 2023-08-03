"use strict";
//import { sequelize } from "../db/config";
//import { Category } from "../models/category";
//const { QueryTypes } = require('sequelize');
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getCategoriesService_1 = __importDefault(require("../service/getCategoriesService"));
const getCategoriesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const { id } = req.body;
    try {
        const result = yield (0, getCategoriesService_1.default)();
        res.status(200).json({ message: "Categories fetch from database", result });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "error in categories fetching" });
    }
});
exports.default = getCategoriesController;
// export class category {
//     //****** By using Recursive CTE to find category and sub category in one API *******/
//     static async getCategory(req: any, res: any) {
//        try{
//         const recursiveQuery = `
//         WITH RECURSIVE category_recursive AS (
//             -- Anchor member
//             SELECT id, name, parent_id
//             FROM "Categories"
//             WHERE parent_id IS NULL
//             UNION ALL
//             -- Recursive member
//             SELECT c.id, c.name, c.parent_id
//             FROM "Categories" c
//             INNER JOIN category_recursive cr ON c.parent_id = cr.id
//           )
//           SELECT *
//           FROM category_recursive
//         `;
//         const categoriesWithSubcategories = await sequelize.query(recursiveQuery, {
//             type: QueryTypes.SELECT,
//         });
//         // return categoriesWithSubcategories;
//         res.status(200).json(categoriesWithSubcategories);
//     }catch(error){
//         res.status(500).json({message: "Server Error"});
//     //         console.error(error);
//     //     }
//     }
// }
//***** By using seperate API for category, subcategory and sub-sub category */
//     static async getCategory(req:any,res:any){
//         const subParent_id =req.headers.subparent;
//         const sub_subParent_id = req.headers.subsubparent;
//         try {
//             const Categories = await Category.findAll({
//                 where: {
//                     parent_id: null
//                 }
//             });
//             const subCategories = await Category.findAll({
//                 where:{
//                     parent_id:subParent_id
//                 }
//             })
//             const sub_sub_category = await Category.findAll({
//                 where:{
//                     parent_id:sub_subParent_id
//                 }
//             })
//             res.status(200).json(Categories,subCategories,sub_sub_category);
//         } catch (error) {
//             res.status(500).json({message: "Server Error", error});
//             console.error(error);
//         }
//     }
//     static async getSubCategory(req,res){
//         const subParent_id =req.headers.subparent;
//         console.log(subParent_id);
//         try {
//             const subCategories = await Category.findAll({
//                 where:{
//                     parent_id:subParent_id
//                 }
//             });
//             res.status(200).json(subCategories);
//         } catch (error) {
//             res.status(500).json({message: "Server Error"});
//             console.error(error);
//         }
//     }
//     static async getSubSubCategory(req:any,res:any){
//         const sub_subParent_id = req.headers.subsubparent;
//         try {
//             const sub_sub_category = await Category.findAll({
//                 where:{
//                     parent_id:sub_subParent_id
//                 }
//             })
//             res.status(200).json(sub_sub_category);
//         } catch (error) {
//             res.status(500).json({message: "Server Error", error});
//             console.error(error);
//         }
//     }
// }
