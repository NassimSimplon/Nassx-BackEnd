const {
  login,
  register,
  getAllUsers,
  setAvatar,
  updateUser,
  logOut, 
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);
router.put("/updateUser/:id", updateUser);


module.exports = router;
