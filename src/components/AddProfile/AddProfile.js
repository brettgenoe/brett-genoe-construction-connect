import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import "./AddProfile.scss"
const AddProfile = () => {

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/api/users/register`, {
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
                navigate("/")
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

                            <Input
                                label="Password:"
                                id="password"
                                placeholder="Password"
                                type="password"
                            />

                            <Input
                                label="Email:"
                                id="email"
                                placeholder="Email"
                                type="text"
                            />

                            <Input
                                label="Role:"
                                id="role"
                                placeholder="Role"
                                type="text"
                            />

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