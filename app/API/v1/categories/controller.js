const { StatusCodes } = require("http-status-codes");
const {
  getAllCategory,
  createCategories,
  getOneCategories,
  updateCategories,
  deleteCategories,
} = require("../../../service/mongoose/categories");

const index = async (req, res, next) => {
  try {
    const result = await getAllCategory();
    res.status(StatusCodes.OK).json({ status: "success", categories: result });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await createCategories(req);
    res
      .status(StatusCodes.CREATED)
      .json({ status: "success", category: result });
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const result = await getOneCategories(req);
    res.status(StatusCodes.OK).json({ status: "success", category: result });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    await updateCategories(req);
    res
      .status(StatusCodes.OK)
      .json({ status: "success", message: "update category successfully" });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await deleteCategories(req);
    res
      .status(StatusCodes.OK)
      .json({ status: "success", message: "delete category successfully" });
  } catch (error) {
    next(error);
  }
};
module.exports = { index, create, find, update, destroy };
