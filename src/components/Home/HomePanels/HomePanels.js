import React from 'react';
import HomeSuccessPanel from './HomeSuccessPanel'
import { HomePanelsStyles } from '../../WithU.styles';
import HomeMetricsPanel from './HomeMetricsPanel';
import HomeEventsPanel from './HomeEventsPanel';

const HomePanels = () => {
    return (
        <HomePanelsStyles>
            <section className='home-panels'>
                <HomeSuccessPanel />
                <HomeMetricsPanel />
                <HomeEventsPanel />
            </section>
        </HomePanelsStyles>
    );
};

export default HomePanels;