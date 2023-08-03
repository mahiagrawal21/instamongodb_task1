"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// import sequelize from 'sequelize';
const config_1 = __importDefault(require("../db/config"));
const Users_1 = __importDefault(require("../models/Users"));
class address extends sequelize_1.Model {
}
address.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // user_Id:{
    //     type:DataTypes.INTEGER,
    //     allowNull: false
    // },
    house_number: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    street: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    area: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    landmark: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    zip_code: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    address_type: {
        type: sequelize_1.DataTypes.ENUM('Home', 'Work'),
        defaultValue: 'Home'
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: Date.now(),
        allowNull: false
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: Date.now(),
        allowNull: false
    }
}, {
    sequelize: config_1.default,
    modelName: 'address',
    tableName: 'addresses'
});
config_1.default.sync({ alter: true });
Users_1.default.hasMany(address, { foreignKey: 'user_Id' });
exports.default = address;
