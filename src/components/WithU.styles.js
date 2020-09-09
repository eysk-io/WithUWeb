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

export { HeaderStyles, HomeStyles, HomePanelsStyles, HomeSuccessPanelStyles };