import axios from "axios";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input.js"
import { useAuth } from '../AuthContext/AuthContext';
import "./AddPost.scss";



mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
// mapboxgl.accessToken = "pk.eyJ1IjoiYnJldHRnZW5vZSIsImEiOiJjbHA0ZXJxdnEwY2MxMm1xbDhjNnZpaWV5In0.p_muFdhbA9U0a96AlWixDQ";


const AddPost = () => {
    const authContext = useAuth();
    const currentUser = authContext.currentUser;
    const navigate = useNavigate();
    const managerId = currentUser && currentUser.user_id ? currentUser.user_id : null;


    const [formData, setFormData] = useState({
        company_name: "",
        email: "",
        telephone: "",
        manager_id: managerId,
        duration: "",
        description: "",
        carpenters_needed: "",
        carpenters_description: "",
        electricians_needed: "",
        electricians_description: "",
        plumbers_needed: "",
        plumbers_description: "",
        operators_needed: "",
        operators_description: "",
        safety_needed: "",
        safety_description: "",
        labours_needed: "",
        labours_description: "",
        geo_data: {
            coordinates: ["", ""]
        },
        address: "",
    });

    const [newProject, setNewProject] = useState(null);

    const handleChange = async (e) => {

        if (e.target.name === "latitude" || e.target.name === "longitude") {

        } else if (e.target.name === "address") {

            const address = e.target.value;

            try {
                const response = await axios.get(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxgl.accessToken}`
                );

                const [longitude, latitude] = response.data.features[0].center;


                setFormData({
                    ...formData,
                    geo_data: {
                        coordinates: [longitude, latitude],
                    },
                    address,
                });
            } catch (error) {
                console.error('Error fetching coordinates from Mapbox Geocoding API:', error);
            }
        }
        else {

            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/projects`, formData);
            console.log("Project created:", response.data);
            setNewProject(response.data);
            navigate("/")
        } catch (error) {
            console.error("Error creating project:", error);
        }
    };

    useEffect(() => {

        if (newProject) {
            console.log("New project added:", newProject);
        }
    }, [newProject]);


    return (
        <section className="add-new">
            <div className="add-new__container">
                <h1 className="add-new__title">Post Your Job To Find New Hard Hat Heros</h1>
                <form className="add-new__form" onSubmit={handleSubmit}>
                    <div className="add-new__form--container">
                        <div className="add-new__form-left">
                            <Input
                                id="company_name"
                                label="Company Name"
                                placeholder="Company Name"
                                name="company_name"
                                type="text"
                                value={formData.company_name}
                                onChange={handleChange}
                            />
                            <Input
                                id="address"
                                label="Address"
                                placeholder="Address"
                                name="address"
                                type='text'
                                value={formData.address}
                                onChange={handleChange}
                            />
                            <Input
                                id="email"
                                label="Email"
                                placeholder="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <Input
                                id="telephone"
                                label="Telephone"
                                placeholder="Telephone"
                                name="telephone"
                                type="tel"
                                value={formData.telephone}
                                onChange={handleChange}
                            />
                            <Input
                                id="duration"
                                label="Duration"
                                placeholder="Duration of project in months"
                                name="duration"
                                type="number"
                                value={formData.duration}
                                onChange={handleChange}
                            />
                            <Input
                                id="description"
                                label="Description"
                                placeholder="Description"
                                name="description"
                                className="description"
                                type="text"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="add-new__form-right">

                            <Input
                                id="carpenters_needed"
                                label="Carpenters Needed"
                                placeholder="# of Carpenters Needed"
                                name="carpenters_needed"
                                type="number"
                                value={formData.carpenters_needed}
                                onChange={handleChange}
                            />
                            {formData.carpenters_needed > 0 && (
                                <Input
                                    id="carpenters_description"
                                    label="Description of Work (Carpenters)"
                                    placeholder="Please describe the roles needed of the carpenters."
                                    name="carpenters_description"
                                    type="text"
                                    value={formData.carpenters_description}
                                    onChange={handleChange}
                                />
                            )}
                            <Input
                                id="electricians_needed"
                                label="Electricians Needed"
                                placeholder="# of Electricians Needed"
                                name="electricians_needed"
                                type="number"
                                value={formData.electricians_needed}
                                onChange={handleChange}
                            />
                            {formData.electricians_needed > 0 && (
                                <Input
                                    id="electricians_description"
                                    label="Description of Work (Electricians)"
                                    placeholder="Please describe the roles needed of the electricians."
                                    name="electricians_description"
                                    type="text"
                                    value={formData.electricians_description}
                                    onChange={handleChange}
                                />
                            )}
                            <Input
                                id="plumbers_needed"
                                label="Plumbers Needed"
                                placeholder="# of Plumbers Needed"
                                name="plumbers_needed"
                                type="number"
                                value={formData.plumbers_needed}
                                onChange={handleChange}
                            />
                            {formData.plumbers_needed > 0 && (
                                <Input
                                    id="plumbers_description"
                                    label="Description of Work (Plumbers)"
                                    placeholder="Please describe the roles needed of the plumbers."
                                    name="plumbers_description"
                                    type="text"
                                    value={formData.plumbers_description}
                                    onChange={handleChange}
                                />
                            )}
                            <Input
                                id="operators_needed"
                                label="Operators Needed"
                                placeholder="# of Operators Needed"
                                name="operators_needed"
                                type="number"
                                value={formData.operators_needed}
                                onChange={handleChange}
                            />
                            {formData.operators_needed > 0 && (
                                <Input
                                    id="operators_description"
                                    label="Description of Work (Operators)"
                                    placeholder="Please describe the roles needed of the operators."
                                    name="operators_description"
                                    type="text"
                                    value={formData.operators_description}
                                    onChange={handleChange}
                                />
                            )}
                            <Input
                                id="labours_needed"
                                label="Labours Needed"
                                placeholder="# of Labours Needed"
                                name="labours_needed"
                                type="number"
                                value={formData.labours_needed}
                                onChange={handleChange}
                            />
                            {formData.labours_needed > 0 && (
                                <Input
                                    id="labours_description"
                                    label="Description of Work (Labours)"
                                    placeholder="Please describe the roles needed of the labours."
                                    name="labours_description"
                                    type="text"
                                    value={formData.labours_description}
                                    onChange={handleChange}
                                />
                            )}
                            <Input
                                id="safety_needed"
                                label="Safety Needed"
                                placeholder="# of Safety Needed"
                                name="safety_needed"
                                type="number"
                                value={formData.safety_needed}
                                onChange={handleChange}
                            />
                            {formData.safety_needed > 0 && (
                                <Input
                                    id="safety_description"
                                    label="Description of Work (Safety)"
                                    placeholder="Please describe the roles needed of the safety."
                                    name="safety_description"
                                    type="text"
                                    value={formData.safety_description}
                                    onChange={handleChange}
                                />
                            )}
                        </div>
                    </div>

                    <button
                        className="add-new__form-button"
                        type="submit">Create</button>
                </form>


            </div>

        </section>
    )

}
export default AddPost