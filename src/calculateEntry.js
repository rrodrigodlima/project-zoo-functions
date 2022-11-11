const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let childCounter = 0;
  let adultCounter = 0;
  let seniorCounter = 0;
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      childCounter += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      adultCounter += 1;
    } else {
      seniorCounter += 1;
    }
  });
  return { child: childCounter, adult: adultCounter, senior: seniorCounter };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const priceChild = countEntrants(entrants).child * data.prices.child;
  const priceAdult = countEntrants(entrants).adult * data.prices.adult;
  const priceSenior = countEntrants(entrants).senior * data.prices.senior;
  return priceChild + priceAdult + priceSenior;
}

module.exports = { calculateEntry, countEntrants };
