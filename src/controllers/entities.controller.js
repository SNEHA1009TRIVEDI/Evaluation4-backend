const entitiesService = require("../services/entities.services.js");

const getAllEntities = async (req, res) => {
  try {
    const result = await entitiesService.getAllEntities();
    if (result.length === 0) {
      res.json({ message: "No Entities Found" });
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createEntity = async (req, res) => {
  try {
    const { field_id, field_value, collection_id } = req.body;
    const result = await entitiesService.createEntity(
      field_id,
      field_value,
      collection_id
    );
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllEntities,
  createEntity,
};
