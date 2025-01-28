const router = require("express").Router();
const { authmiddleware } = require("../../../middleware/auth");
const { index, create, find, update, destroy } = require("./controller");

router.get("/categories", authmiddleware, index);
router.post("/categories", authmiddleware, create);
router.get("/categories/:id", authmiddleware, find);
router.put("/categories/:id", authmiddleware, update);
router.delete("/categories/:id", authmiddleware, destroy);

module.exports = router;
