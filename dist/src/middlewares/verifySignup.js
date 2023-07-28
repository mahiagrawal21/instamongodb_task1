"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { ROLES } from '../models/users'; // Adjust the path to the ROLES definition file
const users_1 = require("../models/users"); // Adjust the path to the User model definition file
const checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    users_1.userModel.findOne({
        where: {
            username: req.body.username,
        },
    }).then((user) => {
        if (user) {
            res.status(400).send({
                message: 'Failed! Username is already in use!',
            });
            return;
        }
        // Email
        users_1.userModel.findOne({
            where: {
                email: req.body.email,
            },
        }).then((user) => {
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
exports.default = verifySignUp;
//# sourceMappingURL=verifySignup.js.map