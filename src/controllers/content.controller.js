const contentServices = require("../services/content.services");

const getAllContent = async (req, res) => {
  try {
    console.log("getAllContent called");
    const result = await contentServices.getAllContent();
    if (result.length === 0) {
      res.json({ message: "No Content Found" });
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createContent = async (req, res) => {
  try {
    const { content_type_name } = req.body;
    const result = await contentServices.createContent(content_type_name);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllContent,
  createContent,
};
