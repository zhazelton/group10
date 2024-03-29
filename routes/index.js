const router = require("express").Router();
const authenticate = require("../middlewares/authenticate.middleware");
const authRouter = require("./auth.route");
const userRouter = require("./user.route");

router.use("/auth", authRouter);
router.use("/user", authenticate, userRouter);

module.exports = router;
