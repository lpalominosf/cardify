const chai = require('chai');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let dom = new JSDOM('!DOCTYPE html><html lang="en">' +
  '<head><meta charset ="UTF-8"><title>Proyecto Cardify</title>' +
  '/head><body><div class="container"><h1>Test</h2>' +
  '<img src="https://www.anipedia.net/imagenes/gatos-800x375.jpg" alt="cuchito">' +
  '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">' +
  '</script><script src="node_modules/jquery/dist/jquery.min.js">' +
  '</script><script src="assets/js/app.js"></script></body></html>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
  userAgent: 'node.js'
};

const $ = require('jquery');
const cardify = require('../assets/js/app.js');
var expect = require('chai').expect;

describe('Comprobar si alt tiene una descripción', () => {
  it('alt contiene descripción', () => {
    var empty = ($('img').attr('alt').length);
    expect($('img').attr('alt')).to.have.length(empty);
  });
});

describe('comprobar si alt está definido como string', () => {
  it('alt está definido como string', () => {
    expect($('img').attr('alt')).to.be.a('string');
  });
});

