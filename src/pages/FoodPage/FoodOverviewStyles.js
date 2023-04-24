import styled from "styled-components";


export const BigFoodContainer = styled.div`
width:100%;
font-family: 'Jost', sans-serif;
overflow:hidden;
`


export const VerticalFoodContainer = styled.div`
border: 0.3vw solid #333333;
width: calc((100% / ${(props) => props.arrayLength}));
font-size: 8vw;
color: #333333;
font-weight:bold;
font-family: 'Noto Serif TC', serif;
text-align:center;
background: #f5f5f5;
${(props) => props.index < 4 ? `z-index: ${5 - props.index}` : ""};
${(props) => props.index === 4 ? "animation 0.8s middle 1s forwards" : props.index < 4 ? `animation: 2s moveLeft ${(props.totalIndex - props.index) * 0.3 + 0.5}s forwards` : `animation: 2s moveRight ${props.index * 0.3 + 0.5}s forwards`};

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
`


export const VerticalFoodBigContainer = styled.div`
display:flex;
width:100%;
overflow:hidden;
height:100vh;
z-index:99;
position:absolute;
animation: 0.1s goAway 4s forwards;

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
`

export const FoodHeroTitle = styled.div`
font-size:10rem;

`
export const FoodListContainer = styled.div`
height:100vh;
`