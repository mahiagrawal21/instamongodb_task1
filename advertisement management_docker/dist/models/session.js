"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../db/config");
const sequelize_typescript_1 = require("sequelize-typescript");
class Session extends sequelize_1.Model {
}
Session.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    deviceId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    createdAt: {
        allowNull: false,
        type: sequelize_typescript_1.DataType.DATE
    },
    updatedAt: {
        allowNull: false,
        type: sequelize_typescript_1.DataType.DATE
    }
}, {
    sequelize: config_1.sequelize,
    tableName: 'session',
});
config_1.sequelize.sync({ force: true });
console.log("session table created !!\n \n");
exports.default = Session;
