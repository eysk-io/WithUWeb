import React from 'react';
import HomeSuccessPanel from './HomeSuccessPanel'
import { HomePanelsStyles } from '../../WithU.styles';

const HomePanels = () => {
    return (
        <HomePanelsStyles>
            <section className='home-panels'>
                <HomeSuccessPanel />
            </section>
        </HomePanelsStyles>
    );
};

export default HomePanels;