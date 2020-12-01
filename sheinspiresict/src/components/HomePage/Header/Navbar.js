import React from 'react';
import styled from 'styled-components';



function Navbar(){

    const Nav = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 0 10px;
        padding: 0 2%;
    `;
    const A = styled.nav`
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    `;
return(
    <div>
        <Nav>
            <A href="#">Home</A>
            <A href="#">Order</A>
            <A href="#">Special Events</A>
            <A href="#">Gallery</A>
            <A href="#">About</A>
            <A href="#">Contact</A>
        </Nav> 
    </div>
               
)}
export default Navbar