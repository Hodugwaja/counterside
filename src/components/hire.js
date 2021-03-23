import React, {useState, useEffect} from 'react';
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
    .tab{
        overflow: hidden;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
    }
    .tab-button{
        background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 17px;
    }
`;

const Hire = () => {
    const [onChangeSelection, setOnChangeSelction] = useState('리플레이서 나이트 채용');
    useEffect((evt) => {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }, [onChangeSelection])

    return( 
        <>
            <Buttons>
                <div className = "title"> 어둠의 채용 게임</div>
                <div class="tab">
                    <button class="tablinks" onclick={{openCity(event)}}>London</button>
                    <button class="tablinks" onclick={{openCity(event)}}>Paris</button>
                    <button class="tablinks" onclick={{openCity(event)}}>Tokyo</button>
                </div>
            </Buttons>
        </>
    )
}

export default Hire;        