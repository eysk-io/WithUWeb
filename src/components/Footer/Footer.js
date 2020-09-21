import React from 'react';
import { FooterStyles } from '../WithU.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <FooterStyles>
            <section className='footer'>
                <div className='footer-left'>
                    <h3 className='footer-header'>Connect with us</h3>
                    <FontAwesomeIcon
                        icon={faInstagram}
                        color={'white'}
                        size={'2x'}
                        className='social-media-logo'
                    />
                    <FontAwesomeIcon
                        icon={faLinkedinIn}
                        color={'white'}
                        size={'2x'}
                        className='social-media-logo'
                    />
                    <p className='designer-credit'>© designed by Jessica Koh for WithU by Forrest</p>
                </div>
                <div className='footer-right'>
                    <div className='footer-information'>
                        <h3 className='footer-header'>Information</h3>
                        <ul className='footer-information-list'>
                            <li>About With U</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Press Inquiries</li>
                        </ul>
                    </div>
                    <div className='footer-contact'>
                        <h3 className='footer-header'>Contact Us</h3>
                        <ul className='footer-information-list'>
                            <li>+82 000 000 000</li>
                            <li>withu@mail.com</li>
                        </ul>
                    </div>
                </div>
            </section>
        </FooterStyles>
    );
};

export default Footer;