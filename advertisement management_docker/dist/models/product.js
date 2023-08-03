"use strict";
// src/models/Product.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../db/config");
// import { Image } from './image';
var Status;
(function (Status) {
    Status["Active"] = "active";
    Status["NA"] = "na";
})(Status || (Status = {}));
class Product extends sequelize_1.Model {
}
exports.Product = Product;
Product.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    name: { type: sequelize_1.DataTypes.STRING },
    description: { type: sequelize_1.DataTypes.STRING },
    base_price: { type: sequelize_1.DataTypes.INTEGER },
    current_bid: { type: sequelize_1.DataTypes.INTEGER,
        // validate: {
        //   checkPrice(){
        //     if(this.current_bid){
        //     }
        //   }
        // }
    },
    owner_id: { type: sequelize_1.DataTypes.INTEGER },
    bidder_id: { type: sequelize_1.DataTypes.INTEGER },
    category_id: { type: sequelize_1.DataTypes.INTEGER },
    address_id: { type: sequelize_1.DataTypes.INTEGER },
    createdAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE
    },
    updatedAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE
    }
}, {
    sequelize: config_1.sequelize,
    modelName: 'Product'
});
config_1.sequelize.sync({ force: true });
