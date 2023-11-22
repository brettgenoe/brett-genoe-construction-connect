import React from "react";
import "./AddPost.scss"
import axios from "axios";
import { useState, useEffect } from "react";

const AddPost = () => {
    const [formData, setFormData] = useState({
        company_name: "",
        email: "",
        telephone: "",
        // geo_data: {
        //     coordinates: [0, 0]
        // },
        manager_id: 4,
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

    });

    const [newProject, setNewProject] = useState(null);

    const handleChange = (e) => {
        if (e.target.name === "latitude" || e.target.name === "longitude") {
            setFormData({
                ...formData,
                // geo_data: {
                //     ...formData.geo_data,
                //     coordinates: [
                //         e.target.name === "latitude" ? e.target.value : formData.geo_data.coordinates[0],
                //         e.target.name === "longitude" ? e.target.value : formData.geo_data.coordinates[1]
                //     ]
                // }
            });
        } else {

            setFormData({
                ...formData,
                [e.target.name]: e.target.value,

            });
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const response = await axios.post("http://localhost:8080/api/projects", formData);
            console.log("Project created:", response.data);

            console.log(formData)
            setNewProject(response.data);
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
                <h1 className="add-new__title">Add New Hard Hat Hero Profile </h1>
                <form className="add-new__form" onSubmit={handleSubmit}>
                    <div className="add-new__form--container">
                        <div className="add-new__form-left">
                            <label
                                id="company_name"
                                className="add-new__form-header">
                                Company Name:
                            </label>
                            <input
                                id="company_name"
                                className="add-new__form-input"
                                placeholder="Company Name"
                                name="company_name"
                                value={formData.company_name}
                                onChange={handleChange}
                            />
                            <label id="latitude" className="add-new__form-header">
                                Latitude:
                            </label>
                            {/* <input
                                id="latitude"
                                className="add-new__form-input"
                                placeholder="Latitude"
                                name="latitude"
                                value={formData.geo_data.coordinates[0]}
                                onChange={handleChange}
                            /> */}
                            <label id="longitude" className="add-new__form-header">
                                Longitude:
                            </label>
                            {/* <input
                                id="longitude"
                                className="add-new__form-input"
                                placeholder="Longitude"
                                name="longitude"
                                value={formData.geo_data.coordinates[1]}
                                onChange={handleChange}
                            /> */}
                            <label
                                id="email"
                                className="add-new__form-header">
                                email:
                            </label>
                            <input
                                id="email"
                                className="add-new__form-input"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <label
                                id="telephone"
                                className="add-new__form-header">
                                Telephone:
                            </label>
                            <input
                                id="telephone"
                                className="add-new__form-input"
                                placeholder="Telephone"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleChange}
                            />
                            <label
                                id="duration"
                                className="add-new__form-header"
                            >
                                Duration:
                            </label>
                            <input
                                id="duration"
                                className="add-new__form-input"
                                placeholder="Duration of project"
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                            />
                            <label
                                id="description"
                                className="add-new__form-header">
                                Description:
                            </label>
                            <input
                                id="description"
                                className="add-new__form-input"
                                placeholder="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="add-new__form-right">

                            <label
                                id="carpenters_needed"
                                className="add-new__form-header">
                                Carpenters Needed:
                            </label>
                            <input
                                id="carpenters_needed"
                                className="add-new__form-input"
                                placeholder="# of Carpenters Needed"
                                name="carpenters_needed"
                                value={formData.carpenters_needed}
                                onChange={handleChange}
                            />
                            <label
                                id="carpenters_description"
                                className="add-new__form-header">
                                Description of Work:
                            </label>
                            <input
                                id="carpenters_description"
                                className="add-new__form-input"
                                placeholder="Please describle the roles needed of the carpenters."
                                name="carpenters_description"
                                value={formData.carpenters_description}
                                onChange={handleChange}
                            />
                            <label
                                id="electricians_needed"
                                className="add-new__form-header">
                                Electricians Needed:
                            </label>
                            <input
                                id="electricians_needed"
                                className="add-new__form-input"
                                placeholder="# of Electricians Needed"
                                name="electricians_needed"
                                value={formData.electricians_needed}
                                onChange={handleChange}
                            />
                            <label
                                id="electricians_description"
                                className="add-new__form-header">
                                Description of Work:
                            </label>
                            <input
                                id="electricians_description"
                                className="add-new__form-input"
                                placeholder="Please describle the roles needed of the electricians."
                                name="electricians_description"
                                value={formData.electricians_description}
                                onChange={handleChange}
                            />
                            <label
                                id="plumbers_needed"
                                className="add-new__form-header">
                                Plumbers Needed:
                            </label>
                            <input
                                id="plumbers_needed"
                                className="add-new__form-input"
                                placeholder="# of Plumbers Needed"
                                name="plumbers_needed"
                                value={formData.plumbers_needed}
                                onChange={handleChange}
                            />
                            <label
                                id="plumbers_description"
                                className="add-new__form-header">
                                Description of Work:
                            </label>
                            <input
                                id="plumbers_description"
                                className="add-new__form-input"
                                placeholder="Please describle the roles needed of the plumbers."
                                name="plumbers_description"
                                value={formData.plumbers_description}
                                onChange={handleChange}
                            />
                            <label
                                id="operators_needed"
                                className="add-new__form-header">
                                Operators Needed:
                            </label>
                            <input
                                id="operators_needed"
                                className="add-new__form-input"
                                placeholder="# of Operators Needed"
                                name="operators_needed"
                                value={formData.operators_needed}
                                onChange={handleChange}
                            />
                            <label
                                id="operators_description"
                                className="add-new__form-header">
                                Description of Work:
                            </label>
                            <input
                                id="operators_description"
                                className="add-new__form-input"
                                placeholder="Please describle the roles needed of the operators."
                                name="operators_description"
                                value={formData.operators_description}
                                onChange={handleChange}
                            />
                            <label
                                id="labours_needed"
                                className="add-new__form-header">
                                Labours Needed:
                            </label>
                            <input
                                id="labours_needed"
                                className="add-new__form-input"
                                placeholder="# of Labours Needed"
                                name="labours_needed"
                                value={formData.labours_needed}
                                onChange={handleChange}
                            />
                            <label
                                id="labours_description"
                                className="add-new__form-header">
                                Description of Work:
                            </label>
                            <input
                                id="labours_description"
                                className="add-new__form-input"
                                placeholder="Please describle the roles needed of the labours."
                                name="labours_description"
                                value={formData.labours_description}
                                onChange={handleChange}
                            />
                            <label
                                id="safety_needed"
                                className="add-new__form-header">
                                Safety Needed:
                            </label>
                            <input
                                id="safety_needed"
                                className="add-new__form-input"
                                placeholder="# of Safety Needed"
                                name="safety_needed"
                                value={formData.safety_needed}
                                onChange={handleChange}
                            />
                            <label
                                id="safety_description"
                                className="add-new__form-header">
                                Description of Work:
                            </label>
                            <input
                                id="safety_description"
                                className="add-new__form-input"
                                placeholder="Please describle the roles needed of the safety."
                                name="safety_description"
                                value={formData.safety_description}
                                onChange={handleChange}
                            />

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