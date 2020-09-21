import React from 'react';
import HomeSuccessPanel from './HomeSuccessPanel'
import { HomePanelsStyles } from '../../WithU.styles';
import HomeMetricsPanel from './HomeMetricsPanel';
import HomeEventsPanel from './HomeEventsPanel';
import HomeTestimonialsPanel from './HomeTestimonialsPanel/HomeTestimonialsPanel';
import ApplyNowPanel from '../../Panels/ApplyNowPanel';

const HomePanels = () => {
    return (
        <HomePanelsStyles>
            <section className='home-panels'>
                <HomeSuccessPanel />
                <HomeMetricsPanel />
                <HomeEventsPanel />
                <HomeTestimonialsPanel />
                <ApplyNowPanel
                    pageClassName={'home-panel'}
                />
            </section>
        </HomePanelsStyles>
    );
};

export default HomePanels;