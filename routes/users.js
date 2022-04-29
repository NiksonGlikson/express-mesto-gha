const router = require("express").Router();

const {
  getUsers,
  getUser,
  patchAvatar,
  patchProfile
} = require("../controllers/users");

router.get("/", getUsers);
router.get("/:userId", getUser);
router.patch("/me/avatar", patchAvatar);
router.patch("/me", patchProfile);

module.exports = router;
