import React from 'react';
import Header from '../../Header/Header';

const HomeHeadPanel = () => {
    return (
        <section className='home-head-panel home-panel'>
            <Header />
            <h1 className='home-head-panel-header'>
                Global Connection. <br />
                Positive Influence.
            </h1>
            <h3 className='home-head-panel-description'>
                Become part of a community of global young leaders
                and meet your next opportunity.
            </h3>
            <button className='home-head-panel-button'>
                Apply Now
            </button>
        </section>
    );
};

export default HomeHeadPanel;