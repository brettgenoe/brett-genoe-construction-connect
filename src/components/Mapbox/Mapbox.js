import "./Mapbox.scss"
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapPopup from "../MapPopup/MapPopup"
import geojsonData from "../../data/projects.geojson";
import { renderToString } from 'react-dom/server';

mapboxgl.accessToken = "pk.eyJ1IjoiYnJldHRnZW5vZSIsImEiOiJjbHA0ZXJxdnEwY2MxMm1xbDhjNnZpaWV5In0.p_muFdhbA9U0a96AlWixDQ";

const Mapbox = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-123.1216);
    const [lat, setLat] = useState(49.2927);
    const [zoom, setZoom] = useState(9);
    const [selectedFeature, setSelectedFeature] = useState(null);

    useEffect(() => {
        if (map.current) return;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/brettgenoe/clp4y1nmk00eo01r6dedjh7d2',
            center: [lng, lat],
            zoom: zoom
        });

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });

        map.current.on('click', (event) => {
            const features = map.current.queryRenderedFeatures(event.point);
            if (features.length > 0) {
                const feature = features[0];
                setSelectedFeature(feature);
                // const popup = new mapboxgl.Popup()
                //     .setLngLat(feature.geometry.coordinates)
                //     .setHTML(renderToString(<MapPopup feature={feature} />))
                //     .addTo(map.current);
            } else {
                console.log("no features clicked")
                setSelectedFeature(null);
            }
        });

        map.current.on('load', () => {
            map.current.addSource('geojson-data', {
                type: 'geojson',
                data: geojsonData
            });

            map.current.addLayer({
                id: 'geojson-layer',
                type: 'circle',
                source: 'geojson-data',
                paint: {
                    'circle-radius': 6,
                    'circle-color': '#CC958F'
                }
            });
        });
    }, [lng, lat, zoom]);

    return (

        <section>
            <div className="map-section">
                <div className="sidebar">
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
                <div ref={mapContainer} className="map-container" />
            </div>
            <article className="popup__section">
                <h2 className='popup__title'> Your Search Results:</h2>
                <div className="popup__section--container">
                    <MapPopup feature={selectedFeature} />
                </div>
            </article>
        </section>
    );
};

export default Mapbox;