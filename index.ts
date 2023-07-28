import express from 'express';
import * as dotenv from 'dotenv';

import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
//database
 import {db} from './src/provider/database'
 import {redFun} from './src/provider/redis'


// Create an Express app
const app = express();
dotenv.config();
const port = process.env.PORT;
app.use(express.json())
//Router
import loginRouter from './src/routes/login'
import userRouter from './src/routes/userSignup'
import followFollowing from './src/routes/followeroutes'
import post from './src/routes/post'
import action from './src/routes/action'
import session from './src/routes/session'

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 

const swaggerOptions={
  swaggerDefinition:{
      info:{
          title:'insta API',
          version: '1.0.0'
      }
  },
  
  apis:['./src/router/login.ts','./src/router/logout.ts']
}

const swaggerDoc=swaggerJsDoc(swaggerOptions)
//Routes calling

app.use('/api-doc',swaggerUI.serve,swaggerUI.setup(swaggerDoc))

app.use('/auth',loginRouter)
app.use('/auth',userRouter);
app.use('/activity',followFollowing)
app.use('/activity',post);
app.use('/activity/',action),
app.use('/session',session)
// Start the server
app.listen(port, () => {
     db();
     redFun()
  console.log('Server started on port 5000');
});
