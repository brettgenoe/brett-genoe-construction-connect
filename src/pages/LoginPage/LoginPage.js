import './LoginPage.scss'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../components/AuthContext/AuthContext';
import Input from '../../components/Input/Input';


const LoginPage = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const auth = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/login`, {
            email: event.target.email.value,
            password: event.target.password.value
        })
            .then(async (response) => {
                sessionStorage.setItem("token", response.data.token);

                try {
                    const userResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/current`, {
                        headers: {
                            Authorization: `Bearer ${response.data.token}`
                        }
                    });
                    auth.logIn();
                    navigate('/');

                } catch (error) {
                    console.error("Error fetching user information", error);
                }
            })
            .catch((error) => {
                const errorMessage = error.response?.data?.message || "Please enter valid email and corresponding password.";
                setError(errorMessage);
            });
    };

    return (
        <>
            <main className='login__container' >
                <form className='login__form'
                    onSubmit={handleSubmit}
                >
                    <div className='login__container--field'>
                        <Input
                            label="Email:"
                            id="email"
                            placeholder="Email"
                            type="text"
                        />
                        <Input
                            label="Password:"
                            id="password"
                            placeholder="Password goes here"
                            type="password"
                        />

                        <button
                            className="login__form-button"
                            type="submit">Log in</button>
                    </div>
                    {error && <div className="login__message">{JSON.stringify(error)}</div>}
                </form>

                <p className='login__message'>
                    Need an account? <Link to="/signup" className='login__message--link'>Sign up</Link>
                </p>
            </main >
        </>
    )
}

export default LoginPage;