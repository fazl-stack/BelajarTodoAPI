const multer = require("multer");

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (["image/png", "image/jpg", "image/jpeg"].includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb({ message: "Format file tidak didukung" }, false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 3000000 },
  fileFilter,
});

module.exports = upload;
