const { StatusCodes } = require("http-status-codes");
const {
  getAllTodo,
  createTodos,
  getOneTodo,
  updateTodo,
  deleteTodo,
} = require("../../../service/mongoose/todos");

const index = async (req, res, next) => {
  try {
    const result = await getAllTodo(req);
    res.status(StatusCodes.OK).json({ status: "success", data: result });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const todo = await createTodos(req);
    res.status(StatusCodes.CREATED).json({ status: "success", todo });
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const todo = await getOneTodo(req);
    res.status(StatusCodes.OK).json({ status: "Success", todo });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    await updateTodo(req);
    res
      .status(StatusCodes.OK)
      .json({ status: "Success", message: "update todo successfully" });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await deleteTodo(req);
    res
      .status(StatusCodes.OK)
      .json({ status: "Success", message: "delete todo successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { index, create, find, update, destroy };
