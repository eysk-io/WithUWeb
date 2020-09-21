import React from 'react';
import { HomeStyles } from '../WithU.styles';
import HomePanels from './HomePanels/HomePanels';
import HomeHeadPanel from './HomePanels/HomeHeadPanel';
import HomeEventsPanel from './HomePanels/HomeEventsPanel';

const Home = () => {
    return (
        <HomeStyles>
            <div className='home'>
                <HomeHeadPanel />
                <HomePanels />
            </div>
        </HomeStyles>
    );
};

export default Home;
