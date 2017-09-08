import { Solar } from './../js/solar.js';

it('should calculate age', function() {
  let testAge = calculateAge("02/24/1991", "02/24/2010");
  expect(testAge).toEqual(19);
});
