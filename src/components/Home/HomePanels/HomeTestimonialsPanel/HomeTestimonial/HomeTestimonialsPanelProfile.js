import React from 'react';

const HomeTestimonialsPanelProfile = ({ profilePic, profileAffiliation }) => {
    return (
        <div className='home-testimonials-panel-profile'>
            <img
                className='home-testimonials-panel-member-affiliation'
                src={profileAffiliation}
                alt='member-testimonial-profile-affiliation'
            />
            <img
                className='home-testimonials-panel-member-picture'
                src={profilePic}
                alt='member-testimonial-profile-picture'
            />
        </div>
    );
};

export default HomeTestimonialsPanelProfile;