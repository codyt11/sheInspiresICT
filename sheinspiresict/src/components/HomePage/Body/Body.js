import React from 'react';
import cupcake from "../../../images/cupcake.jpg";
import pie from "../../../images/pie.jpg";
import pie2 from "../../../images/pie2.jpg";
import fall from "../../../images/fall.jpg";
import styled from "styled-components";

function Body() {
    const Gallery = styled.div`
        display: flex;
        justify-content: space-around;
    `;

    const Img = styled.img`
        height: 15rem;
        width:15rem;
    `;
    const Img2 = styled.img`
        width: 40%;
    `;
    const Special = styled.div`
        display: flex;
        justify-content: space-around;
        margin: 3%;
    `;
    const News = styled.div`
        Width: 50%;
    `;
    return(
        <div>
            <Special>
                <Img2 src = {fall} alt = "fall special"/>
                <News>
                    <h2>News!</h2>
                    <h3>Thank you so much for all your orders!! We started baking and delivering yesterday! 
                        Thank you for supporting our small local business. Because of you, we sold the following in 3 days...
                        45 Pies
                        8 dz Pumpkin Cinnamon Rolls 
                        10 dz Cupcakes
                        10 dz Cookies
                        Thank you again for all your love and support!! We hope you all enjoy your orders. 🙂 ❤
                    </h3>
                </News>
                
            </Special>
            
            <div>
                <h3>Gallery</h3>
                <Gallery>
                    <Img src = {pie} alt = "pie"/>
                    <Img src = {pie2} alt = "pie"/>
                    <Img src = {cupcake} alt = "cupcakes"/>
                </Gallery>
            </div>
        </div>
    )
}

export default Body; 