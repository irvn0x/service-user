const express = require("express");
const router = express.Router();

// Handler Users
const usersHandler = require("./handler/users");

// Router Service User
router.post("/register", usersHandler.register);
router.post("/login", usersHandler.login);
router.put("/:id", usersHandler.updateProfile);
router.get("/:id", usersHandler.getUser);
router.get("/", usersHandler.getUsers);
router.post("/logout", usersHandler.logout);

module.exports = router;
