import styled from 'styled-components';
import homePanel from '../public/images/home-panel.png';
import homePanelsBackground from '../public/images/homepage-background.svg';

const HeaderStyles = styled.div`
    @media only screen and (min-width: 768px) {
        .header {
            padding: 0;
            padding-top: 15px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .with-u-logo {
            width: 120px;
            height: 77px;
            margin-left: -3.2%;
            margin-top: 15px;
        }
        .header-items {
            color: white;
            margin-top: 10px;
            display: flex;
            flex-direction: row;
        }
        .header-item {
            margin: 0;
            font-weight: 400;
            margin-top: 15px;
            margin-left: 40px;
            font-size: 12px;
        }
        .header-item-last {
            font-weight: 600;
            font-size: 16px;
            margin-top: 10px;
        }
    }
`

const HomePanelsStyles = styled.div`
    @media only screen and (min-width: 1115px) {
        .home-panels {
            margin: auto;
            width: 75%;
            min-width: 1000px;
            max-width: 1115px;
            background-image: url(${homePanelsBackground});
            background-size: 100%;
            background-repeat: no-repeat;
            background-position: 100%;
        }
        .home-panel-button-wrapper {
            display: flex;
            justify-content: space-around;
        }
        .home-panel-button {
            border: solid 2px #2fd98b;
            background-color: white;
            padding: 8px;
            border-radius: 15px;
        }
    }
`;


const HomeStyles = styled.div`
    @media only screen and (min-width: 1115px) {
        .home-panel {
            margin: auto;
            width: 75%;
            min-width: 1000px;
            max-width: 1115px;
            padding-left: 5%;
            padding-right: 5%;
        }
        .home-head-panel {
            /* width-height: 1-0.57 */
            height: 550px;
            background-image: linear-gradient(to right, #126a49 29%, rgba(33, 119, 83, 0)), url(${homePanel});
            background-size: contain;
            background-repeat: no-repeat;
            background-position: 100%;
        }
        .home-head-panel-header {
            font-size: 46px;
            line-height: 1;
            letter-spacing: 1px;
            color: white;
            margin: 0;
            margin-top: 7%;
            letter-spacing: -2px;
            font-weight: 500;
        }
        .home-head-panel-description {
            font-size: 14px;
            font-weight: 400;
            color: white;
            letter-spacing: -0.5px;
            width: 35%;
        }
        .home-head-panel-button{
            font-size: 16px;
            margin-top: 15px;
            background-color: #c49f63;
            color: white;
            padding: 10px;
            padding-right: 20px;
            padding-left: 20px;
            border-radius: 50px;
            border: none;
        }
    }
`;

const HomeSuccessPanelStyles = styled.div`
    @media only screen and (min-width: 1115px) {
        .home-success-panel {
            display: flex;
            flex-direction: row;
            text-align: right;
            padding: 0;
        }
        .success-panel-image {
            width: 50%;
            margin: 0;
            margin-top: 10px;
        }
        .success-panel-header{
            margin-top: 15%;
            font-weight: 400;
            font-size: 44px;
            letter-spacing: -2.5px;
        }
        .success-panel-description{
            font-size: 16px;
            font-weight: 300;
            letter-spacing: -1px;
            margin-top: 15px;
            margin-bottom: 30px;
        }
        .success-panel-value-row {
            display: flex;
        }
        .success-panel-value {
            width: 50%;
            margin-bottom: 50px;
            margin-left: 28px;
        }
        .success-panel-icon {
            color: white;
            width: 60px;
            height: 60px;
            padding: 9px;
            border-radius: 15px;
        }
        .global-connections {
            background-color: #0f6bff;
        }
        .diverse-dialogues {
            background-color: #fabe5b
        }
        .peer-mentorship {
            background-color: #2fd98b
        }
        .meaningful-impact {
            background-color: #ed5454
        }
        .success-panel-value-header {
            font-weight: 500;
            font-size: 20px;
            letter-spacing: -1.6px;
        }
        .success-panel-value-description {
            font-size: 14px;
        }
    }
`;

const HomeMetricsPanelStyles = styled.div`
    @media only screen and (min-width: 1115px) {
        .home-metrics-panel {
            margin: auto;
            margin-top: 100px;
            width: 75%;
            min-width: 1000px;
            max-width: 1115px;
            padding-left: 5%;
            padding-right: 5%;
        }
        .home-metrics-panel-panels {
            display: grid;
        }
        .home-metrics-panel-metric {
            grid-column: 2 / span 2;
            grid-row: 1 / span 1;
        }
        .grid-networking {
            margin-left: -150px;
            grid-column: 5 / span 2;
            grid-row: 1 / span 2;
            z-index: 1;
        }
        .grid-group {
            grid-column: 1 / span 5;
            grid-row: 2 / span 1;
        }
        .home-metrics-panel-networking-image {
            width: 100%;
        }
        .home-metrics-panel-group-image {
            width: 100%;
            margin-top: 40px;
        }
        .home-metrics-panel-metric-row {
            display: flex;
        }
        .home-metrics-metric-value {
            font-size: 50px;
            font-weight: 500;
            line-height: 0.5;
            margin-bottom: 60px;
            margin-right: 140px;
        }
        .home-metrics-metric-metric {
            font-size: 20px;
            font-weight: 400;
        }
    }
`;

