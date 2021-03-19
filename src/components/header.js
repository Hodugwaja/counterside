import React from 'react';
import styled from 'styled-components';

const HeaderType = styled.div`
    position: absolute;
    overflow: visible;
    width: 100%;
    height: 7.5vw;
    left: 0px;
    top: 0px;
    background-color: rgba(0,0,0,1);
    .logo{
        left: 23px;
		top: 25px;
		position: absolute;
		overflow: visible;
		white-space: nowrap;
		text-align: left;
		font-family: Blanka;
		font-style: normal;
		font-weight: normal;
		font-size: 3.5vw;
		color: rgba(255,255,255,1);

     
        @media only screen and (max-width: 768px) {
            width: ${props => (props.span ? (props.span / 12) * 100 : "8.33")}%;
            font-size : 7.5vw;
          }
    }
    .logored{
        color : rgba(255, 0, 0, 1);
    }
    .whitebutton{
        position: absolute;
		overflow: visible;
		width: 12.5%;
		height: 6vw;
		fill: rgba(0,0,0,1);
        border: 2px solid #FFFFFF;
        border-radius: 82px;
        opacity: 1;
        left : 60%;
        top : 10%;
    }
    .blackbutton{
        position: absolute;
		overflow: visible;
		width: 20%;
		height: 6vw;
		background-color: rgba(255,255,255,1);
        border: 2px solid #FFFFFF;
        border-radius: 82px;
        opacity: 1;
        left : 75%;
        top : 10%;
    }
    .hire{
        text-align: center;
        font: normal normal normal 60px/72px Blanka; 
        font-size : 3.5vw;
        top : 75%;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    .tunning{
        text-aign : center;
        text-align: center;
        font: normal normal normal 60px/72px Blanka; 
        font-size : 3.5vw;
        top : 75%;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
    }
`;

const Header = (type) => {
    return(
        <HeaderType>
            <span className = "logo">COUNTE<span className = "logored">R</span>SIDE</span>
            <span className = "whitebutton">
                <div className = "hire">Hire</div>
            </span>
            <span className = "blackbutton">
                <div className = "tunning">Tunning</div>
            </span>
        </HeaderType>    
    )
}

export default Header;