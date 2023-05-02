import styled from "styled-components";

export const LoadingContainer = styled.div`
font-size: 4rem;
font-family: "Outfit", sans-serif;
@media only screen and (max-width: 750px){
  font-size:2.5rem;
  margin-right:1.5rem;
}
`

export const DotsAnimation = styled.span`
margin-left:${props => props.marginLeft}rem;
animation: dots 1s ease ${(props) => props.delay}s infinite;
position:absolute;
@keyframes dots {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10rem);
  }
  100% {
    transform: translateY(0);
  }
}

`

export const Loading = styled.div`

@media only screen and (max-width: 750px){
  font-size:2.5rem;
  
}
`