import User from "../models/user.model";

class AuthController {
  login(req, res, next) {
    User.find({ name: req.body.name })
      .then(user => {
        if (!user.length) {
          throw "Wrong Email or password!";
        }
        res.status(200).send({ data: user });
      })
      .catch(err => {
        if (err) res.status(500).send({ data: err });
      });
  }
  register(req, res, next) {
    const user = new User({
      name: req.body.name,
      password: req.body.password
    });
    user
      .save()
      .then(result => {
        res.status(200).send({ data: result });
      })
      .catch(err => {
        if (err) res.status(500).send({ data: err });
      });
  }
}

const authController = new AuthController();

export default authController;
