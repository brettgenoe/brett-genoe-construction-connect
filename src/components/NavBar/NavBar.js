import { useAuth } from '../../components/AuthContext/AuthContext'
import { NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import './NavBar.scss';

const NavBar = () => {
    const { loggedIn, logOut } = useAuth();

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