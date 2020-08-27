const printTest = require('ava');
const {
  printOwing
} = require('../src/print');

printTest('foo', t => {
  t.pass();
});