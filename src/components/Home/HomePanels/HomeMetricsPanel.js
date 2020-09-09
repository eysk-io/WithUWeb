import React from 'react';
import { HomeMetricsPanelStyles } from '../../WithU.styles';
import homeGroupImage from '../../../public/images/home-metric-group.png';
import homeNetworkingImage from '../../../public/images/home-metric-networking.png';

const HomeMetricsPanel = () => {
    return (
        <HomeMetricsPanelStyles>
            <section className='home-metrics-panel'>
                <div className='home-metrics-panel-panels'>
                    <div className='home-metrics-panel-metric'>
                        <div className='home-metrics-panel-metric-row'>
                            <div className="home-metrics-metric-value">
                                59 <br />
                                <span className="home-metrics-metric-metric">
                                    members
                                </span>
                            </div>

                            <div className="home-metrics-metric-value">
                                17 <br />
                                <span className="home-metrics-metric-metric">
                                    countries
                                </span>
                            </div>
                        </div>
                        <div className='home-metrics-panel-metric-row'>
                            <div className="home-metrics-metric-value">
                                9 <br />
                                <span className="home-metrics-metric-metric">
                                    industries
                                </span>
                            </div>
                            <div className="home-metrics-metric-value">
                                25 <br />
                                <span className="home-metrics-metric-metric">
                                    average age
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='home-metrics-panel-image grid-networking'>
                        <img
                            className='home-metrics-panel-networking-image'
                            src={homeNetworkingImage}
                            alt='networking-image'
                        />
                    </div>
                    <div className='home-metrics-panel-image grid-group'>
                        <img
                            className='home-metrics-panel-group-image'
                            src={homeGroupImage}
                            alt='group-image'
                        />
                    </div>
                </div>
            </section>
        </HomeMetricsPanelStyles>
    );
};

export default HomeMetricsPanel;