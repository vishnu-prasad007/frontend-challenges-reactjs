import React from 'react';
import MainContentIllustration from './../../assets/images/illustration-1.svg'
import './Main.scss';
function main() {
    return (
        <div className="main-container">
            <div className="main-left-items">
                <div className='left-item-1'>
                    <h2>All your files in one secure</h2>
                    <h2>location, accessible anywhere.</h2>
                </div>
                <div className='left-item-1'>
                    <p>Fylo stores your most important files in one secure location.
                     Access them wherever you need, share and collaborate with friends,
                  family, and co-workers.</p>
                </div>
                <div className='main-user-input-action'>
                    <input placeholder='Enter your email...' />
                    <button className='get-started-btn'>Get Started</button>
                </div>
            </div>
            <img src={MainContentIllustration} className='main-content-illustration' />
        </div>
    );
}

export default main;