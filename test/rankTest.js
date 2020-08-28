const rankTest = require('ava');

const {
  rating,
  voyageRisk,
  voyageProfitFactor,
  hasChina,
  captainHistoryRisk
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

});
rankTest('rank case 3. given voyage history when use rating method then return B', t => {
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
  let result = rating(voyage, history);
  t.is(result, 'A');
});

rankTest('rank case 4. given history has china when use haschina method then return true', t => {
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
  let result = hasChina(history);
  // then
  t.is(result, true);
});

rankTest('rank case 5. given voyage and history when use captainHistoryRisk method then return 4', t => {
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
  let result = captainHistoryRisk(voyage, history);
  // then
  t.is(result, 4);
});

rankTest('rank case 6. given voyage and history when use voyageProfitFactor method then return 2', t => {
  // given
  const voyage = {
    zone: 'west-africa',
    length: 16,
  };
  const history = [{
    zone: 'east-indies',
    profit: 5,
  }, {
    zone: 'west-indies',
    profit: 15,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];
  // when
  let result = voyageProfitFactor(voyage, history);

  // then
  t.is(result, 2)
});
rankTest('rank case 7. given voyage and history when use voyageProfitFactor method then return 3', t => {
  // given
  const voyage = {
    zone: 'east-indies',
    length: 16,
  };
  const history = [{
    zone: 'east-indies',
    profit: 5,
  }, {
    zone: 'west-indies',
    profit: 15,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];
  // when
  let result = voyageProfitFactor(voyage, history);

  // then
  t.is(result, 3)
});

rankTest('rank case 8. given voyage and history when use voyageProfitFactor method then return 8', t => {
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
  },
  {
    zone: 'china',
    profit: 15,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];
  // when
  let result = voyageProfitFactor(voyage, history);

  // then
  t.is(result, 8)
});


rankTest('rank case 9. given voyage and history when use voyageProfitFactor method then return 3', t => {
  // given
  const voyage = {
    zone: 'USA',
    length: 14,
  };
  const history = [{
    zone: 'east-indies',
    profit: 5,
  }, {
    zone: 'west-indies',
    profit: 15,
  },
  {
    zone: 'china',
    profit: 15,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];
  // when
  let result = voyageProfitFactor(voyage, history);

  // then
  t.is(result, 3)
});