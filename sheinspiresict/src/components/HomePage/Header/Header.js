import React from 'react';
import Navbar from "./Navbar";
import styled from 'styled-components';
import logo from "../../../images/logo.png";

function Header(){
    const LogoTitle = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    `;
   const Img = styled.img`
    width: 20%;
    height: 80%;
    display: flex;
    justify-content: ;
   `; 

    return(
        <div>
            <LogoTitle>
                <Img src = {logo}/> 
            </LogoTitle>
            <Navbar/>
            
        </div>
    )
}
export default Header