const { User } = require("../../../models");

module.exports = async (req, res) => {
  const id = req.params.id;

  const user = await User.findByPk(id, {
    attributes: ["id", "email", "name", "role", "profession", "avatar"],
  });

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User tidak ditemukan",
    });
  }

  return res.json({
    status: "success",
    data: user,
  });
};
