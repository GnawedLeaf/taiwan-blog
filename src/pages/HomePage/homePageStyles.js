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
    25%  {background-color:yellow; left:200px; top:0px;}
    50%  {background-color:blue; left:200px; top:200px;rotate: 180deg;}
    75%  {background-color:green; left:0px; top:200px;}
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