const Joi = require('joi');
const db = require('./connection');
var ObjectId = require('mongodb').ObjectID;

const schema = Joi.object().keys({
    address: Joi.string(),
    city: Joi.string(),
    state: Joi.string(),
    zip: Joi.number().integer()
});

const properties = db.get('properties')

function getAll() {
    return properties.find();
}
function createProperty(property) {
    //if (!message.username) message.username = 'Anonymous';
    const result = Joi.validate(property, schema);
    if (result.error == null) {
        property.created = new Date();
        return properties.insert(property);
    } else {
        return Promise.reject(result.error);
    }
}
function getOneProperty(propertyID){
    return properties.find({ "_id": ObjectId(propertyID) })
}
function getOneTodoItem(propertyID){
    return properties.find({"_id": ObjectId(propertyID)})
}

function deleteProperty(propertyID){
    return properties.findOneAndDelete({ "_id": ObjectId(propertyID) })
} 

module.exports = {
    getAll,
    createProperty,
    getOneProperty,
    deleteProperty,
    getOneTodoItem
};
