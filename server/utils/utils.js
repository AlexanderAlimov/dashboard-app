const passportCustomCallback = (req, res, next) => (err, user) => {
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
};

const handleError = res => err => {
  if (err) res.status(500).send({ message: err });
};

const handleSuccess = res => items => res.status(200).send({ data: items });

const isloggedIn = (req, res, next) => {
  if (req.isAuthenticated()) next();
  else
    res
      .status(500)
      .send({ message: { message: "You should loggin at first" } });
};

export { passportCustomCallback, handleError, handleSuccess, isloggedIn };
