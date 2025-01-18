const CustomAPIError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class Badrequest extends CustomAPIError {
  constructor(message) {
    super(message);

    this.statuCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = Badrequest;
