const userService = require("../service/user.service");

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAll();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    // next(error) reaches error handling middleware in app.js
    // handle all necessary errors there or create new object or class for it
    return next(error);
  }
};

module.exports = {
  getAllUsers,
};
