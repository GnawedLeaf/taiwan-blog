import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Caveat', cursive;

}

@keyframes example {
    from {background-color: red;}
    to {background-color: yellow;}
  }
`

export const CentralisingContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: auto;
width: auto;
flex-direction: column;
`