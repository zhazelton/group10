const router = require("express").Router();
const userController = require("../controller/user.controller");

router.get("/", userController.getMe);
router.get("/whiteboards", userController.getMyWhiteboards);

module.exports = router;
