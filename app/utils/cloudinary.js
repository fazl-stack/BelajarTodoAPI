const cloudinary = require("cloudinary").v2;
const { cdnapikey, cdnapisecret, cdncloudname } = require("../config");

cloudinary.config({
  cloud_name: cdncloudname,
  api_key: cdnapikey,
  api_secret: cdnapisecret,
});

const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { folder: "todos/avatar", resource_type: "image" },
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      )
      .end(fileBuffer);
  });
};

const deleteFromCloudinary = (path) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(
      path,
      { resource_type: "image" },
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
};

module.exports = { uploadToCloudinary, deleteFromCloudinary };
