import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import "./AddProfile.scss"
const AddProfile = () => {

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post("http://localhost:8080/api/users/register", {
                email: event.target.email.value,
                password: event.target.password.value,
                first_name: event.target.first_name.value,
                last_name: event.target.last_name.value,
                role: event.target.role.value,
            })
            .then(() => {
                setSuccess(true);
                setError("");
                event.target.reset();
            })
            .catch((error) => {
                setSuccess(false);
                setError(error.response.data);
            });
    };
    return (


        <section className="add-new">
            <div className="signup__container">
                <h1 className="add-new__title">Add New Hard Hat Hero Profile </h1>
                <form className="add-new__form" onSubmit={handleSubmit}>
                    <div className="add-new__form--container">
                        <div className="add-new__form-left">
                            {/* <label
                                id="first_name"
                                className="add-new__form-header">
                                First Name:
                            </label>
                            <input
                                id="first_name"
                                className="add-new__form-input"
                                placeholder="First Name"
                                type="text"
                            /> */}
                            <Input
                                label="First Name:"
                                id="first_name"
                                placeholder="First Name"
                                type="text"
                            />
                            <Input
                                label="Last Name:"
                                id="last_name"
                                placeholder="Last Name"
                                type="text"
                            />
                            {/* <label
                                id="last_name"
                                className="add-new__form-header">
                                Last Name:
                            </label>
                            <input
                                id="last_name"
                                className="add-new__form-input"
                                placeholder="Last Name"
                                type="text"
                            /> */}
                            <Input
                                label="Password:"
                                id="password"
                                placeholder="Password"
                                type="password"
                            />
                            {/* <label
                                id="password"
                                className="add-new__form-header">
                                Password:
                            </label>
                            <input
                                id="password"
                                className="add-new__form-input"
                                placeholder="Password goes here"
                                type="password"
                            /> */}
                            {/* <label
                                id="confirmPassword"
                                className="add-new__form-header"
                            >
                                Confirm Password:
                            </label>
                            <input
                                id="confirmPassword"
                                className="add-new__form-input"
                                placeholder="Confirm Password"
                            /> */}
                            <Input
                                label="Email:"
                                id="email"
                                placeholder="Email"
                                type="text"
                            />
                            {/* <label
                                id="email"
                                className="add-new__form-header">
                                Email:
                            </label>
                            <input
                                id="email"
                                className="add-new__form-input"
                                placeholder="Email"
                                type="text"
                            /> */}
                            <Input
                                label="Role:"
                                id="role"
                                placeholder="Role"
                                type="text"
                            />
                            {/* <label
                                id="role"
                                className="add-new__form-header">
                                Role:
                            </label>
                            <input
                                id="role"
                                className="add-new__form-input"
                                placeholder="Role"
                                type="text"
                            /> */}

                        </div>

                    </div>

                    <button
                        className="signup-button"
                        type="submit">Create</button>

                    {success && <div className="signup__message">Signed up!</div>}
                    {error && <div className="signup__message">{error}</div>}

                </form>
                <p className="signup__message">
                    Have an account? <Link to="/login" className="signup__message--link">Log in</Link>
                </p>

            </div>

        </section>
    )

}
export default AddProfile