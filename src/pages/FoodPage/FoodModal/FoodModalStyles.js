import styled from "styled-components";

export const FoodModalContainer = styled.div`
background: #FFFAF1;
width:65vw;
height:90vh;
display:grid;
grid-template-rows: 0.65fr 0.25fr 0.1fr;
grid-template-columns: 0.05fr 0.7fr 0.25fr;
font-family: 'Noto Serif TC', serif;

position:absolute;
opacity: ${props => props.opacity};
z-index: ${props => props.zIndex};
transform-origin: left;

transition: all 0.7s ease, opacity 0.4s ease;
transform: translate(${props => props.translateX},${props => props.translateY});
box-shadow: 10px 12px 13px -2px rgba(0,0,0,0.15);
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
font-size: ${(props) => 6.5 - props.length / 1.5}vw;
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
font-size:1.3vw;
font-weight:bold;
transition-duration: 0.4s;
&:hover{
  color: #F28482;
}

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

export const FoodModalLastContainer = styled.div`
background: #FFFAF1;
width:65vw;
height:90vh;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
font-family: 'Jost', sans-serif;

position:absolute;
opacity: ${props => props.opacity};
z-index: ${props => props.zIndex};
transform-origin: left;

transition: all 0.7s ease, opacity 0.4s ease;
transform: translate(${props => props.translateX},${props => props.translateY});
box-shadow: 10px 12px 13px -2px rgba(0,0,0,0.15);
`
export const FoodModalTitle = styled.div`
font-size: 2vw;
margin-bottom: 1.5rem;
`
export const FoodModalLastPicture = styled.img`
width:55vw;
background-image: url(${(props) => props.src});
height: ${(props) => props.src === "" ? "60vh" : ""};
border: ${(props) => props.src === "" ? "1px solid #333333" : "none"};
transition-duration: 0.4s;

&:hover {
  transform: ${(props) => props.src === "" ? "scale(1)" : "scale(1.3) translateY(-1.6rem)"};
}
`
