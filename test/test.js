var assert = require('assert')
var calculator = require('../src/app.js')
var jquery = require('jquery')

describe('isvalidarImagen()', ()=>{
    it('valida tarjeta', ()=>{
        assert.equal(true, isValidCard('4083952015263'))
        assert.equal(true, isValidCard('4220554436511572'))
    }); 

});  