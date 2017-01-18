const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('shoud square a number', () => {
  var res = utils.square(8);

  expect(res).toBe(64).toBeA('number');
});

// should verify first and last names are set
it('should set first and last name', () => {
  var user = {location: 'Beppu', age: 28};
  var res = utils.setName(user, 'Masahiro Arakane');

  expect(res).toInclude({
    firstName: 'Masahiro',
    lastName: 'Arakane'
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(11).toNotBeA('string');
//   // expect({name: 'Masahiro'}).toEqual({name: 'Masahiro'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Masahiro',
//     age: 27,
//     location: 'Beppu'
//   }).toInclude({
//     age: 27
//   })
// });
