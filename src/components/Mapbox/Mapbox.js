import "./Mapbox.scss"
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapPopup from "../MapPopup/MapPopup"
// import geojsonData from "../../data/projects.geojson";
// import { renderToString } from 'react-dom/server';
import axios from "axios";
// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

mapboxgl.accessToken = "pk.eyJ1IjoiYnJldHRnZW5vZSIsImEiOiJjbHA0ZXJxdnEwY2MxMm1xbDhjNnZpaWV5In0.p_muFdhbA9U0a96AlWixDQ";

const Mapbox = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-123.1216);
    const [lat, setLat] = useState(49.2927);
    const [zoom, setZoom] = useState(9);
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [address, setAddress] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [geojsonData, setGeojsonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get("http://localhost:8080/api/projects");
                const projects = response.data;
                // console.log(response.data)


                const newGeojsonData = {
                    type: "FeatureCollection",
                    features: projects.map((project) => ({
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [project.geo_data.coordinates[0], project.geo_data.coordinates[1]],
                        },
                        properties: {
                            company_name: project.company_name,
                            description: project.description,
                            duration: project.duration,
                            manager_id: project.manager_id,
                            email: project.email,
                            telephone: project.telephone,
                            carpenters_needed: project.carpenters_needed,
                            carpenters_description: project.carpenters_description,
                            electricians_needed: project.electricians_needed,
                            electricians_description: project.electricians_description,
                            plumbers_needed: project.plumbers_needed,
                            plumbers_description: project.plumbers_description,
                            operators_needed: project.operators_needed,
                            operators_description: project.operators_description,
                            labours_needed: project.labours_needed,
                            labours_description: project.labours_description,
                            safety_needed: project.safety_needed,
                            safety_description: project.safety_description,
                            geo_data: {
                                type: 'Point',
                                coordinates: [project.geo_data.coordinates[0], project.geo_data.coordinates[1]]
                            },

                        },
                    })),
                };


                setGeojsonData(newGeojsonData);
                setLoading(false)
            } catch (error) {
                console.error("Error fetching projects:", error);
                setError("An error occurred while fetching projects.");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const initializeMap = () => {
            try {
                if (geojsonData && !map.current) {
                    map.current = new mapboxgl.Map({
                        container: mapContainer.current,
                        style: 'mapbox://styles/brettgenoe/clp4y1nmk00eo01r6dedjh7d2',
                        center: [lng, lat],
                        zoom: zoom
                    });

                    map.current.on('load', () => {
                        map.current.addSource('geojson-data', {
                            type: 'geojson',
                            data: geojsonData,
                        });

                        map.current.addLayer({
                            id: 'geojson-layer',
                            type: 'circle',
                            source: 'geojson-data',
                            paint: {
                                'circle-radius': 8,
                                'circle-color': '#CC958F',
                            },
                        });
                    });


                    const handleEvent = async (event) => {
                        if (event.type === 'move') {
                            setLng(map.current.getCenter().lng.toFixed(4));
                            setLat(map.current.getCenter().lat.toFixed(4));
                            setZoom(map.current.getZoom().toFixed(2));
                        } else if (event.type === 'click') {
                            const features = map.current.queryRenderedFeatures(event.point);
                            if (features.length > 0) {
                                const feature = features[0];
                                setSelectedFeature(feature);
                                try {
                                    const response = await axios.get(
                                        `https://api.mapbox.com/geocoding/v5/mapbox.places/${feature.geometry.coordinates[0]},${feature.geometry.coordinates[1]}.json?access_token=${mapboxgl.accessToken}`
                                    );
                                    const address = response.data.features[0].place_name;
                                    setAddress(address)
                                    console.log('Reverse Geocoding Result:', address);
                                } catch (error) {
                                    console.error('Reverse Geocoding Error:', error);
                                }
                            } else {
                                console.log('No features clicked');
                                setSelectedFeature(null);
                            }
                        }
                    };

                    map.current.on('move', handleEvent);
                    map.current.on('click', handleEvent);

                    // map.current.on('load', () => {
                    //     if (!map.current.getSource('geojson-data')) {
                    //         map.current.addSource('geojson-data', {
                    //             type: 'geojson',
                    //             data: geojsonData,
                    //         });

                    //         map.current.addLayer({
                    //             id: 'geojson-layer',
                    //             type: 'circle',
                    //             source: 'geojson-data',
                    //             paint: {
                    //                 'circle-radius': 6,
                    //                 'circle-color': '#CC958F',
                    //             },
                    //         });
                    //     }
                    // });
                    // setLoading(false);
                }
            } catch (error) {
                console.error('Map Initialization Error:', error);
                setError('An error occurred while initializing the map.');
            } finally {
                setLoading(false);
            }
        };

        initializeMap();
    }, [lng, lat, zoom, geojsonData]);

    if (error) {
        return <p>Error: {error}</p>;
    }

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
                    <MapPopup feature={selectedFeature} address={address} />
                </div>
            </article>
        </section>
    );
};

export default Mapbox;