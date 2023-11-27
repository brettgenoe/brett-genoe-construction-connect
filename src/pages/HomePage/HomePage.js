import './HomePage.scss'
import { useAuth } from '../../components/AuthContext/AuthContext'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Mapbox from '../../components/Mapbox/Mapbox';


const HomePage = () => {
    const { loggedIn, logOut } = useAuth();
    const authToken = sessionStorage.getItem('token');
    const [userFirstName, setUserFirstName] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/users/current', {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });
                setUserFirstName(response.data.first_name);
            } catch (error) {
                console.error('Error fetching current user info:', error);
            }
        };

        if (loggedIn) {
            fetchUserData();
        }
    }, [loggedIn, authToken]);

    return (
        <>
            <main className='home' >
                {loggedIn ? (<h1 className='home__title'>Hello, {userFirstName}!</h1>
                ) : (
                    <h1 className='home__title' >Let's Connect!</h1>
                )}
                <div className='home__media-queries'>
                    <section className='home__search--map'>
                        <form className='search'>
                            <label className='search__label'>
                            </label>
                            <input
                                type='search'
                                className='search__input'
                                placeholder='Search your neighbourhood'>
                            </input>
                            <button type="search"
                                className='search__button'></button>
                        </form>
                        <article className='home__map--conatiner'>
                            <Mapbox />
                        </article> </section>

                </div>

            </main>
        </>
    )
}

export default HomePage;