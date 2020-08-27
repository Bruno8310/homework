const deliveryTest = require('ava');
const {
  deliveryDate
} = require('../src/delivery');
deliveryTest('foo', t => {
  t.pass();
});