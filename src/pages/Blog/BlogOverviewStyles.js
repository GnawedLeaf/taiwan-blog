import styled from "styled-components";




export const BigContainer = styled.div`
display:grid;
grid-template-rows:5rem 12rem 1fr 5rem;
width:100%;
height:300vh;
background: #f5f5f5;
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


export const Icon = styled.a`
grid-column:1;
text-decoration: none;
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
text-decoration: none;

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


transition-duration: 0.3s;
height:30vh;
position:absolute;
background: #f5f5f5;
width:100vw;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 5rem 0 5rem 0;
border-bottom: 0.1rem solid #333333;
border-left: 0.1rem solid #333333;

left: ${(props) => props.open ? "0%" : "100%"};



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

export const DailyBlogCardsContainer = styled.div`

`

export const DailyBlogImg = styled.img`
width: 100px;
height: auto;
`


export const CalenderContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
}
`

export const Calender = styled.div`

height:30rem;
display: flex;
flex-wrap: wrap;
width: 100%;
max-width: 700px;
margin-top:1rem;

@media only screen and (max-width: 650px){
  height:20rem;
  width:85%;
  height:13rem;
  margin: 1rem 0.5rem 0rem 0.5rem;
}
`

export const CalenderDay = styled.div`
width: calc(100% / 7);
box-sizing: border-box;
border:1px #333333 solid;
// background: ${(props) => props.hasBlog ? "green" : ""};
height:calc(100% / ${(props) => props.feb ? 4 : 5});
display: flex;
justify-content: center;
align-items: center;


&:hover {
  cursor: ${(props) => props.hasBlog ? "pointer" : "default"};
}

`

export const CalenderDayLabel = styled.div`
font-family: "Rubik",sans-serif;
font-weight:600;
z-index:99;

`
export const CalenderDayTitle = styled.div`
white-space: pre-line;
font-size:0.8rem;
color: #f5f5f5;
font-family:"Rubik",sans-serif;
width:100%
padding-left: 0.2rem;
padding-right: 0.2rem;
min-height: fit-content;
text-align: center;
display:none;

`

export const Carousel = styled.div`
overflow: hidden;
box-sizing: border-box;
width: calc((100% / 7) - 2px);
height: calc((100% / ${(props) => props.feb ? 4 : 5}) - 2px);

display: flex;
justify-content: center;
align-items: center;
background: $f5f5f5;
outline:0.1rem solid ${(props) => props.hasBlog ? "#22223B" : "f5f5f5"};
color: #22223B;
transition-duration: 0.3s;
font-size:1.2rem;
margin:1px;


&:hover {
  cursor: ${(props) => props.hasBlog ? "pointer" : "default"};
  background: ${(props) => props.hasBlog ? "#22223B" : ""};
  color: ${(props) => props.hasBlog ? "#f5f5f5" : ""};
  transform: scale(${(props) => props.hasBlog ? "1.2" : "1"});
  ${CalenderDayTitle}{
    transition-duration: 0.3s;
    display: ${(props) => props.hasBlog ? "block" : "none"};
  }
  ${CalenderDayLabel} {
    transition-duration: 0.3s;
    display: ${(props) => props.hasBlog ? "none" : ""};
  }

  
}

@media only screen and (max-width: 650px){
  font-size:1rem;
}

`;



export const Inner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`;

export const CarouselItem = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  display: inline-flex;
  justify-content:center;
`;

export const CarouselTitleHolder = styled.div`
word-wrap: break-word;
white-space: normal;
color: #22223B;
`

export const CalenderMonthHeader = styled.div`
font-family: "Outfit",sans-serif;
font-size:8rem;
font-weight:600;
color:#22223B;
margin-top:2.5rem;

@media only screen and (max-width: 650px){
  font-size:4rem;
}

`