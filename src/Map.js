
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
import MapContainer from './containers/MapContainer';
import './Map.css';
import './Map.html';


var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -40.901, lng: 174.886 },
    zoom: 7
  });
}

// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
script.defer = true;
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
};

// Append the 'script' element to 'head'
document.head.appendChild(script);

export default initMap;