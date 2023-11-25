
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
    // const [loggedIn, setLoggedIn] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8080/api/users/login", {
            email: event.target.email.value,
            password: event.target.password.value
        })
            .then(async (response) => {
                sessionStorage.setItem("token", response.data.token);

                try {
                    const userResponse = await axios.get("http://localhost:8080/api/users/current", {
                        headers: {
                            Authorization: `Bearer ${response.data.token}`
                        }
                    });

                    console.log("Attempting to log in in loginpage");

                    // setLoggedIn(true);
                    auth.logIn();
                    navigate('/');

                    console.log("Welcome, " + userResponse.data.first_name);
                } catch (error) {
                    console.error("Error fetching user information", error);
                    // setLoggedIn(false);
                }
            })
            .catch((error) => {
                const errorMessage = error.response?.data?.message || "Please enter valid email and corresponding password.";
                setError(errorMessage);
                // setLoggedIn(false);
            });
    };



    return (
        <>
            <main className='login__container' >
                <form className='login__form'
                    onSubmit={handleSubmit}
                >
                    <div>
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
                    </div>
                    <button
                        className="login__form-button"
                        type="submit">Log in</button>

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