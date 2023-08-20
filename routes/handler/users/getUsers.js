const { User } = require("../../../models");

module.exports = async (req, res) => {
  // Url params
  const userIds = req.query.user_ids || [];

  // Filter pencarian user
  const sqlOptions = {
    attributes: ["id", "email", "name", "role", "profession", "avatar"],
  };

  if (userIds.length) {
    sqlOptions.where = {
      id: userIds,
    };
  }

  const users = await User.findAll(sqlOptions);

  return res.json({
    status: "success",
    data: users,
  });
};
