import React from 'react';
import HomeSuccessPanel from './HomeSuccessPanel'
import { HomePanelsStyles } from '../../WithU.styles';
import HomeMetricsPanel from './HomeMetricsPanel';

const HomePanels = () => {
    return (
        <HomePanelsStyles>
            <section className='home-panels'>
                <HomeSuccessPanel />
                <HomeMetricsPanel />
            </section>
        </HomePanelsStyles>
    );
};

export default HomePanels;