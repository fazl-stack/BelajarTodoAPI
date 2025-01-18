const { StatusCodes } = require("http-status-codes");
const {
  getAllNews,
  createNews,
  getOneNews,
  updateNews,
  deleteNews,
} = require("../../../service/mongoose/news");

const index = async (req, res, next) => {
  try {
    const news = await getAllNews();
    res.status(StatusCodes.OK).json({ status: "success", news });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const news = await createNews(req);
    res.status(StatusCodes.OK).json({ status: "success", news });
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const news = await getOneNews(req);
    res.status(StatusCodes.OK).json({ status: "success", news });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    await updateNews(req);
    res
      .status(StatusCodes.OK)
      .json({ status: "Success", message: "update news successfully" });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await deleteNews(req);
    res
      .status(StatusCodes.OK)
      .json({ status: "Success", message: "delete news successfully" });
  } catch (error) {
    next(error);
  }
};
module.exports = { index, create, find, update, destroy };
