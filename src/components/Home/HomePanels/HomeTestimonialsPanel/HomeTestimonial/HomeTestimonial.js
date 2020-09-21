import React from 'react';
import HomeTestimonialsPanelProfile from './HomeTestimonialsPanelProfile';

const HomeTestimonial = ({ profilePic, profileAffiliation }) => {
    return (
        <li className='home-testimonial'>
            <div className='home-testimonial-each-member'>
                <HomeTestimonialsPanelProfile
                    profilePic={profilePic}
                    profileAffiliation={profileAffiliation}
                />
                <div className='home-testimonial-testimonial'>
                    <p className='home-testimonial-testimonial-text'>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.”
                    </p>
                    <p className='home-testimonial-description'>
                        - Max Nguyen,
                        <span className='home-testimonial-title'> Analyst </span>
                        at Deloitte
                    </p>
                </div>
            </div>
        </li>
    );
};

export default HomeTestimonial;