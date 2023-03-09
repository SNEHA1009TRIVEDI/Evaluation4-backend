const db = require('../models');

const getAllContent = async () => {
    const result = await db.Content.findAll();
    return result;
}

const createContent = async (content_type_name) => {
    const result = await db.Content.create({
        content_type_name: content_type_name
    });
    return result;
}


module.exports = {
    getAllContent,
    createContent
}
