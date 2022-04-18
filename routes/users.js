const router = require("express").Router();

const {
  createUser,
  getUsers,
  getUser,
  patchAvatar,
  patchProfile
} = require("../controllers/users");

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:userId", getUser);
router.patch("/me/avatar", patchAvatar);
router.patch("/me", patchProfile);

module.exports = router;
