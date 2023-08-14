
import {Sequelize} from "sequelize";

 
export const sequelize = new Sequelize('advertising_management','postgres','Mahi@2105',{
  host:'localhost',
  dialect:'postgres',

});
export const dbconnection = async()=>{
  try{
    sequelize.authenticate;
   console.log('Connection has been established successfully.');
 }
catch(err){
  console.error('Unable to connect to the database:', err);
 }
}  ;


export default sequelize;

    