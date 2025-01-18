const CustomAPIError = require("./custom-error");
const notFoundError = require("./not-found");
const BadRequestError = require("./Bad-request");
const UnauthorizedError = require("./unauthorized");
const UnauthenticatedError = require("./unauthenticated");

module.exports = {
  CustomAPIError,
  notFoundError,
  BadRequestError,
  UnauthenticatedError,
  UnauthorizedError,
};
