const data = require('../data/zoo_data');

function getEmployeeByName(name) {
  if (name === undefined) {
    return {};
  } return data.employees
    .find((employee) => name === employee.firstName || name === employee.lastName);
}

module.exports = getEmployeeByName;
