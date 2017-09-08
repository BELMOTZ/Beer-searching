(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getBeers = exports.getBeers = function getBeers() {
  return fetch('https://api.punkapi.com/v2/beers/');
};

},{}],2:[function(require,module,exports){
'use strict';

var _api = require('./api.js');

(0, _api.getBeers)().then(function (response) {
  return response.json();
}).catch(function (e) {
  return console.error('Something went wrong', e);
}).then(function (response) {
  if (response.length === undefined) {
    document.getElementById("count").innerHTML = "Found : 0 item(s)";
  } else {
    document.getElementById("count").innerHTML = "Found : " + response.length + " item(s)";
  }
  var txt = "";
  for (var i = 0; i < response.length; i++) {
    txt += '<tr><td width="250"><center><img src="' + response[i].image_url + '" width="50" height="200"></center></td>' + '<td><b><i>Name : </i></b>' + response[i].name + '<br />' + '<b><i>Tagline : </i></b>' + response[i].tagline + '<br />' + '<b><i>First brewed : </i></b>' + response[i].first_brewed + '<br />' + '<b><i>Description : </i></b>' + response[i].description + '<br />' + '<b><i>Yeast : </i></b>' + response[i].ingredients.yeast + '<br />' + '<b><i>Food pairing : </i></b>' + response[i].food_pairing + '<br />' + '<b><i>Brewers tips : </i></b>' + response[i].brewers_tips + '<br />' + '<b><i>Alcohol By Volume : </i></b>' + response[i].abv + '</td></tr>';
  }
  document.getElementById("beers").innerHTML = txt;
});

},{"./api.js":1}]},{},[2]);
