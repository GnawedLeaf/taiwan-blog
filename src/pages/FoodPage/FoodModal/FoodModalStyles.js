import styled from "styled-components";

export const FoodModalContainer = styled.div`
background: #FFFAF1;
width:65vw;
height:90vh;
display:grid;
grid-template-rows: 0.65fr 0.25fr 0.1fr;
grid-template-columns: 0.05fr 0.7fr 0.25fr;
font-family: 'Noto Serif TC', serif;
`
export const FoodModalPicturesContainer = styled.div`
grid-row-start: 1;
grid-column-start: 2;
border: 1px solid #333333;
border-top:none;
display: flex;
align-items: center;
justify-content: center;
`
export const FoodModalPicture = styled.img`
width:90%;
background-image: url(${(props) => props.src});
`


export const FoodModalDescription = styled.div`
grid-row-start: 2;
grid-column-start: 2;
border: 1px solid #333333;
border-top:none;
display: flex;
align-items: center;
justify-content: center;
padding:0.5vh 2vw;
font-family: 'Jost', sans-serif;
`
export const FoodModalBigVerticalTitle = styled.div`
grid-row-start: 1;
grid-column-start: 3;
border-bottom: 1px solid #333333;
display: flex;
align-items: center;
justify-content: center;
font-size: 4.7vw;
font-weight: 600;
`
export const FoodModalPrice = styled.div`
grid-row-start: 2;
grid-row: span 2;
grid-column-start: 3;
display: flex;
align-items: center;
justify-content: center;
font-size: 4.7vw;
font-weight: 600;
`
export const FoodModalLocation = styled.div`
grid-row-start: 3;
grid-column-start: 2;
border: 1px solid #333333;
border-top:none;
border-bottom:none;
display: flex;
align-items: center;
justify-content: center;

`
export const FoodModalLocationLink = styled.a`
text-decoration: none;
color: #333333;
font-size:1.1vw;
`


export const FillerBox = styled.div`
grid-row-start: 1;
grid-column-start: 1;
border-bottom: 1px solid #333333;
`
export const FillerBox2 = styled.div`
grid-row-start: 2;
grid-column-start: 1;
border-bottom: 1px solid #333333;
`