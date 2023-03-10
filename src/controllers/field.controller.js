const fieldService = require("../services/field.services");

const getAllFields = async (req, res) => {
  try {
    // console.log("getAllFields called");
    const result = await fieldService.getAllFields();
    if (result.length === 0) {
      res.json({ message: "No Fields Found" });
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createField = async (req, res) => {
  try {
    const { content_type_id, field_name } = req.body;
    const result = await fieldService.createField(content_type_id, field_name);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getFieldById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await fieldService.getFieldById(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteFieldById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await fieldService.deleteFieldById(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllFields,
  createField,
  getFieldById,
  deleteFieldById,
};
