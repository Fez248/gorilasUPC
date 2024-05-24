"use client";
import { useEffect, useRef } from 'react';

const MapField = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const loadLeaflet = async () => {
            if (typeof window !== 'undefined') {
                const L = await import('leaflet');
                require('leaflet/dist/leaflet.css');

                if (!mapRef.current) {
                    mapRef.current = L.map('map').setView([41.381097, 2.103240], 16);
                    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        maxZoom: 18,
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(mapRef.current);

                    const defaultIcon = L.icon({
                        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41]
                    });

                    L.marker([41.381097, 2.103240], { icon: defaultIcon }).addTo(mapRef.current)
                        .bindPopup('Camp Sitari');
                }
            }
        };

        loadLeaflet();
    }, []);

    return (
        <div id="map" className="location bg-white" style={{ height: '100vh' }}></div>
    );
};

export default MapField;