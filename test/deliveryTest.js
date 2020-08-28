const deliveryTest = require('ava');
const {
  deliveryDate
} = require('../src/delivery');



deliveryTest('delivery case 1. ', t => {
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