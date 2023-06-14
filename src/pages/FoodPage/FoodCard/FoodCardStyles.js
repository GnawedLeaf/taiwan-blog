import styled from "styled-components";



export const FoodCardContainer = styled.div`
width: 23vw;
height:60vh;
border:1px solid black;
margin: 4rem 5rem;
background: #FFFAF1;
display:grid;
grid-template-rows: 0.6fr 0.6fr;
box-shadow: 10px 12px 13px -2px rgba(0,0,0,0.15);
transition-duration:0.4s;
color: #22223B;
opacity:0;
transform: translateY( 10%);
pointer-events: ${(props) => props.clicked ? "none" : "auto"} ;
animation: ${(props) => props.seen ? "1s FadeUp 0.1s forwards" : ""};
@keyframes FadeUp {
  
  to {
    opacity:1;
    transform: translateY(0%);
  }
}

&: hover{
  cursor: pointer;
  margin-top:2rem;
}
`

export const FoodPictureContainer = styled.div`
display:flex;
grid-row-start:1;
padding:0;
padding-bottom:0;
align-items: flex-end;
justify-content: center;
`

export const InformationContainer = styled.div`
grid-row-start: 2;
display:grid;
grid-template-columns:0.25fr 0.75fr;

`
export const FoodPicture = styled.img`
width:85%;
background-image: url(${(props) => props.src});
`

export const TransitionContainer = styled.div`
position: fixed;
top: 0;
left: 0;
height: 100vh;
width: 100vw;
background-color: rgba(0, 0, 0, 0.8);
display: flex;
justify-content: center;
align-items: center;
transition: all 0.3s ease-in-out;
z-index: 999;
visibility: ${({ clicked }) => (clicked ? 'visible' : 'hidden')};
opacity: ${({ clicked }) => (clicked ? 1 : 0)};
transition-duration: 0.4s;
`

export const TransitionImage = styled.img`
max-width: 100%;
max-height: 100%;
object-fit: contain;
`

export const CornerContainer = styled.div`
grid-column-start:2;
display:flex;
flex-direction: column;
align-items: flex-end;
justify-content: flex-end;
padding: 0 1.5vw 1.5vw 0;
`
export const ChineseFoodTitle = styled.div`
grid-column-start:1;
display:flex;
font-family: 'Noto Serif TC', serif;
font-size:1.5vw;
font-weight:600;
width:100%;
justify-content: center;
align-items: center;
border-right:1px solid #333333;
`
export const EngFoodTitle = styled.div`
font-size:1.4vw;
text-align: right;
width:80%;
`
export const Price = styled.div`
font-size:0.9vw;
margin-top:0.5rem;
`
export const Location = styled.div`
font-family: 'Noto Serif TC', serif;
font-size:1vw;
margin-top:0.5rem;
`