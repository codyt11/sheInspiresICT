import React from 'react';
import styled from "styled-components";

function Footer(){
    const Footer = styled.div`
        margin: 1% 0;
        background: black;
        color: white;
    `;
    const Contact = styled.div`
        line-height: 100%;
        
    `;
    const Copy = styled.div`
        text-align: center;
    `;
    

    return(
        <Footer>
        <Contact>
            <h3>Contact</h3>
            <phone>1 (316) 619-2420</phone><br/>
            <email>sheinspiresict@gmail.com</email><br/>
        </Contact>  
        <Copy>SheInspiresICT &copy; 2020</Copy>
    </Footer>
    )
}
export default Footer