const chai = require('chai');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
let dom = new JSDOM('<!DOCTYPE html><html lang="en">' +
  '<head><meta charset="UTF-8"><title>Cardify</title>' +
  '</head><body><div class="container"><h2>Prueba 1</h2>' +
  '<img src="https://pbs.twimg.com/media/ClFixn2UoAA85OZ.jpg" alt="Osito">' +
  '<img class="img" src="http://japonpop.japonshop.com/wp-content/uploads/2014/10/arte-latte-japon-gatos-japonshop03.png" alt="gato">' +
  '<img src="https://i.imgur.com/FbPwMRY.gif" alt="pandas">' +
  '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">' +
  '</script><script src="node_modules/jquery/dist/jquery.min.js">' +
  '</script><script src="src/cardify.js"></script></body></html>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
    userAgent: 'node.js',
};

var $ = require('jquery');
const cardify = require("../src/cardify");
var expect = require('chai').expect;

describe('comprobar extension', () => {
  it('debería devolver true para archivos con extensión .jpg, .gif o .png', () => {
    expect(cardify.extension(), true);
  });
  it('debería devolver false para archivos con extensión diferente a .jpg, .gif o .png', () => {
    expect(cardify.extension(), false);
  });
});

describe('comprobar si alt es un string', () => {
  it('alt es un string', () => {
    expect($('img').attr('alt')).to.be.a('string');
  });
});

describe('comprobar si alt está vacio', () => {
  it('alt no esta vacio', () => {
    var length = ($('img').attr('alt').length);
    expect($('img').attr('alt')).to.have.length(length);
  });
});
