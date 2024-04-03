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
    where: { id },
  });
};

const addNewWhiteboard = async (data) => {
  return await prisma.whiteboard.create({
    data,
  });
};

module.exports = {
  getMyWhiteboards,
  getById,
  addNewWhiteboard,
};
