import styled from "styled-components";




export const BigContainer = styled.div`

width:100%;
background: #f5f5f5;
font-family: ;
`

export const BlogMainContainer = styled.div`

display: flex;
justify-content: center;

`

export const BlogBigTitle = styled.div`

font-size:3rem;
font-weight:600;
font-family: 'Jost', sans-serif;
color: #22223B;
display:flex;
align-items: center;
justify-content: center;
height:100vh;
@media only screen and (max-width: 650px){
    font-size:5rem;
    text-align:center;
}

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
margin-top: 70vh;
`

export const CalenderContainer = styled.div`
padding:2%;
text-align:center;
transition-duration: 0.3s;
margin-top: 10vh;
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
  margin: 1rem 0.5rem 0rem 0.5rem;
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