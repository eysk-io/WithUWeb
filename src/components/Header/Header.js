import React from 'react';
import { HeaderStyles } from '../WithU.styles';
import withULogoWhite from '../../public/images/with-u-logo-white.png';

const Header = () => {
    return (
        <HeaderStyles>
            <header className='header'>
                <img
                    className='with-u-logo'
                    src={withULogoWhite}
                />
                <div className='header-items'>
                    <h4 className='header-item'>About</h4>
                    <h4 className='header-item'>Events</h4>
                    <h4 className='header-item'>Membership</h4>
                    <h4 className='header-item'>Contact Us</h4>
                    <h4 className='header-item header-item-last'>Join Us</h4>
                </div>
            </header>
        </HeaderStyles>
    )
};

export default Header;