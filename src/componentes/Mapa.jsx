import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Style from '../assets/css/Mapa.module.css';
import yah from '../assets/yah.webp';
import pin from '../assets/placeholder.webp';

const Mapa = () => {
    const mapRef = useRef(null);
    const [buttonVisible, setButtonVisible] = useState(true);
    const [userMarker, setUserMarker] = useState(null);

    const latitude = 17.05645;
    const longitude = -96.70990;
    const markerText = '¡Rehabilité!';

    const routingPanelStyles = {
        display: 'none',
    };

    useEffect(() => {
        const initializeMap = () => {
            if (!mapRef.current) {
                const map = L.map('mi_mapa').setView([latitude, longitude], 16);
                mapRef.current = map;

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                const initialIcon = L.icon({
                    iconUrl: pin,
                    iconSize: [32, 32],
                    iconAnchor: [16, 32],
                    popupAnchor: [0, -32]
                });

                L.marker([latitude, longitude], { icon: initialIcon }).addTo(map)
                    .bindPopup(markerText)
                    .openPopup();
            }
        };

        initializeMap();
    }, [latitude, longitude, markerText]);

    const handleShareLocationClick = () => {
        navigator.geolocation.getCurrentPosition(position => {
            const userLatitude = position.coords.latitude;
            const userLongitude = position.coords.longitude;

            if (userMarker) {
                mapRef.current.removeLayer(userMarker);
            }

            const userIcon = L.icon({
                iconUrl: yah,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -32]
            });

            const newUserMarker = L.marker([userLatitude, userLongitude], { icon: userIcon }).addTo(mapRef.current);
            setUserMarker(newUserMarker);

            const route = L.Routing.control({
                waypoints: [
                    L.latLng(userLatitude, userLongitude),
                    L.latLng(latitude, longitude)
                ],
                routeWhileDragging: true,
                createMarker: function() { return null; },
                lineOptions: {
                    styles: [{ color: 'blue', opacity: 0.6, weight: 4 }]
                },
                show: false,
                addWaypoints: false,
                draggableWaypoints: false,
                fitSelectedRoutes: true,
                altLineOptions: {
                    styles: [{ color: 'green', opacity: 0.6, weight: 4 }]
                },
                router: L.Routing.osrmv1({
                    serviceUrl: `https://router.project-osrm.org/route/v1`
                }),
            }).on('routesfound', function (e) {
                var routes = e.routes;
                var summary = routes[0].summary;

                const distanceKm = (summary.totalDistance / 1000).toFixed(2); // Convertir metros a kilómetros y redondear a 2 decimales
                const timeMin = (summary.totalTime / 60).toFixed(2); // Convertir segundos a minutos y redondear a 2 decimales

                toast.success(`Ruta encontrada: Recorrido de ${distanceKm} kilómetros en un tiempo de ${timeMin} minutos aproximadamente`);
            }).addTo(mapRef.current);

            const routingContainer = document.querySelector('.leaflet-routing-container');
            if (routingContainer) {
                Object.assign(routingContainer.style, routingPanelStyles);
            }

            setButtonVisible(false);
        }, (error) => {
            toast.error('Error al obtener la ubicación: ' + error.message);
        });
    };

    return (
        <section className={Style.fondoMapa}>
            <div className={Style.contenedorTitulo}>
                <span className={Style.arribaTitulo}>¡Visítanos!</span><h1 className={Style.titulo}>Rehabilité Oaxaca</h1>
            </div>
            <div id="mi_mapa" style={{ width: '90%', height: '31rem', border: 'solid 2px #008373', borderRadius:'10px' }}></div>
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                {buttonVisible && <button onClick={handleShareLocationClick} className={Style.botonMapa}>¿Cómo llegar? →</button>}
            </div>
        </section>
    );
}

export default Mapa;
