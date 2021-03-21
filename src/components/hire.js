import React from 'react';
import styled from 'styled-components';

const Buttons = styled.div`
    left : 0px;
    top : 7.5vw;
    .title{
        left: 23px;
		top: 181px;
		position: absolute;
		overflow: visible;
		width: 497px;
		white-space: nowrap;
		text-align: left;
		font-family: Godo B;
		font-style: normal;
		font-weight: normal;
		font-size: 67px;
		color: rgba(0,0,0,1);
    }
`;

const Hire = () => {
    return( 
        <>
            <Buttons>
                <div className = "title"> 어둠의 채용 게임</div>
            </Buttons>
        </>
    )
}

export default Hire;        