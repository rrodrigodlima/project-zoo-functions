const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((currentId) => currentId.managers.includes(id));

function getRelatedEmployees(id) {
  if (!isManager(id)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } return data.employees.filter((employee) => employee.managers
    .includes(id)).map((employee) => `${employee.firstName} ${employee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
