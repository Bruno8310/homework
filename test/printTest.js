const printTest = require('ava');
const {
  printOwing
} = require('../src/print');

printTest('printOwing case 1. Bruno calculate outstanding in today', t => {

  const invoice = {
    "dueDate": new Date(),
    "customer": "Bruno",
    "borderSpacing": [{
        "amount": 1
      },
      {
        "amount": 2
      },
      {
        "amount": 3
      }
    ]

  };
  printOwing(invoice);
  t.pass(); 
})
