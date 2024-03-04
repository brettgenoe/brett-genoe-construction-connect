import { useAuth } from '../../components/AuthContext/AuthContext'
import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import logo from "../../assets/images/logo.png";
import menu from "../../assets/icons/menu.svg"
import './NavBar.scss';

const NavBar = () => {
    const { loggedIn, logOut } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navMenuRef = useRef(null);

    const toggleMenu = (event) => {
        event.stopPropagation();
        
        setIsMenuOpen(prevState => !prevState)
    }
    // const hamburger = document.querySelector(".hamburger");

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navMenuRef.current 
                && !navMenuRef.current.contains(event.target)
                && !event.target.classList.contains("hamburger")
                ) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navMenuRef]);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <section>
            <header className='nav__section' >
                <nav className='nav__top-bar'>

                    <NavLink to="/"> <img
                        className='nav__logo'
                        src={logo}
                        alt='blueprint logo of the app'
                    /></NavLink>
                    <h1 className='nav__title' >Construction Connect</h1>
                    <div className='nav__log-in' >
                        {loggedIn ? (
                            <>
                                    <NavLink 
                                to="./editprofile">
                                    <button className='nav__button' onClick={handleLinkClick}>Edit Profile</button>
                                </NavLink>
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

                        <div
                        
                        className={`nav__menu ${isMenuOpen ? 'active' : ''}`}>
                        <div
                        ref={navMenuRef}
                        className='nav__menu--flex-container'
                          >
                        <NavLink to="/">
                                    <button className='nav__button' onClick={handleLinkClick}>Home</button>
                                </NavLink>
                        {loggedIn ? (
                            <>
                                <NavLink 
                                to="./editprofile">
                                    <button className='nav__button' onClick={handleLinkClick}>Edit Profile</button>
                                </NavLink>
                                <NavLink 
                                to="./post">
                                    <button className='nav__button' onClick={handleLinkClick}>New Post!</button>
                                </NavLink>
                                <button className='nav__button' onClick={() => {
                                    logOut(); 
                                    handleLinkClick()}} >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink to="/login">
                                    <button className='nav__button' onClick={handleLinkClick}>Log In</button>
                                </NavLink>
                                <NavLink to="/signup">
                                    <button className='nav__button' onClick={handleLinkClick}>Sign Up</button>
                                </NavLink>
                            </>
                        )}
                    </div>
                    </div>

                    <div 
                    // ref={navMenuRef}
                    onClick={(event) => toggleMenu(event)}
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </nav>
                
            </header>
        </section>
    )
}

export default NavBar;