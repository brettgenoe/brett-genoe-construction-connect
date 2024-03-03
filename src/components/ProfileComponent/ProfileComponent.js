import './ProfileComponent.scss'
import Input from '../Input/Input';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfileComponent = ({userData}) => {

    
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
        <>
            <section className='profile' >
                This is the profile component {userData.last_name}

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

            </section>
        </>
    )
}

export default ProfileComponent;

