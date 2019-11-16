import User from "../models/user.model";
import passport from "passport";

class AuthController {
  login(req, res, next) {
    passport.authenticate("local", (err, user) => {
      if (err) {
        return res.status(500).send({ message: err });
      }
      if (!user) {
        return res.status(500).send({ message: err });
      }
      req.logIn(user, err => {
        if (err) {
          return res.status(500).send({ message: err });
        }
        return res.status(200).send({ data: user });
      });
    })(req, res, next);
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
      .catch(err => {
        if (err.name === "ValidationError") {
          res.status(500).send({ message: err.name });
        } else next(err);
      });
  }
}
const authController = new AuthController();

export default authController;
