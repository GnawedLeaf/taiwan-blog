import styled from "styled-components";




export const BigContainer = styled.div`
font-family: 'Jost', sans-serif;
width:100%;
background:#FFFAF1;
overflow-x:hidden;
`

export const BlogMainContainer = styled.div`

display: flex;
justify-content: center;

`




export const BlogFooter = styled.div`
grid-row:4;
width:100%;
height:5rem;
border-top: 0.1rem solid #22223B;
background:lime;
`

export const DailyBlogCardsContainer = styled.div`

`

export const DailyBlogImg = styled.img`
width: 100px;
height: auto;
`


export const BigCalenderContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
height:100vh;
margin-top: 10vh;
`

export const CalenderContainer = styled.div`
padding:2%;
text-align:center;
transition-duration: 0.3s;
margin-top: 10vh;
display: flex;
flex-direction: column;
align-items: center;
`

export const Calender = styled.div`

height:30em;
display: flex;
flex-wrap: wrap;
width: 100%;
max-width: 43.75rem;
margin-top:1rem;

@media only screen and (max-width: 650px){
  height:20rem;
  width:85%;
  height:13rem;
  margin-top:1rem;
}
`

export const CalenderDay = styled.div`
width: calc(100% / 7);
box-sizing: border-box;
border:1px #22223B solid;
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
padding:1rem;


&:hover {
  cursor: ${(props) => props.hasBlog ? "pointer" : "default"};
  background: ${(props) => props.hasBlog ? "#22223B" : ""};
  color: ${(props) => props.hasBlog ? "#f5f5f5" : ""};
  outline:0.1rem solid ${(props) => props.hasBlog ? "#22223B" : "f5f5f5"};
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
font-size:5rem;
font-weight:600;
color:#22223B;

@media only screen and (max-width: 650px){
  font-size:4rem;
}

`
export const BlogTransitionPlaceholder = styled.div`
width:100%;
height:100vh;
color:transparent;
font-size:3rem;
font-weight:600;
font-family: 'Jost', sans-serif;
letter-spacing:0.2rem;
z-index:1;
display:flex;
justify-content: center;
align-items: center;

background-image: url(${(props) => props.src});
background-color: #C6C6C6;
background-blend-mode: multiply;
background-position: top center;
background-size: cover;
background-repeat: no-repeat;
background-position-y: 30%;
background-attachment: fixed;


animation: 0.5s textAppear 2.3s  forwards;

@keyframes textAppear {
  to{
    color:#f5f5f5;
  }
}
`

export const BlogTransitionContainer = styled.div`
position:absolute;
width: 100%;
height:100vh;
z-index:2;
background:transparent;


display:flex;
align-items: center;
justify-content: center;
flex-direction: column;



@media only screen and (max-width: 650px){
    font-size:5rem;
    text-align:center;
}

//animation: 0.5s blogTrans 1.8s ease-in-out forwards;
@keyframes blogTrans {

  100%{
    transform: translateX(-100%);
    visibility: hidden;
  }
}
`


export const TransitionText = styled.div`
color: #333333;
background:#FFFAF1;
font-family: 'Noto Serif TC', serif;
font-weight: bold;
//font-size: ${(props) => props.mobileMode ? 15 - props.middleIndex + 2 / 2 : 10 - props.middleIndex}vw;
font-size: 7vw;
margin: 1vw 0vw;

display: flex;
align-items: center;
justify-content: center;

border:0.5vw solid #333333;
border-right:none;
// height: calc(100%/${(props) => props.length});

width:100%;
text-align:center;


// animation: 0.7s textLeft 1s ease-in-out forwards;

@keyframes textLeft {

  to {
    transform: translateX(100%);
    visibility: hidden;
  }
}


`