import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import * as model from './models/app';

const app = express();
dotenv.config();

app.use(express.json());

//set up the databse connection
// async function connectToDatabase() {
//     try{
//         await mongoose.connect('mongodb://localhost/instagram')
//         console.log('Connected to MongoDB');
//         model.userModel;
//     }catch(error) {
//         console.error('Error connecting to MongoDB:',error);
//     }
// }
// export {connectToDatabase};

mongoose.connect('mongodb://localhost/instagram', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

 model.userModel;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

const port = process.env.PORT;
//const port = 5100; 
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);

});
