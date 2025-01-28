const router = require("express").Router();
const { authmiddleware } = require("../../../middleware/auth");
const { index, create, find, update, destroy } = require("./controller");

router.get("/todos", authmiddleware, index);
router.post("/todos", authmiddleware, create);
router.get("/todos/:id", authmiddleware, find);
router.put("/todos/:id", authmiddleware, update);
router.delete("/todos/:id", authmiddleware, destroy);

module.exports = router;
