import React from 'react';
import { HomeStyles } from '../WithU.styles';
import Header from '../Header/Header';

const Home = () => {
    return (
        <HomeStyles>
            <div className='home'>
                <section className='home-panel'>
                    <Header />
                    <h1 className='home-header'>
                        Global Connection. <br />
                        Positive Influence.
                    </h1>
                    <h3 className='home-description'>
                        Become part of a community of global young leaders
                        and meet your next opportunity.
                    </h3>
                    <button className='home-panel-button'>
                        Apply Now
                    </button>
                </section>
            </div>
        </HomeStyles>
    );
};

export default Home;
