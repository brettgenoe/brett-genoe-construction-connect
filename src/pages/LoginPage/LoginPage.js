import React from 'react';
import './LoginPage.scss'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const LoginPage = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8080/api/users/login", {
            email: event.target.email.value,
            password: event.target.password.value
        })
            .then((response) => {
                sessionStorage.setItem("token", response.data.token);
                navigate('/');
            })
            .catch((error) => {
                setError(error.response.data);
            });
    };


    return (
        <>
            <main className='login__container' >
                <form className='login__form'
                    onSubmit={handleSubmit}
                >
                    <div>
                        <div className='login__form-field'>
                            <label
                                id="email"
                                className="login__form-header">
                                Email:
                            </label>
                            <input
                                id="email"
                                className="login__form-input"
                                placeholder="Email"
                                type='text'
                            />
                        </div>
                        <div className='login__form-field'>
                            <label
                                id="password"
                                className="login__form-header">
                                Password:
                            </label>
                            <input
                                id="password"
                                className="login__form-input"
                                placeholder="Password goes here"
                                type='password'
                            />
                        </div>
                    </div>
                    <button
                        className="login__form-button"
                        type="submit">Log in</button>


                    {error && <div className="login__message">{error}</div>}
                </form>

                <p>
                    Need an account? <Link to="/signup">Sign up</Link>
                </p>
            </main>
        </>
    )
}

export default LoginPage;