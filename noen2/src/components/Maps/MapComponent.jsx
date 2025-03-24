import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MapPopup from "../Modals/MapPopUp"; // Import
import "../../styles/map.scss";
import { useState, useEffect } from "react";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent = () => {
  const [maps, setMaps] = useState([]);
  const defaultPosition = [28.047345, 34.712805]; // Default position

  useEffect(() => {
    fetch('http://localhost:5000/event/map')
      .then(response => response.json())
      .then(data => setMaps(data))
      .catch(error => console.log('Error:', error));
  }, []);

  sessionStorage.setItem('maps', JSON.stringify(maps));
 

  // Calculate center dynamically if possible
  const calculateCenter = () => {
    if (maps.length > 0) {
      const latitudes = maps.map(arr => arr.latitude);
      const longitudes = maps.map(arr => arr.longitude);
      const centerLatitude = (Math.min(...latitudes) + Math.max(...latitudes)) / 2;
      const centerLongitude = (Math.min(...longitudes) + Math.max(...longitudes)) / 2;
      return [centerLatitude, centerLongitude];
    }
    return defaultPosition;
  };

  return (
    <MapContainer center={calculateCenter()} zoom={6} style={{ height: "500px", width: "100%" }}>
      {/* Tile Layer (Base Map) */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Marker with Popup */}
      {maps.map((arr, index) => {
        const isposition = [arr.latitude, arr.longitude];
        console.log(`Marker ${index}:`, isposition); // Log the position to check coordinates
        return (
          <Marker key={index} position={isposition} icon={customIcon}>
            <Popup className="custom-popup">
              <div className="popup-content">
                <MapPopup title={arr.title} />
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};


export default MapComponent;
