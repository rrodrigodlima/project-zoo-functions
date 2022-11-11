const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const firstSpecie = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animals = data.species.find((specie) => specie.id === firstSpecie).residents;
  const animalsAges = animals.sort((a, b) => a.age - b.age);
  return Object.values(animalsAges[animalsAges.length - 1]);
};

module.exports = getOldestFromFirstSpecies;
