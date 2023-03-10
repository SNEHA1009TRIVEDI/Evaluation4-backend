const db = require("../models");

const getAllContent = async () => {
  const result = await db.Content.findAll();
  //   console.log(result);
  return result;
};

const createContent = async (content_type_name,content_type_id) => {
  const result = await db.Content.create({
    content_type_name: content_type_name,
    content_type_id: content_type_id,
  });
  return result;
};

const updateContent = async (id,content_type_name) => {
  const result = await db.Content.update(
    {
      content_type_name: content_type_name,
    },
    {
      where: {
        id: id,
      },
    }
  );
  return result;
};

module.exports = {
  getAllContent,
  createContent,
  updateContent,
};
