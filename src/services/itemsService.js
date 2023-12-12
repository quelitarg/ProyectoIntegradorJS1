const items = require('..models/itemsModel');

const getItems = async(params) => {
return items.getItems(params);
};

module.exports = {
    getItems
}