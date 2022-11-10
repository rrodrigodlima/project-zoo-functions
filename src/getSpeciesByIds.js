const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => data.species.filter((type) => ids.includes(type.id));

module.exports = getSpeciesByIds;
