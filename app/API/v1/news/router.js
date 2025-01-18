const router = require("express").Router();
const { index, create, find, update, destroy } = require("./controller");

router.get("/news", index);
router.post("/news", create);
router.get("/news/:id", find);
router.put("/news/:id", update);
router.delete("/news/:id", destroy);

module.exports = router;
