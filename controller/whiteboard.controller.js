const whiteBoardService = require("../service/whiteboard.service");

const getMyWhiteboards = async (req, res, next) => {
  try {
    const userEmail = req.user.email;
    const whiteboards = await whiteBoardService.getMyWhiteboards(userEmail);
    res.status(200).json(whiteboards);
  } catch (e) {
    return next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const whiteboardId = req.params.id;
    const whiteboard = await whiteBoardService.getById(whiteboardId);
    if (!whiteboard) {
      return res.status(404).json({
        err: "Whiteboard not found",
      });
    }
    console.log("byid", whiteboard);
    res.status(200).json(whiteboard);
  } catch (err) {
    return next(err);
  }
};

const addWhiteboard = async (req, res, next) => {
  try {
    const whiteboard = {
      name: req.body.name,
      updatedAt: new Date(),
      email: req.user.email,
      //   user: {
      //     connect: { id: req.user.id },
      //   },
    };
    const whiteboards = whiteBoardService.addNewWhiteboard(whiteboard);
    res.status(200).json(whiteboards);
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  getMyWhiteboards,
  getById,
  addWhiteboard,
};

// const getMyWhiteboards = async (req, res, next) => {
//   try {
//     const whiteboards = await whiteBoardService.getMyWhiteboards(req.user);
//     res.status(200).json(whiteboards);
//   } catch (e) {
//     return next(e);
//   }
// };
