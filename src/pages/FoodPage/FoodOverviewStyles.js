import styled from "styled-components";


export const BigFoodContainer = styled.div`
width:100%;
font-family: 'Jost', sans-serif;
overflow:hidden;
`



export const FoodHeroSection = styled.div`
height:100vh;
display: flex;
align-items: center;
justify-content: center;
margin:0;
padding: 0;

background-image: url(${(props) => props.src});
background-color: #C6C6C6;
background-blend-mode: multiply;
background-position: top center;
background-size: cover;
background-repeat: no-repeat;
background-position-y: 50%;
background-attachment: fixed;

`

export const FoodHeroTitle = styled.div`
font-size:3rem;
font-weight:600;
font-family: 'Jost', sans-serif;
letter-spacing:0.2rem;
color:#f5f5f5;
@media only screen and (max-width: 650px){
    font-size:5rem;
    text-align:center;
}
`
export const FoodListContainer = styled.div`

display:flex;
padding:3rem;
align-items: center;
justify-content: center;
flex-wrap: wrap;
flex-direction: row;
`