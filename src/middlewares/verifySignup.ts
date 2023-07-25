import { Request, Response, NextFunction } from 'express';
//import { ROLES } from '../models/users'; // Adjust the path to the ROLES definition file
import { userModel } from '../models/users'; // Adjust the path to the User model definition file

const checkDuplicateUsernameOrEmail = (req: Request, res: Response, next: NextFunction) => {
  // Username
  userModel.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user: any) => {
    if (user) {
      res.status(400).send({
        message: 'Failed! Username is already in use!',
      });
      return;
    }

    // Email
    userModel.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user: any) => {
      if (user) {
        res.status(400).send({
          message: 'Failed! Email is already in use!',
        });
        return;
      }

      next();
    });
  });
};

// const checkRolesExisted = (req: Request, res: Response, next: NextFunction) => {
//   if (req.body.roles) {
//     for (let i = 0; i < req.body.roles.length; i++) {
//       if (!ROLES.includes(req.body.roles[i])) {
//         res.status(400).send({
//           message: 'Failed! Role does not exist = ' + req.body.roles[i],
//         });
//         return;
//       }
//     }
//   }

//   next();
// };

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  //checkRolesExisted,
};

export default verifySignUp;
