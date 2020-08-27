const rankTest = require('ava');

const {
  rating,
  voyageRisk,
  voyageProfitFactor
} = require('../src/rank');

rankTest('rank case 1. given voyage when use voyageRisk method then return 5', t => {
  // given
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };

  // when
  let result = voyageRisk(voyage);

  // then
  t.is(result, 5);
});

rankTest('rank case 2. given voyage history when use voyageProfitFactor then return 2', t => {
  // given
  const voyage = {
    zone: 'china',
    length: 16,
  };
  const history = [{
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  // when
  let result = voyageProfitFactor(voyage, history);

  // then
  t.is(result, 8);

})