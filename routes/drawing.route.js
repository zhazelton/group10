const router = require("express").Router();

const drawingController = require("../controller/drawing.controller");

router.get("/:whiteboardId", drawingController.getDrawingsByWhiteBoardId);
router.post("/:id", drawingController.addDrawing);

module.exports = router;
