const chai = require('chai');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
let dom = new JSDOM('<!DOCTYPE html><html lang="en">' +
  '<head><meta charset="UTF-8"><title>Cardify</title>' +
  '</head><body><div class="container"><h2>Prueba 1</h2>' +
  '<img class="img" src="assets/img/img1.jpg" alt="pagina_1">' +
  '<img src="assets/img/img2.jpg" alt="pagina_2">' +
  '<img src="assets/img/img3.jpg" alt="pagina_3"></div>' +
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
  it('debería devolver true para archivos con extensión .jpg, .jpeg o .png', () => {
    expect(cardify.extension(), ('.img'));
  });
  it('debería devolver false para archivos con extensión diferente a .jpg, .jpeg o .png', () => {
    expect(cardify.extension(), ('.doc'));
  });
});

describe('comprobar si alt es un string', () => {
  it('alt es un string', () => {
    expect('alt').to.be.a('string');
  });
})
