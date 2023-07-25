import express from 'express';
//database
import {db} from './src/provider/database'

// Create an Express app
const app = express();
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
//Routes calling
app.use('/auth',loginRouter)
app.use('/auth',userRouter);
app.use('/activity',followFollowing)
app.use('/activity',post);
app.use('/activity/',action),
app.use('/session',session)
// Start the server
app.listen(3000, () => {
    db();
  console.log('Server started on port 3000');
});
