import { useAuth } from '../../components/AuthContext/AuthContext'
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import logo from "../../assets/images/logo.png";
import './NavBar.scss';

const NavBar = () => {
    const { loggedIn, logOut } = useAuth();
    console.log('NavBar - loggedIn:', loggedIn);
    const authToken = sessionStorage.getItem('token');
    const [userFirstName, setUserFirstName] = useState('');

    // useEffect(() => {

    //     if (loggedIn) {

    //         axios.get('http://localhost:8080/api/users/current', {
    //             headers: {
    //                 Authorization: `Bearer ${authToken}`
    //             }
    //         })
    //             .then(response => setUserFirstName(response.data.first_name))
    //             .catch(error => console.error('Error fetching current user info:', error));
    //     }
    // }, [loggedIn]);
    return (
        <>
            <header className='nav__section' >
                <nav className='nav__top-bar'>

                    <NavLink to="/"> <img
                        className='nav__logo'
                        src={logo}
                        alt='blueprint logo of the app'
                    /></NavLink>

                    <div className='nav__log-in' >
                        {loggedIn ? (
                            <>
                                <NavLink to="./post">
                                    <button className='nav__button'>New Post!</button>
                                </NavLink>
                                <button className='nav__button' onClick={logOut}>
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink to="/login">
                                    <button className='nav__button'>Log In</button>
                                </NavLink>
                                <NavLink to="/signup">
                                    <button className='nav__button'>Sign Up</button>
                                </NavLink>
                            </>
                        )}

                    </div>


                </nav>
                <h1 className='nav__title' >Construction Connect</h1>
            </header>
        </>
    )
}

export default NavBar;