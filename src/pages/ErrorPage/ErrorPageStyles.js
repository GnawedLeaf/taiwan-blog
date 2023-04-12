import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height:100vh;
font-family: "Jost",sans-serif;
background: #f5f5f5;
@media only screen and (min-width: 650px){
    position:absolute;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
}
`

export const BigText = styled.div`

color: #F28482;
font-size: 4rem;
text-align:center;
@media only screen and (min-width: 650px){
    font-size: 10rem;
    font-weight:bold;
}
`

export const Button = styled.button`
color:#22223B;
font-family: "Jost",sans-serif;
cursor: pointer;
margin-top:2rem;
width:20rem;
height:auto;
padding:1rem;

font-size:1.4rem;
border:0.1rem solid #22223B;

&:hover{
    transition: all 0.5s ease-out;
    color: #f5f5f5;
    background: #22223B;

}

@media only screen and (max-width: 650px){
    font-size:1.3rem;
    width:55%;
    padding:0.5rem;
}
`
