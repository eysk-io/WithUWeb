import React from 'react';
import { HomeTestimonialsPanelStyles } from '../../../WithU.styles';
import profileOne from '../../../../public/images/profile-1.png';
import profileTwo from '../../../../public/images/profile-2.jpeg';
import profileThree from '../../../../public/images/profile-3.jpg';
import profileOneLogo from '../../../../public/images/telus.png';
import profileTwoLogo from '../../../../public/images/game-seta.png';
import profileThreeLogo from '../../../../public/images/sciences-po.png';
import HomeTestimonial from './HomeTestimonial/HomeTestimonial';

const HomeTestimonialsPanel = () => {
    return (
        <HomeTestimonialsPanelStyles>
            <section className='home-testimonials-panel home-panel'>
                <h2 className='home-testimonials-panel-header'>What our members say about WithU</h2>
                <ul className='home-testimonials-panel-member-testimonials'>
                    <HomeTestimonial
                        profilePic={profileOne}
                        profileAffiliation={profileOneLogo}
                    />
                    <HomeTestimonial
                        profilePic={profileTwo}
                        profileAffiliation={profileTwoLogo}
                    />
                    <HomeTestimonial
                        profilePic={profileThree}
                        profileAffiliation={profileThreeLogo}
                    />
                </ul>
                <div className='home-testimonials-panel-carousel-next-event home-panel-button-wrapper'>
                    <button className='home-testimonials-panel-carousel-next-event-button home-panel-button'>View more members</button>
                </div>

            </section>
        </HomeTestimonialsPanelStyles >
    );
};

export default HomeTestimonialsPanel;