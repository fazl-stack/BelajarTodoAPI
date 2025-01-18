const { signUp, signIn } = require("./controller");

const router = require("express").Router();

router.post("/user/register", signUp);
router.post("/user/login", signIn);

module.exports = router;
