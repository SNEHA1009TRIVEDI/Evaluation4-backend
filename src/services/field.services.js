const db = require('../models');

const getAllFields = async () => {
    const result = await db.Field.findAll();
    return result;
}

const createField = async (content_type_id, field_name) => {
    const result = await db.Field.create({
        content_type_id: content_type_id,
        field_name: field_name
    });
    return result;
}

const getFieldById = async (id) => {
    const result = await db.Field.findAll({
        where: {
            content_type_id: id
        }
    });
    return result;
}

const deleteFieldById = async (id) => {
    const result = await db.Field.destroy({
        where: {
            id: id
        }
    });
    return result;
}



module.exports = {
    getAllFields,
    createField,
    getFieldById,
    deleteFieldById,
    
}
