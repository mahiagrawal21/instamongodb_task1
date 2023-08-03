import express from "express";
const app = express();
import {sequelize} from "./src/db/config";
import User from "./src/models/Users";
import router from "./src/routes/userSignup"
import dotenv from "dotenv"; // Import dotenv
import { dbconnection } from "./src/db/config";
import * as path from 'path';
const swaggerUi = require('swagger-ui-express')
import YAML from 'yamljs';

const swaggerDocument = YAML.load(path.join(__dirname,'./swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const options ={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'API FOR SEQEL',
            version:'1.0.0'
        },
        servers:[
            {
                url : 'http://localhost:4000/'
            }
        ]
    },
    apis:['./routes/indexrouter.ts']
}
dotenv.config();

app.use(express.json());
app.use('/api',router)

dbconnection();
new User();
const port = 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
