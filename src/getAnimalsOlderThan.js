const data = require('../data/zoo_data');

const getAnimalsOlderThan = (name, age) => {
  const findAnimal = data.species.find((specie) => specie.name === name);
  const verifyAnimalsAge = findAnimal.residents.every((animal) => animal.age >= age);
  return verifyAnimalsAge;
};

module.exports = getAnimalsOlderThan;
