import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const locations = [
  { name: 'Nigeria', coordinates: [9.0820, 8.7832] },
  { name: 'South Africa', coordinates: [-30.5595, 22.9375] },
  { name: 'Europe', coordinates: [54.5260, 15.2551] },
  { name: 'South America', coordinates: [-8.7832, -55.4915] },
  { name: 'North America', coordinates: [37.0902, -95.7129] },
  { name: 'Asia', coordinates: [34.0479, 100.6197] }
];

// Fix for the default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const GlobalMap = () => {
  useEffect(() => {
    // Fix for map container size issues in some browsers
    const resizeObserver = new ResizeObserver(() => {
      window.dispatchEvent(new Event('resize'));
    });
    
    const mapContainer = document.querySelector('.leaflet-container');
    if (mapContainer) {
      resizeObserver.observe(mapContainer);
    }

    return () => {
      if (mapContainer) {
        resizeObserver.unobserve(mapContainer);
      }
    };
  }, []);

  return (
    <div className="w-full h-[500px] mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="w-full h-full relative">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: '100%', width: '100%' }}
          className="rounded-lg"
          scrollWheelZoom={false}
          minZoom={2}
          maxBounds={[[-90, -180], [90, 180]]}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            noWrap={true}
          />
          
          {locations.map((location, index) => (
            <Marker key={index} position={location.coordinates}>
              <Tooltip direction="top" offset={[0, -20]} opacity={1} permanent>
                {location.name}
              </Tooltip>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default GlobalMap;


