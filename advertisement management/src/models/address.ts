import { Model, DataTypes } from 'sequelize';

// import sequelize from 'sequelize';
import sequelize from '../db/config';
import  User  from '../models/Users';

class address extends Model{
    public id!: number;
    public house_number!: string;
    public street!:string;
    public area!: string;
    public landmark!: string;

    public city!: string;
    public state!: string;
    public country!: string;
    public zip_code!: number;
    public address_type!: 'Home' | 'Work';
    public status!: boolean;
    public createdAt!: Date;
    public updatedAt!: Date;

}

address.init({
id:{
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true

},
 // user_Id:{
    //     type:DataTypes.INTEGER,
    //     allowNull: false
    // },
    house_number:{
        type:DataTypes.STRING,
        allowNull: false
    },
    street:{
        type: DataTypes.STRING,
        allowNull: false
    },
    area:{
        type:DataTypes.STRING,
        allowNull: false
    },
    landmark:{
        type: DataTypes.STRING,
        allowNull:false
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false
    },
    state:{
        type:DataTypes.STRING,
        allowNull: false
    },
    country:{
        type:DataTypes.STRING,
        allowNull:false
    },
    zip_code:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    address_type:{
        type:DataTypes.ENUM('Home','Work'),
        defaultValue:'Home'
    },
    status:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    createdAt:{
        type:DataTypes.DATE,
        defaultValue:Date.now(),
        allowNull:false
    },
    updatedAt:{
        type:DataTypes.DATE,
        defaultValue:Date.now(),
        allowNull:false
    }
},
{
    sequelize,
    modelName:'address',
    tableName: 'addresses'
});

sequelize.sync({alter: true});
User.hasMany(address,{foreignKey:'user_Id'});

export default address;