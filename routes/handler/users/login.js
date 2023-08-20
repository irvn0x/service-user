const bcrypt = require("bcrypt");
const { User } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  // Validasi Email dan Passsword
  const schema = {
    email: "string|empty:false",
    password: "string|min:6",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  // Cek Email Ada Di Database Atau Tidak
  const user = await User.findOne({
    where: { email: req.body.email },
  });
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "Email Kamu Salah!",
    });
  }

  // Cek Apakah Passwordnya Valid Atau Tidak Yang Ada Didatabase
  const isValidPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isValidPassword) {
    return res.status(404).json({
      status: "error",
      message: "Password Kamu Salah!",
    });
  }

  res.json({
    status: "success",
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      profession: user.profession,
    },
  });
};
