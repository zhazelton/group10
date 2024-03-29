const router = require("express").Router();

const whiteboardController = require("../controller/whiteboard.controller");

const isAuthenticated = require("../middlewares/authenticate.middleware");
// router.use(isAuthenticated)

router.get("/", isAuthenticated, whiteboardController.getMyWhiteboards);
router.get("/:id", isAuthenticated, whiteboardController.getById);
router.post("/", isAuthenticated, whiteboardController.addWhiteboard);

module.exports = router;

// router
//   .use(isAuthenticated)
//   .route("/")
//   .get(whiteboardController.getMyWhiteboards)
//   .post(whiteboardController.addWhiteboard);
