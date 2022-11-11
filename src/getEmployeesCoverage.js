const data = require('../data/zoo_data');

const getInfo = data.employees.map((info) => ({
  id: info.id,
  fullName: `${info.firstName} ${info.lastName}`,
  species: info.responsibleFor.map((id) => data.species.find((specie) => specie.id === id).name),
  locations: info.responsibleFor.map((id) =>
    data.species.find((specie) => specie.id === id).location),
}));

const getEmployeesCoverage = (param) => {
  if (param === undefined) {
    return getInfo;
  }
  const validation = getInfo.find((info) =>
    info.fullName.includes(Object.values(param)) || info.id.includes(Object.values(param)));
  if (validation === undefined) {
    throw new Error('Informações inválidas');
  }
  return validation;
};

module.exports = getEmployeesCoverage;
