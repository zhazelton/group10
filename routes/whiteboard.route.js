const router = require("express").Router();

const whiteboardController = require("../controller/whiteboard.controller");

router.get("/:id", whiteboardController.getById);
router.post("/", whiteboardController.addWhiteboard);

module.exports = router;
