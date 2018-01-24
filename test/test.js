
var assert = require('assert')
var calculator = require('../src/app.js')
var jquery = require('jquery')

describe('isvalidarImagen()', ()=>{
    it('valida tarjeta', ()=>{
        assert.equal(true, isValidCard('4083952015263'))
        assert.equal(true, isValidCard('4220554436511572'))
    }); 

});  

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
