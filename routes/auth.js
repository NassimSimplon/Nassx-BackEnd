const {
  login,
  register,
  getAllUsers,
  getAll,
  setAvatar,
  updateUser,
  logOut, 
} = require("../controllers/userController");
//@ROUTER
const router = require("express").Router();
//@GET
router.get("/getAll", getAll);
router.get("/allusers/:id", getAllUsers);
router.get("/logout/:id", logOut);
//@POST
router.post("/login", login);
router.post("/register", register);
router.post("/setavatar/:id", setAvatar);
//@PUT
router.put("/updateUser/:id", updateUser);
//EXPORT
module.exports = router;
