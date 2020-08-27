const employeeTest = require('ava');
const {
  Employee
} = require('../src/employee');

employeeTest('Employee case 1. given name Bruno type engineer when use tostring then return Bruno(enginner)', t => {
  // given
  let name = 'Bruno';
  let type = 'engineer';

  // when
  let result = new Employee(name, type);

  // then
  t.is(result.toString(), 'Bruno (engineer)')

});

employeeTest('Employee case 2. given name Bruno type people when use tostring then return throw error', t => {
  // given
  let name = 'Bruno';
  let type = 'people';

  // when
  try {
    new Employee(name, type);
    t.fail();
  } catch (error) {
    t.is(error.message, "Employee cannot be of type people");
  }


});