const HomeEventsPanelStyles = styled.div`
    @media only screen and (min-width: 1115px) {
        .home-events-panel-header {
            font-weight: 400;
            font-size: 40px;
            letter-spacing: -2px;
            margin: auto;
            margin-top: 2%;
            margin-bottom: 8%;
            width: 50%;
            text-align: center;
        }
        .home-events-panel-carousel {
            margin: auto;
            display: flex;
            justify-content: space-between;
            margin-bottom: 40px;
        }
        .home-events-panel-carousel-list {
            margin: auto;
            display: flex;
            justify-content: space-between;
            width: 80%;
            padding: 0;
        }
        .home-events-panel-carousel-arrow {
            margin-top: 115px;
            color: #126a49;
            background-color: white;
            width: 33px;
            padding: 4px;
            border-radius: 50px;
            box-shadow: 0 4px 20px 0 rgba(0,0,0,0.4);
            :hover {
                transform: translateY(-3px);
                box-shadow: 0 4px 20px 0 rgba(0,0,0,0.4);
            }
        }
        .home-events-panel-carousel-event {
            width: 30%;
            height: 250px;
            border-radius: 15px;
            :hover {
                transform: translateY(-3px);
                box-shadow: 0 4px 20px 0 rgba(0,0,0,0.4);
            }
        }

    }
`;

const HomeTestimonialsPanelStyles = styled.div`
    @media only screen and (min-width: 1115px) {
        .home-testimonials-panel {
            margin-top: 50px;
        }
        .home-testimonials-panel-header {
            font-weight: 400;
            font-size: 40px;
            letter-spacing: -2px;
            margin: auto;
            margin-top: 4%;
            margin-bottom: 4%;
            width: 50%;
            text-align: center;
        }
        .home-testimonials-panel-member-testimonials {
            padding: 0;
            display: flex;
            flex-direction: column;
            text-align: center;
        }
        .home-testimonials-panel-profile {
            display: grid;
            margin-bottom: 50px;
        }
        .home-testimonials-panel-member-affiliation {
            grid-column: 1 / span 1;
            grid-row: 1 / span 1;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            box-shadow: 0 10px 20px 0 rgba(0,0,0,0.3);
            z-index: 1;
            background-color: white;
        }
        .home-testimonials-panel-member-picture {
            grid-column: 1 / span 1;
            grid-row: 1 / span 1;
            width: 180px;
            border-radius: 50%;
            box-shadow: 0 10px 20px 0 rgba(0,0,0,0.7);
        }
        .home-testimonial-each-member {
            display: flex;
        }
        .home-testimonial-testimonial {
            text-align: left;
            margin-left: 50px;
            margin-top: 50px;
        }
        .home-testimonial-description {
            font-size: 12px;
        }
        .home-testimonial-title {
            font-style: italic;
            font-weight: 500;
        }
    }
`;

const ApplyNowPanelStyles = styled.div`
    @media only screen and (min-width: 1115px) {
        .apply-now-panel {
            margin-top: 100px;
            padding-bottom: 300px;
        }
        .apply-now-panel-title {
            font-weight: 400;
            font-size: 30px;
            letter-spacing: -2px;
            margin: auto;
            margin-top: 4%;
            margin-bottom: 2%;
            width: 50%;
            text-align: center;
        }
        .apply-now-panel-button-wrapper {
            display: flex;
            justify-content: space-around;
        }
        .apply-now-panel-button {
            color: white;
            font-size: 20px;
            border: solid 2px #2fd98b;
            background-color: #2fd98b;
            padding-top: 12px;
            padding-bottom: 12px;
            padding-left: 32px;
            padding-right: 32px;
            border-radius: 50px;
        }
    }
`;

const FooterStyles = styled.div`
    @media only screen and (min-width: 1115px) {
        .footer {
            margin: auto;
            width: 75%;
            min-width: 1000px;
            max-width: 1115px;
            height: 250px;
            background-color: #217753;
            display: flex;
            justify-content: space-between;
        }
        .footer-left {
            margin-left: 200px;
        }
        .footer-right {
            margin-right: 200px;
            display: flex;
        }
        .footer-header {
            color: white;
            font-weight: 400;
            margin-bottom: 5px;
            margin-top: 50px;
        }
        .social-media-logo {
            margin-right: 10px;
        }
        .designer-credit {
            margin-top: 80px;
            color: white;
            font-size: 10px;
        }
        .footer-information-list {
            margin-right: 40px;
            padding: 0;
            color: white;
            font-size: 12px;
        }
    }
`;

export {
    HeaderStyles,
    HomeStyles,
    HomePanelsStyles,
    HomeSuccessPanelStyles,
    HomeMetricsPanelStyles,
    HomeEventsPanelStyles,
    HomeTestimonialsPanelStyles,
    ApplyNowPanelStyles,
    FooterStyles,
};