const router = require("express").Router();

const {
  createUser,
  getUsers,
  getUser,
  editUserAvatar,
  patchProfile
} = require("../controllers/users");

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:userId", getUser);
router.patch("/me/avatar", editUserAvatar);
router.patch("/me", patchProfile);

module.exports = router;
