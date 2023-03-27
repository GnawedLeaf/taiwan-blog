import styled from "styled-components";




export const BigContainer = styled.div`
display:grid;
grid-template-rows:5rem 12rem 1fr 5rem;
width:100%;
height:300vh;
background: #F0EEDF;
font-family: ;
`

export const BlogMainContainer = styled.div`
grid-row:3;
display: flex;
justify-content: center;
border-top: 0.1rem #333333 solid;

`

export const BlogBigTitle = styled.div`
grid-row:2;
font-size:10rem;
font-weight:600;
font-family: 'Outfit', sans-serif;
color: #333333;
display:flex;
align-items: center;
justify-content: center;

@media only screen and (max-width: 650px){
    font-size:5rem;
    text-align:center;
}

`

export const BlogNavBar = styled.div`
grid-row:1;
width:100%;
border-bottom: 0.1rem solid #333333;
display:grid;
grid-template-columns:5rem 20rem 20rem 1fr;
grid-gap: 0.5rem;
font-family: 'Inter', sans-serif;
font-size:1.2rem;

@media only screen and (max-width: 650px){
    grid-template-columns:5rem 5rem 5rem 1fr;
    font-size:1rem;
}
`


export const Icon = styled.div`
grid-column:1;
border-right: 0.1rem #333333 solid;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-sixe:10rem;
`

export const Word1 = styled.div`
grid-column: 2;

display: flex;
justify-content: center;
align-items: center;


`
export const Word2 = styled(Word1)`
grid-column: 3;

`

export const Word3 = styled.div`
display: inline-flex;
align-items: center;
justify-content: flex-end;
margin-right:0.6rem;


`

export const CheckboxContainer = styled.a`

color: #333333;
display: inline-flex;
align-items: center;
margin: 0 1rem 0 1rem;

@media only screen and (max-width: 650px){
    margin: 0 0.2rem 0 0.2rem;
    display:none;
}
`

export const HamburgerMenu = styled.div`
grid-column: 4;

display:flex;
justify-content: flex-end;

@media only screen and (min-width: 650px){
display:none;
}

`
export const MobileMenuContainer = styled.div`
position:absolute;
background: #F0EEDF;

width:100%;
height: 100%;
transition-duration: 0.2s;
left: ${(props) => props.open ? "0%" : "100%"};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;



@media only screen and (max-width: 650px){
    font-size: ${(props) => props.open ? "1.2rem" : "0rem"};

    width: ${(props) => props.open ? "100%" : "0%"};
}



`

export const MobileMenuText = styled.a`
margin: 1rem 0 1rem 0;
text-decoration:none;
color: #333333;
`

export const Box = styled.div`
  position: relative;
  padding: 0;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #333333;
  margin-right:0.5rem;
`;

export const DiagonalLine = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  top: 50%;
  left: 0%;
  background-color: black;
`;

export const DiagonalLine1 = styled(DiagonalLine)`
  transform: rotate(45deg);
`;

export const DiagonalLine2 = styled(DiagonalLine)`
  transform: rotate(-45deg);
`;


export const BlogFooter = styled.div`
grid-row:4;
width:100%;
height:5rem;
border-top: 0.1rem solid #333333;

`