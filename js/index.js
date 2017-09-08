import { getBeers } from './api.js'

getBeers()
  .then(response => response.json())
  .catch(e => console.error('Something went wrong', e))
  .then(function(response) {
    if(response.length === undefined){
      document.getElementById("count").innerHTML = "Found : 0 item(s)";
    } else {
      document.getElementById("count").innerHTML = "Found : " + response.length + " item(s)";
    }
    var txt = ""
    for (var i = 0; i < response.length; i++) {
        txt += '<tr><td width="250"><center><img src="' + response[i].image_url + '" width="50" height="200"></center></td>'
        + '<td><b><i>Name : </i></b>' + response[i].name + '<br />'
        + '<b><i>Tagline : </i></b>' + response[i].tagline + '<br />'
        + '<b><i>First brewed : </i></b>' + response[i].first_brewed + '<br />'
        + '<b><i>Description : </i></b>' + response[i].description + '<br />'
        + '<b><i>Yeast : </i></b>' + response[i].ingredients.yeast+ '<br />'
        + '<b><i>Food pairing : </i></b>' + response[i].food_pairing + '<br />'
        + '<b><i>Brewers tips : </i></b>' + response[i].brewers_tips + '<br />'
        + '<b><i>Alcohol By Volume : </i></b>' + response[i].abv + '</td></tr>'
    }
    document.getElementById("beers").innerHTML = txt;
  })
