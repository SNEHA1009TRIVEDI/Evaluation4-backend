const db = require("../models");

const getAllEntities = async () => {
  const result = await db.entities.findAll();
  return result;
};

const createEntity = async (field_id, field_value, collection_id) => {
  const result = await db.entities.create({
    field_id: field_id,
    field_value: field_value,
    collection_id: collection_id,
  });
  return result;
};

module.exports = {
  getAllEntities,
  createEntity,
};
