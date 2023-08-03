// src/models/Product.ts

import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../db/config';
// import { Image } from './image';
enum Status{
    Active = 'active',
    NA = 'na',
  }
  
class Product extends Model{
   id!: number;
   name!:string;
   bidder_id!: number | null;
   base_price!: number;
   current_bid!: number;
   description!: string;
   owner_id!: number | null;
   address_id!: number;
   category_id!: number;
   created_at!: Date;
   updated_at!: Date;
    static current_bid: any;
}

Product.init(
  {

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
  name: {type: DataTypes.STRING},
  description: {type: DataTypes.STRING},
  base_price: {type: DataTypes.INTEGER},
  current_bid: {type: DataTypes.INTEGER,
    // validate: {
    //   checkPrice(){
    //     if(this.current_bid){

    //     }
    //   }
    // }
  },
  owner_id: {type: DataTypes.INTEGER},
  bidder_id: {type: DataTypes.INTEGER},
  category_id: {type: DataTypes.INTEGER},
  address_id: {type: DataTypes.INTEGER},
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
  },
  {
    sequelize,
    modelName: 'Product'
  });


sequelize.sync({force: true});
export{Product};

