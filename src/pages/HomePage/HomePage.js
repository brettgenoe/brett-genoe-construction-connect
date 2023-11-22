import './HomePage.scss'
import search from "../../assets/icons/search.svg"
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../components/AuthContext/AuthContext'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Mapbox from '../../components/Mapbox/Mapbox';


const HomePage = () => {
    const { loggedIn, logOut } = useAuth();
    const authToken = sessionStorage.getItem('token');
    const [userFirstName, setUserFirstName] = useState('');

    useEffect(() => {

        if (loggedIn) {

            axios.get('http://localhost:8080/api/users/current', {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            })
                .then(response => setUserFirstName(response.data.first_name))
                .catch(error => console.error('Error fetching current user info:', error));
        }
    }, [loggedIn]);

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


                    {/* <section className='result' >
                        <h2 className='result__title'>Your Search Results:</h2>
                        <h3 className='result__title--name'> Example 1 (Company's name)</h3>
                        <p className='result__email'>companyemail@email.com</p>
                        <p className='result__phone'>company phone#</p>
                        <h4 className='result__title--small result__address'>Location</h4>
                        <span className='result__address--result'> 123 Example St.
                        </span>
                        <h4 className='result__title--small result__duration'>Duration</h4>
                        <span className='result__duration--result'>2 years</span>
                        <h4 className='result__title--small result__description'>Description</h4>
                        <p className='result__description--result'>Description of job goes here: we are building an apartment complex near downtown...</p>
                        <div>
                            <h4 className='result__title--small'>Workers Needed:</h4>
                            <p className='result__labour'><b>Carpenters:</b> 5</p>
                            <p className='result__labour'><b>Electricians:</b> 4</p>
                            <p className='result__labour'><b>Plumbers:</b> 2</p>
                            <p className='result__labour'><b>Operators:</b> 1</p>
                            <p className='result__labour'><b>Safety:</b> 1</p>
                            <p className='result__labour'><b>Labours:</b> 7</p>
                        </div>
                        <div className='result__button--container'><a className='result__apply-button'>Apply</a></div>

                    </section> */}
                </div>


            </main>
        </>
    )
}

export default HomePage;