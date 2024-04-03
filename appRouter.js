const router = require("express").Router();
const isAuthenticated = require("./middlewares/isAuthenticated.middleware");
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const whiteboardRouter = require("./routes/whiteboard.route");
const drawingRouter = require("./routes/drawing.route");

router.use("/user", isAuthenticated, userRouter);
router.use("/auth", authRouter);
// router.use("/user", userRouter);
router.use("/whiteboard", whiteboardRouter);
router.use("/drawing", whiteboardRouter);

module.exports = router;
