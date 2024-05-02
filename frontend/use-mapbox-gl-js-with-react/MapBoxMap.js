import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import mapboxicon from "../src/images/mapbox-icon.png"; // Make sure the path is correct

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-105.09381942400067);
  const [lat, setLat] = useState(39.7491384536464);
  const [zoom, setZoom] = useState(12);

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-105.09381942400067, 39.7491384536464]
        },
        properties: {
          title: 'Home Office',
          description: '8635 W. 21st Ave'
        }
      }
    ]
  };

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    // Add markers to the map
    geojson.features.forEach(function(marker) {
      // create a DOM element for the marker
      var el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = `url(${mapboxicon})`; // Corrected usage of the image import
      el.style.width = '50px';
      el.style.height = '50px';
      el.style.backgroundSize = '100%';

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<h3>${marker.properties.title}</h3><p>${marker.properties.description}</p>`))
        .addTo(map.current);
    });

  }, [lng, lat, zoom]);

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}