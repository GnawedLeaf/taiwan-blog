import styled from "styled-components";

export const Container = styled.div`
color:black;
background:red;
  position: absolute;
  top: 50%;
  left: 50%;
animation: whackybox 5s linear 2s infinite alternate;
@keyframes whackybox {
    0%   {background-color:red; left:0px; top:0px;}
    25%  {background-color:yellow; left:50%; top:0px;180deg;}
    50%  {background-color:blue; left:50%; top:50%;rotate: }
    75%  {background-color:green; left:0px; top:50%;}
    100% {background-color:red; left:0px; top:0px; rotate: 360deg;}
  }

`
export const BigTitle = styled.div`
font-size: 69px;
`


export const Text = styled.div`
font-size: 16px;
justify-content: center;
`