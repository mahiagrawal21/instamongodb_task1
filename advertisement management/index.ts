import express from "express";
import {sequelize} from "./src/db/config";
import User from "./src/models/Users";
import router from "./src/routes/userSignup"
import dotenv from "dotenv"; // Import dotenv
import { dbconnection } from "./src/db/config";

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api',router)

dbconnection();
new User();
const port = 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
