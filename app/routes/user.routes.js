module.exports = (app) => {
  const room = require("../controllers/room.controller.js");
  const user = require("../controllers/user.controller.js");
  const avatar = require("../controllers/avatar.controller.js");
  const { authJwt } = require("../middleware");

  var router = require("express").Router();

  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.get("/user/:userId", user.userInfo);
  router.post("/user", user.createUser);
  router.post("/user/:userId/avatar/:avatarId", user.addAvatarToUser);

  router.get("/room/:roomId", room.roomInfo);
  router.post("/room", room.createRoom);
  router.post("/room/:roomId/user/:userId", room.addUserToRoom);

  router.get("/avatar/:avatarId", avatar.avatarInfo);
  router.post("/avatar", avatar.createAvatar);

  app.use("/api", router);
};
