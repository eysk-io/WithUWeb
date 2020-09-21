import React from 'react';
import { ApplyNowPanelStyles } from '../WithU.styles';

const ApplyNowPanel = ({ pageClassName }) => {
    return (
        <ApplyNowPanelStyles>
            <section className={`apply-now-panel ${pageClassName}`}>
                <h2 className='apply-now-panel-title'>Join us and get networkin.'</h2>
                <div className='apply-now-panel-button-wrapper'>
                    <button className='apply-now-panel-button'>Apply Now</button>
                </div>
            </section>
        </ApplyNowPanelStyles>
    );
};

export default ApplyNowPanel;