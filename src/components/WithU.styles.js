import styled from 'styled-components';
import homePanel from '../public/images/home-panel.png';


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

const HomeStyles = styled.div`
    @media only screen and (min-width: 1115px) {
        .home-panel {
            /* width-height: 1-0.57 */
            margin: auto;
            width: 75%;
            min-width: 1115px;
            max-width: 1000px;
            height: 550px;
            background-image: linear-gradient(to right, #126a49 29%, rgba(33, 119, 83, 0)), url(${homePanel});
            background-size: contain;
            background-repeat: no-repeat;
            background-position: 100%;
            padding-left: 5%;
            padding-right: 5%;
        }
        .home-header {
            font-size: 46px;
            line-height: 1;
            letter-spacing: 1px;
            color: white;
            margin: 0;
            margin-top: 7%;
            letter-spacing: -2px;
            font-weight: 500;
        }
        .home-description {
            font-size: 14px;
            font-weight: 400;
            color: white;
            letter-spacing: -0.5px;
            width: 35%;
        }
        .home-panel-button{
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

export { HeaderStyles, HomeStyles };