import { NavLink } from 'react-router-dom'
import './NavBar.scss'
import logo from "../../assets/images/logo.png"


const NavBar = () => {

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
                        <NavLink to="/" >
                            <button
                                className='nav__button'
                            >Log In</button>
                        </NavLink>
                        <NavLink to="/signup" >
                            <button
                                className='nav__button'
                            >Sign Up</button>
                        </NavLink>
                    </div>


                </nav>
                <h1 className='nav__title' >Construction Connect</h1>
            </header>
        </>
    )
}

export default NavBar;