const notfound = (req, res) =>
  res.status(404).json({ status: "error", message: "route does not exist" });

module.exports = notfound;
