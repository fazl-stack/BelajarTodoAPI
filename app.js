const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

//middleware
const notFoundMiddleWare = require("./app/middleware/not-found");
const handlerErrorMiddleware = require("./app/middleware/handler-error");
const { notFoundError } = require("./app/error");

const app = express();
const v1 = "/api/v1";

//router
const categoriesRoute = require("./app/API/v1/categories/router");
const todosrouter = require("./app/API/v1/todos/router");
const newsRouter = require("./app/API/v1/news/router");
const usersRouter = require("./app/API/v1/users/router");
const revisiRouter = require("./app/API/v1/Revisi Ujian/router");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get(`${v1}`, (req, res) => {
  res.json({
    status: "success",
    message: "welcome to todo API",
    name: "todo API",
    version: "0.0.1",
    creator: "Sehzade",
  });
});
app.use(v1, categoriesRoute);
app.use(v1, todosrouter);
app.use(v1, newsRouter);
app.use(v1, usersRouter);
app.use(v1, revisiRouter);

app.use(notFoundMiddleWare);
app.use(handlerErrorMiddleware);

module.exports = app;
