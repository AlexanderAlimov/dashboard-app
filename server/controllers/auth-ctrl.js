import User from "../models/user.model";
import passport from "passport";
import { passportCustomCallback, handleError } from "../utils/utils";

class AuthController {
  login(req, res, next) {
    passport.authenticate("local", passportCustomCallback(req, res, next))(
      req,
      res,
      next
    );
  }

  register(req, res, next) {
    const { username, password } = req.body;

    User.create({ username, password })
      .then(user => {
        req.login(user, err => {
          if (err) next(err);
          else res.status(200).send({ message: "Success Register" });
        });
      })
      .catch(handleError(res));
  }

  logout(req, res, next) {
    req.logout();
    res.status(200).send({ message: "logout" });
  }
}
const authController = new AuthController();

export default authController;
