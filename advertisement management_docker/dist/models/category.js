"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../db/config");
class Category extends sequelize_1.Model {
}
exports.Category = Category;
Category.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    category_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    subcategories: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    image: {
        type: sequelize_1.DataTypes.BLOB,
        allowNull: true,
    },
}, {
    sequelize: config_1.sequelize,
    modelName: 'Category',
    tableName: 'Category'
});
config_1.sequelize.sync({ alter: true });
