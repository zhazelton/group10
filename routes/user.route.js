// const router = require("express").Router();
const UserModel = require("../model/user.model");
const path = require("path");
const uploadProfileImg = require("../middlewares/upload.profile");

const streamUpload = require("../middlewares/directCloudinary");

router.get("/", function (req, res, next) {
  UserModel.findById(req.user._id)
    .populate("friends")
    .populate({
      path: "groups",
      populate: {
        path: "members",
      },
    })
    .exec(function (err, user) {
      res.status(200).json(user);
    });
});
