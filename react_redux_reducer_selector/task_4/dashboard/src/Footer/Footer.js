import React, { useContext } from 'react';
import { AppContext } from '../App/AppContext';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils'



function Footer() {
    const { user } = useContext(AppContext);

    return (
        <footer className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
               
            {user.isLoggedIn && (
                <p className="contactus">
                Contact us:
                <a href="/contact-us">Contact us</a>
                </p>
            )}
        </footer>
      )
}
export default Footer;
