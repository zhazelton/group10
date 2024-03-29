const prisma = require("../configs/db");

const getAll = async () => {
  return await prisma.user.findMany();
};

module.exports = {
  getAll,
};
