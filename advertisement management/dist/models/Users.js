"use strict";
// import { Model, DataTypes, Sequelize } from 'sequelize';
// // import sequelize from 'sequelize';
// import sequelize from './db/config';
// class User extends Model{
//     public user_Id!: number;
//     public username!: String;
//     public email! : string;
//     public password!: string;
//     public address! : string;
//     public status! : boolean;
//     public phone_number! : number;
//     public gender! : string;
//     public createdAt! : Date;
//     public updatedAt! : Date;
// }
// User.init({
//     user_Id:{
//         type : DataTypes.INTEGER,
//         autoIncrement : true,
//         primaryKey : true
//     },
//     username:{
//         type : DataTypes.STRING,
//         allowNull : false,
//         unique : true
//     },
//     email:{
//         type : DataTypes.STRING,
//         allowNull : false,
//         unique : true
//     },
//     password:{
//         type : DataTypes.STRING,
//         allowNull : false
//     },
//     status:{
//         type: DataTypes.BOOLEAN,
//         allowNull: false,
//         defaultValue: true
//     },
//     phone_number:{
//         type:DataTypes.INTEGER,
//         allowNull : false
//     },
//     gender:{
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     createdAt:{
//         type:DataTypes.DATE,
//         defaultValue: Date.now(),
//         allowNull: false
//     },
//     updatedAt:{
//         type:DataTypes.DATE,
//         defaultValue: Date.now(),
//         allowNull: false
//     },
// },
// {
//     sequelize,
//     modelName:'users'
// });
// (async ()=>{
//     await User.sync({alter: true});
// })();
// export{User}
