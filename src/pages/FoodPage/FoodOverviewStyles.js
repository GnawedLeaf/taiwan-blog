import styled from "styled-components";


export const BigFoodContainer = styled.div`
width:100%;
font-family: 'Jost', sans-serif;
overflow:hidden;
`


export const VerticalFoodContainer = styled.div`
font-weight: bold;
font-family: 'Noto Serif TC', serif;
text-align:center;
background: #f5f5f5;

border: 0.3vw solid #333333;
border-left: ${(props) => props.mobileMode ? "0.3vw solid #333333" : props.index === 0 ? "0.6vw solid #333333" : "0.3vw solid #333333"};
border-right: ${(props) => props.mobileMode ? "0.3vw solid #333333" : props.index === props.totalIndex ? "0.6vw solid #333333" : "0.3vw solid #333333"};
border-top: ${(props) => props.mobileMode ? props.index === 0 ? "2vw solid #333333" : "1vw solid #333333" : ""};
border-bottom: ${(props) => props.mobileMode ? props.index === props.totalIndex ? "2vw solid #333333" : "1vw solid #333333" : ""};

width: ${(props) => props.mobileMode ? `100%` : `calc((100% / ${props.arrayLength}))`} ;
height: ${(props) => props.mobileMode ? `calc((100% / ${props.arrayLength}))` : `100%`};
font-size: ${(props) => props.mobileMode ? 15 - props.middleIndex + 2 / 2 : 10 - props.middleIndex + 2 / 2}vw;
color: ${(props) => props.index === props.middleIndex ? "#FF3F3C" : "#333333"};
${(props) => props.mobileMode ? "display: flex; align-items: center; justify-content: center;" : ""};


${(props) => props.index < props.middleIndex ? `z-index: ${2 - props.index}` : ""};
${(props) => props.index === props.middleIndex ? `animation 0.8s ${props.mobileMode ? "mobileMiddle" : "middle"} 0.5s forwards` : props.index < props.middleIndex ? `animation: 2s ${props.mobileMode ? props.shutterMode === "spiral" ? "moveLeft" : "mobileMoveUp" : props.shutterMode === "vertical" ? "middle" : "moveLeft"} ${(props.middleIndex - props.index) * 0.2 + 1.1}s forwards` : `animation: 2s ${props.mobileMode ? props.shutterMode === "spiral" ? "moveRight" : "mobileMoveDown" : props.shutterMode === "vertical" ? "middle" : "moveRight"} ${(props.index - props.middleIndex) * 0.2 + 1.1}s forwards`};



@keyframes middle {
    to{
        transform:translateY(-100%);
        display:none;
    }
}

@keyframes moveLeft{
    100% {
        transform:translateX(-${(props) => props.index * 100}%);
        display:none;
    }
}

@keyframes moveRight{
    100% {
        transform:translateX(${(props) => props.index * 100}%);
        display:none;
    }
}


@keyframes mobileMiddle {
  to{
      transform:translateX(100%);
      display:none;
  }
}

@keyframes mobileMoveUp{
  100% {
      transform:translateY(-${(props) => props.index * 100}%);
      display:none;
  }
}

@keyframes mobileMoveDown{
  100% {
      transform:translateY(${(props) => props.index * 100}%);
      display:none;
  }
}
`


export const VerticalFoodBigContainer = styled.div`
display:flex;
width:100%;
max-width:100%;
overflow:hidden;
height:100vh;
z-index:99;
position:absolute;
flex-direction: ${(props) => props.mobileMode ? "column" : "row"};


@keyframes goAway {
    from {
        opacity: 1;
      }
      to {
        opacity: 0;
        display: none;
      }
}
`
export const FoodHeroSection = styled.div`
height:100vh;
display: flex;
align-items: center;
justify-content: center;
margin:0;
padding: 0;
`

export const FoodHeroTitle = styled.div`
font-size:10rem;
font-size:3rem;
font-weight:600;
font-family: 'Jost', sans-serif;
letter-spacing:0.2rem;
@media only screen and (max-width: 650px){
    font-size:5rem;
    text-align:center;
}
`
export const FoodListContainer = styled.div`
height:100vh;
`