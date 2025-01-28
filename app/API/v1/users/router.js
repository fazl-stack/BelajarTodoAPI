const { signUp, signIn, update } = require("./controller");
const { authmiddleware } = require("../../../middleware/auth");
const upload = require("../../../middleware/multer");

const router = require("express").Router();

router.post("/user/register", signUp);
router.post("/user/login", signIn);
router.put("/user/update", authmiddleware, upload.single("avatar"), update);

module.exports = router;
