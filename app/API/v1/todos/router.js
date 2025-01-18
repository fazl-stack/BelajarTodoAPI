const router = require("express").Router();
const { index, create, find, update, destroy } = require("./controller");

router.get("/todos", index);
router.post("/todos", create);
router.get("/todos/:id", find);
router.put("/todos/:id", update);
router.delete("/todos/:id", destroy);

module.exports = router;
