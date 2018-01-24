var extension = require('../src/app');

var assertEqual = function(value, expected) {
  if (value !== expected) {
    throw new Error(`Expected '${value}' to equal '${expected}'`);
  }
};

describe('extension()', function() {

  it('debería devolver true para archivos con extensión .jpg, .jpeg o .png', function() {
    assertEqual(extension(''), true);
  });

  it('debería devolver false para archivos con extensión diferente a .jpg, .jpeg o .png', () => {
    assertEqual(isVowel('b'), false);
  });

});