"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// import sequelize from 'sequelize';
const config_1 = __importDefault(require("../db/config"));
class User extends sequelize_1.Model {
}
User.init({
    user_Id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
    phone_number: {
        type: sequelize_1.DataTypes.BIGINT,
        //    allowNull : false,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: Date.now(),
        allowNull: true
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: Date.now(),
        allowNull: true
    },
}, {
    sequelize: config_1.default,
    modelName: 'users',
    tableName: 'users'
});
// (async ()=>{
//     await User.sync({alter: true});
// })();
// sequelize.sync({ force: true })
// sequelize.sync({force:true})
// sequelize.sync({force: true});
exports.default = User;
