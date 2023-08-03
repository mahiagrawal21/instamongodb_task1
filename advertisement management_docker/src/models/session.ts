import { Model,  DataTypes } from "sequelize";
import { sequelize } from '../db/config';
import { DataType } from "sequelize-typescript";

class Session extends Model {
    id!: number;
    userId!: number;
    deviceId!: string;
    status!: boolean;
    createdAt!: Date;
    updatedAt!: Date;
}

Session. init(
{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,

    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },

    deviceId: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    createdAt: {
        allowNull: false,
        type: DataType.DATE
    },
    updatedAt: {
        allowNull: false,
        type: DataType.DATE
    }

},
{
    sequelize,
    tableName: 'session',
},
);
sequelize.sync({force: true});
console.log("session table created !!\n \n");
export default Session;

