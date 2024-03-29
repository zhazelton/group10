const prisma = require("../configs/db");

const getMyWhiteboards = async (userEmail) => {
  return await prisma.whiteboard.findMany({
    where: {
      email: userEmail,
    },
  });
};

const getById = async (id) => {
  return await prisma.whiteboard.findUnique({
    where: { id: parseInt(id) },
  });
};

const addNewWhiteboard = async (whiteboard) => {
  try {
    console.log("wwwwwwwwwwww");
    return await prisma.whiteboard.create({
      data: {
        name: whiteboard.name,
        updatedAt: whiteboard.updatedAt,
        // user: {
        //   connect: {
        //     id: whiteboard.userId,
        //   },
        // },
        email: whiteboard.email,
      },
    });
  } catch (err) {
    console.log("Error creating whiteboard:", err);
  }
};

module.exports = {
  getMyWhiteboards,
  getById,
  addNewWhiteboard,
};

// const addNewWhiteboard = async (whiteboard) => {
//   try {
//     console.log("wwwwwwwwwwww");
//     return await prisma.whiteboard.create({
//       data: whiteboard,
//     });
//   } catch (err) {
//     console.log("Error creating whiteboard:", err);
//   }
// };
