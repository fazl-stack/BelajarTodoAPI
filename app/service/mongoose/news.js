const News = require("../../API/v1/news/model");
const { notFoundError } = require("../../error");

const getAllNews = async () => {
  const result = await News.find().populate({
    path: "category",
    select: "name",
  });
  return result;
};

const createNews = async (req) => {
  const { category, title, content, author, image, source, status } = req.body;
  const result = await News.create({
    category,
    title,
    content,
    author,
    image,
    source,
    status,
  });
  return result;
};

const getOneNews = async (req) => {
  const { id } = req.params;
  const result = await News.findOne({ _id: id }).populate({
    path: "category",
    select: "name",
  });
  if (!result) throw new notFoundError("News not found");
  return result;
};

const updateNews = async (req) => {
  const { id } = req.params;
  const { category, title, content, author, image, source, status } = req.body;
  const result = await News.findOneAndUpdate(
    { _id: id },
    { category, title, content, author, image, source, status }
  );
  if (!result) throw new notFoundError("News not found");
  return result;
};

const deleteNews = async (req) => {
  const { id } = req.params;
  const result = await News.findOneAndDelete({ _id: id });
  if (!result) throw new notFoundError("News not found");
  return result;
};

module.exports = { getAllNews, createNews, getOneNews, updateNews, deleteNews };
