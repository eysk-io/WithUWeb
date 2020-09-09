import React from 'react';
import successImage from '../../../public/images/success.svg'
import { HomeSuccessPanelStyles } from '../../WithU.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faGlobe, faUserFriends } from '@fortawesome/free-solid-svg-icons';


const HomeSuccessPanel = () => {
    return (
        <HomeSuccessPanelStyles>
            <section className='home-success-panel home-panel'>
                <img
                    className='success-panel-image'
                    src={successImage}
                    alt='success panel image'
                />
                <div className='success-panel-text'>
                    <h2 className='success-panel-header'>
                        Find success together.
                    </h2>
                    <p className='success-panel-description'>
                        We are an invitation-only peer mentorship network that
                        facilitates students and young professionals around
                        the world to connect and learn from one another.
                    </p>
                    <div className='success-panel-value-row'>
                        <div className='success-panel-value'>
                            <FontAwesomeIcon
                                className='success-panel-icon global-connections'
                                icon={faGlobe} />
                            <h4 className='success-panel-value-header'>
                                Global Connections
                            </h4>
                            <p className='success-panel-value-description'>
                                Expand your network with brilliant individuals around the world.
                                With a culture of curiosity
                                and openness, WithU is a
                                perfect medium for fostering
                                genuine global connections.
                            </p>
                        </div>
                        <div className='success-panel-value'>
                            <FontAwesomeIcon
                                className='success-panel-icon diverse-dialogues'
                                icon={faComments} />
                            <h4 className='success-panel-value-header'>
                                Diverse Dialogues
                            </h4>
                            <p className='success-panel-value-description'>
                                Join our vibrant Slack channels
                                and monthly online dialogues
                                on a wide array of topics.
                                Gain further insights on how people around the world view issues and share your unique perspectives.
                            </p>
                        </div>
                    </div>
                    <div className='success-panel-value-row'>
                        <div className='success-panel-value'>
                            <FontAwesomeIcon
                                className='success-panel-icon peer-mentorship'
                                icon={faUserFriends} />
                            <h4 className='success-panel-value-header'>
                                Peer Mentorship
                            </h4>
                            <p className='success-panel-value-description'>
                                As a community of like-minded
                                (and not-so-like-minded) young professionals, we seek to empower each other by sharing resources, opportunities, and perspectives in a trust-based environment.
                            </p>
                        </div>
                        <div className='success-panel-value'>
                            <FontAwesomeIcon
                                className='success-panel-icon meaningful-impact'
                                icon={faHeart} />
                            <h4 className='success-panel-value-header'>
                                Meaningful Impact
                            </h4>
                            <p className='success-panel-value-description'>
                                We seek to give back to society.
                                WithU is currently planning a mentorship program as well as
                                other ways to support young
                                people around the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </HomeSuccessPanelStyles >
    );
};

export default HomeSuccessPanel;