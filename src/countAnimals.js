const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const { specie } = animal;
  if (Object.keys(animal).length === 1) {
    return data.species.find(({ name }) => name === specie).residents.length;
  } if (Object.keys(animal).length === 2) {
    return data.species.find(({ name }) => name === specie)
      .residents.filter(({ sex }) => sex === animal.sex).length;
  }
}

module.exports = countAnimals;
