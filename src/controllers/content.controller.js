const contentServices = require("../services/content.services");

const getAllContent = async (req, res) => {
  try {
    const result = await contentServices.getAllContent();
    if (result.length === 0) {
      res.json({ message: "No Content Found" });
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createContent = async (req, res) => {
  try {
    const { content_type_name ,content_type_id} = req.body;
    const result = await contentServices.createContent(content_type_name,content_type_id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateContent = async (req, res) => {
  try {
    const { id } = req.params;
    const { content_type_name } = req.body;
    const result = await contentServices.updateContent(id,content_type_name);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
  getAllContent,
  createContent,
  updateContent,
};
