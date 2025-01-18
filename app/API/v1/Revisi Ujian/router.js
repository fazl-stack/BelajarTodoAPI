const router = require("express").Router();
const { signUp, signIn, passwordChanging } = require("./controller");

router.post("/revisi/register", signUp);
router.post("/revisi/login", signIn);
router.post("/revisi/changePassword/:id", passwordChanging);

module.exports = router;
