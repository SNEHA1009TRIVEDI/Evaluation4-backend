const db = require("../models");

const getAllCollections = async () => {
  const result = await db.Collection.findAll();
  return result;
};

const createCollection = async (collection_type_id, collection_type_name) => {
  const result = await db.Collection.create({
    collection_type_id: collection_type_id,
    collection_type_name: collection_type_name,
  });
  return result;
};

const getCollectionId = async (id) => {
  const result = await db.Collection.findAll({
    where: {
      collection_type_id: id,
    },
    include: [
      {
        model: db.entities,
        attributes: ["field_id", "field_value", "collection_id"],
        required: false,
      },
    ],
  });
  return result;
};
module.exports = {
  getAllCollections,
  createCollection,
  getCollectionId,
};
