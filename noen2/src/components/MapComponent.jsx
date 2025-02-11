import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MapPopup from "./MapPopUp"; // Import 
import "../styles/map.scss"

// Fix Leaflet's missing marker issue
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
  const islandPosition = [-16.5004, -151.7415]; // Bora Bora, French Polynesia

  return (
    <MapContainer center={islandPosition} zoom={12} style={{ height: "500px", width: "100%" }}>
      {/* Tile Layer (Base Map) */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Marker with Popup */}
      <Marker position={islandPosition} icon={customIcon}>
        <Popup className="custom-popup">
          <div className="popup-content">
            <MapPopup />
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
