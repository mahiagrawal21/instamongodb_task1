"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//database
const database_1 = require("./src/provider/database");
// Create an Express app
const app = (0, express_1.default)();
app.use(express_1.default.json());
//Router
const login_1 = __importDefault(require("./src/routes/login"));
const userSignup_1 = __importDefault(require("./src/routes/userSignup"));
const followeroutes_1 = __importDefault(require("./src/routes/followeroutes"));
const post_1 = __importDefault(require("./src/routes/post"));
const action_1 = __importDefault(require("./src/routes/action"));
const session_1 = __importDefault(require("./src/routes/session"));
// for parsing application/x-www-form-urlencoded
app.use(express_1.default.urlencoded({ extended: true }));
//Routes calling
app.use('/auth', login_1.default);
app.use('/auth', userSignup_1.default);
app.use('/activity', followeroutes_1.default);
app.use('/activity', post_1.default);
app.use('/activity', action_1.default);
app.use('/session', session_1.default);
// Start the server
app.listen(3000, () => {
    (0, database_1.db)();
    console.log('Server started on port 3000');
});
// import express, { Request, Response } from 'express';
// import mongoose from 'mongoose';
// import * as dotenv from 'dotenv';
// import * as model from './models/app';
// const app = express();
// dotenv.config();
// app.use(express.json());
// //set up the databse connection
// // async function connectToDatabase() {
// //     try{
// //         await mongoose.connect('mongodb://localhost/instagram')
// //         console.log('Connected to MongoDB');
// //         model.userModel;
// //     }catch(error) {
// //         console.error('Error connecting to MongoDB:',error);
// //     }
// // }
// // export {connectToDatabase};
// mongoose.connect('mongodb://localhost/instagram', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// } as mongoose.ConnectOptions);
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//     console.log('Connected to MongoDB');
// });
//  model.userModel;
// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello World!');
// });
// const port = process.env.PORT;
// //const port = 5100; 
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
//# sourceMappingURL=index.js.map