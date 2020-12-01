import React from 'react';
import Header from "./Header/Header"
import styled from "styled-components";
import Body from "./Body/Body";
import Footer from "./Footer/Footer"
function HomePage(){
    const Page = styled.div`
    `;
    return(
        <Page>
            <Header />
            <Body />
            <Footer />
        </Page>
    )
}
export default HomePage