const deliveryTest = require('ava');
const {
  deliveryDate,
  calculateDeliveryTimeWithIsRushTrue,
  calculateDeliveryTimeWithIsRushFalse
} = require('../src/delivery');



deliveryTest('delivery case 1. given anorder and isPush when use deliveryDate method then return 2', t => {
  // given
  const isRush = true;
  const anOrder = {
    "deliveryState": "MA",
    "placedOn": {
      "plusDays": function plusDays(deliveryTime) {
        return deliveryTime;
      }
    },
  };

  // when
  let result = deliveryDate(anOrder, isRush);
  // then
  t.is(result, 2);
});

deliveryTest('delivery case 2. given anorder and isPush when use deliveryDate method then return 3', t => {
  // given
  const isRush = true;
  const anOrder = {
    "deliveryState": "NY",
    "placedOn": {
      "plusDays": function plusDays(deliveryTime) {
        return deliveryTime;
      }
    },
  };

  // when
  let result = deliveryDate(anOrder, isRush);
  // then
  t.is(result, 3);
});

deliveryTest('delivery case 3. given anorder and isPush when use deliveryDate method then return 4', t => {
  // given
  const isRush = true;
  const anOrder = {
    "deliveryState": "YY",
    "placedOn": {
      "plusDays": function plusDays(deliveryTime) {
        return deliveryTime;
      }
    },
  };

  // when
  let result = deliveryDate(anOrder, isRush);
  // then
  t.is(result, 4);
});



deliveryTest('delivery case 4. given anorder and isPush when use deliveryDate method then return 4', t => {
  // given
  const isRush = false;
  const anOrder = {
    "deliveryState": "MA",
    "placedOn": {
      "plusDays": function plusDays(deliveryTime) {
        return deliveryTime;
      }
    },
  };

  // when
  let result = deliveryDate(anOrder, isRush);
  // then
  t.is(result, 4);
});

deliveryTest('delivery case 5. given anorder and isPush when use deliveryDate method then return 5', t => {
  // given
  const isRush = false;
  const anOrder = {
    "deliveryState": "ME",
    "placedOn": {
      "plusDays": function plusDays(deliveryTime) {
        return deliveryTime;
      }
    },
  };

  // when
  let result = deliveryDate(anOrder, isRush);
  // then
  t.is(result, 5);
});

deliveryTest('delivery case 6. given anorder and isPush when use deliveryDate method then return 6', t => {
  // given
  const isRush = false;
  const anOrder = {
    "deliveryState": "MM",
    "placedOn": {
      "plusDays": function plusDays(deliveryTime) {
        return deliveryTime;
      }
    },
  };

  // when
  let result = deliveryDate(anOrder, isRush);
  // then
  t.is(result, 6);
});

