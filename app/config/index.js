const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  urldb: process.env.URL_MONGODB,
  securitykey: process.env.JWT_SECURITYKEY,
  cdncloudname: process.env.CDN_CLOUD_NAME,
  cdnapikey: process.env.CDN_API_KEY,
  cdnapisecret: process.env.CDN_SECRET_KEY,
};
