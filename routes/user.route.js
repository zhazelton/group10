const router = require("express").Router();
const userController = require("../controller/user.controller");
const isAuthenticated = require("../middlewares/authenticate.middleware");

router.get("/all", userController.getAllUsers);

router.get("/info", function (req, res, next) {
  // console.log("user Info");
  return req.user;
});

module.exports = router;

// const router = require("express").Router();

// const { PrismaClient } = require("@prisma/client");

// const prisma = new PrismaClient();
// router.get("/all", async function (req, res, next) {
//   try {
//     const users = await prisma.user.findMany();
//     res.json(users);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }user
// });

// router.get("/info", async function (req, res) {
//   if (
//     !req.headers.authorization ||
//     req.headers.authorization === "Bearer null"
//   ) {
//     return res.status(401).json({ message: "No token provided." });
//   }

//   let userToken;
//   if (req.headers.authorization.startsWith("Bearer")) {
//     userToken = req.headers.authorization.split(" ")[1];
//   } else {
//     return res.sendStatus(403).json({ authHeader: "Bearer <token>" });
//   }
//   try {
//     const payload = await prisma.$transaction(async () => {
//       const decodedUser = await verifyToken(userToken, "User");
//       const userInfo = await getUserData(decodedUser.id);
//       return { ...userInfo, ...decodedUser };
//     });
//     res.json(payload);
//   } catch (e) {
//     console.log(e);
//     res.status(401).json({ message: "Invalid Token or User not found." });
//   }
// });

// module.exports = router;
