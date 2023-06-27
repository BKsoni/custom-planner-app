import React, { useEffect } from 'react';

export default function MyCustomWidget() {
  useEffect(() => {
    // Initialize the map
    const mapOptions = {
      center: { lat: 0, lng: 0 }, // Default center position
      zoom: 10, // Default zoom level
    };

    const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Set the map center to the user's location
          map.setCenter({ lat: latitude, lng: longitude });

          // Add a marker at the user's location
          new window.google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            map: map,
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
    }
  }, []);

  return <div id="map" style={{ width: '300px', height: '300px' }}></div>;
}
