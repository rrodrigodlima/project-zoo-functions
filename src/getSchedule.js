const data = require('../data/zoo_data');

const openingHours = (day) => {
  if (day === 'Monday') {
    return 'CLOSED';
  }
  const hour = data.hours[day];
  return `Open from ${Object.values(hour)[0]}am until ${Object.values(hour)[1]}pm`;
};

const exhib = (day) => {
  if (day === 'Monday') {
    return 'The zoo will be closed!';
  } return data.species.filter((animal) => animal.availability
    .some((specie) => specie === day))
    .map((animal) => (animal.name));
};

const weekDays = {
  Tuesday: { officeHour: `${openingHours('Tuesday')}`, exhibition: exhib('Tuesday') },
  Wednesday: { officeHour: `${openingHours('Wednesday')}`, exhibition: exhib('Wednesday') },
  Thursday: { officeHour: `${openingHours('Thursday')}`, exhibition: exhib('Thursday') },
  Friday: { officeHour: `${openingHours('Friday')}`, exhibition: exhib('Friday') },
  Saturday: { officeHour: `${openingHours('Saturday')}`, exhibition: exhib('Saturday') },
  Sunday: { officeHour: `${openingHours('Sunday')}`, exhibition: exhib('Sunday') },
  Monday: { officeHour: `${openingHours('Monday')}`, exhibition: exhib('Monday') },
};

const getSchedule = (param) => {
  const specie = data.species.some((animal) => animal.name === param);
  const day = Object.keys(weekDays).includes(param);
  if (specie) {
    return data.species.find((specieName) => specieName.name === param).availability;
  }
  if (day) {
    const dayObject = {};
    dayObject[param] = weekDays[param];
    return dayObject;
  }
  return weekDays;
};

module.exports = getSchedule;
