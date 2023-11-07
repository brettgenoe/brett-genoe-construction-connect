import './Footer.scss'
import github from "../../assets/icons/github-mark.svg"
import linkedin from "../../assets/icons/LinkedIn.png"
const Footer = () => {

    return (
        <>
            <footer className='footer'>
                <p className='footer__title'> This app has been developed by Brett Genoe</p>
                <h2 className='footer__title--contact'>Contact Info:</h2>
                <div className='footer__contact-section'>
                    <a className='footer__email' href='emailto:brettgenoe@gmail.com'>BrettGenoe@gmail.com</a>
                    <div className='footer__icons'><a><img
                        className='footer__icons--github'
                        src={github} /></a>
                        <a><img
                            className='footer__icons--linkedin'
                            src={linkedin} /></a>
                    </div></div>

            </footer>
        </>
    )
}

export default Footer;