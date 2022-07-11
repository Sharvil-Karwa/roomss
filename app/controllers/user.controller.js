const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Op = db.Sequelize.Op;

exports.getUsers = (req, res) => {
  User.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
