const router = require("express").Router();
const isAuthenticated = require("./middlewares/authenticate.middleware");
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const whiteboardRouter = require("./routes/whiteboard.route");

router.use("/user", isAuthenticated, userRouter);
router.use("/auth", authRouter);
// router.use("/user", userRouter);
router.use("/whiteboard", whiteboardRouter);

module.exports = router;
