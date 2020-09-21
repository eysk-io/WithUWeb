import React from 'react';
import { HomeEventsPanelStyles } from '../../WithU.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import eventOne from '../../../public/images/global_dialogue_1.jpg';
import eventTwo from '../../../public/images/global_dialogue_2.png';
import eventThree from '../../../public/images/global_general_meeting.jpg';

const HomeEventsPanel = () => {
    return (
        <HomeEventsPanelStyles>
            <section className='home-events-panel home-panel'>
                <h2 className='home-events-panel-header'>
                    Share your knowledge at our events
                </h2>
                <div className='home-events-panel-carousel'>
                    <FontAwesomeIcon
                        className='home-events-panel-carousel-arrow'
                        icon={faChevronLeft}
                        size={'2x'}
                    />
                    <ul className='home-events-panel-carousel-list'>
                        <img
                            src={eventOne} alt='event-one'
                            className='home-events-panel-carousel-event'
                        />
                        <img
                            src={eventTwo} alt='event-two'
                            className='home-events-panel-carousel-event'
                        />
                        <img
                            src={eventThree} alt='event-three'
                            className='home-events-panel-carousel-event'
                        />
                    </ul>
                    <FontAwesomeIcon
                        className='home-events-panel-carousel-arrow'
                        icon={faChevronRight}
                        size={'2x'}
                    />
                </div>
                <div className='home-events-panel-carousel-next-event'>
                    <button className='home-events-panel-carousel-next-event-button'>Find the next event</button>
                </div>

                {/* Centered, width approximately 1/4 of component, font approx same size as success panel h2 */}
                {/* arrow on left side, taken from font awesome */}
                {/* list of three events, flex-direction: row */}
                {/* arrow on right side, taken from font awesome */}
            </section>
        </HomeEventsPanelStyles >
    );
};

export default HomeEventsPanel;