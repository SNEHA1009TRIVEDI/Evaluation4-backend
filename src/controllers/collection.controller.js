const collectionService = require('../services/collection.services');

const getAllCollections = async (req, res) => {
    try {
        const result = await collectionService.getAllCollections();
        if (result.length === 0) {
        res.json({ message: "No Collections Found" });
        }
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
    };

const createCollection = async (req, res) => {
    try {
        const { collection_type_id,collection_type_name } = req.body;
        const result = await collectionService.createCollection(collection_type_id,collection_type_name);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
    };

const getCollectionId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await collectionService.getCollectionId(id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
    };

module.exports = {
    getAllCollections,
    createCollection,
    getCollectionId
}
