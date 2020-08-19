import React from 'react';
import './Header.scss';
import HeaderLogo from '../../../assets/images/logo.svg';
function header () {
    return(
        <div className = "header-container">
            <img src={HeaderLogo} className="header-logo" />
            <div className='header-right'>
                <p className='right-nav-items'>Features </p>
                <p className='right-nav-items'>Team</p>
                <p className='right-nav-items'>Sign In</p>
            </div>
        </div>
    );
}

export default header;