
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
import AppContainer from './containers/AppContainer';
import './Map.css';
import './Map.html';


var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}

export deafult initMap;