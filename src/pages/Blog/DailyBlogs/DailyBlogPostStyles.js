import styled from "styled-components";
export const BigContainer = styled.div`
background:#ffffff;
width:100%;
height:100vh;
display:flex;
justify-content: center;
align-items: center;
font-family: 'Quicksand', sans-serif;
font-weight: 500;
transition-duration: 0.2s;

`
export const StartPostContainer = styled.div`
width:70%;
height:80%;
box-shadow: 10px 12px 13px -2px rgba(0,0,0,0.15);
position:absolute;
opacity: ${props => props.opacity};
z-index: ${props => props.zIndex};
transform-origin: left;
background: #f5f5f5;
transition: all 0.7s ease, opacity 0.4s ease;
transform: translate(${props => props.translateX},${props => props.translateY});
display:flex;
justify-content: center;
align-items: center;


@media only screen and (max-width: 750px){
  width:20rem;
  height:35rem;
  grid-template-rows: 5rem 0.5fr 0.5fr 2rem;
  grid-template-columns: 1fr;
  }
  
`
export const StartPostImage = styled.img`
width: 55%;
filter: brightness(55%);
background: rgba(75, 75, 75, 0.51);
@media only screen and (max-width: 750px){
  width:16rem;
}


`
export const StartPostTitle = styled.div`
color: ${props => props.imageExists ? "#f5f5f5" : "#22223B"} ;
position: absolute;
font-size:1.8rem;
font-weight: 400;
@media only screen and (max-width: 750px){
  font-size:1.3rem;
  font-weight: ${props => props.imageExists ? "300" : "400"} ;
}

`
export const StartPostDate = styled.div`
font-size:1rem;
position: absolute;
color: ${props => props.imageExists ? "#f5f5f5" : "#22223B"} ;
margin-top:4rem;
@media only screen and (max-width: 750px){
  font-size:0.5rem;
  font-weight: ${props => props.imageExists ? "300" : "400"} ;
  margin-top:3rem;
}

`
export const StartPostChineseLabel = styled.div`
font-size:1.3rem;
right: 10%;
top: 10%;
position:fixed;
@media only screen and (max-width: 750px){
  font-size:1rem;
}

`

export const EndPostContainer = styled(StartPostContainer)`


`
export const EndPostText = styled.div`
position: absolute;

width:65%;
text-align: center;
@media only screen and (max-width: 750px){
  text-align: justify;
}

`

export const EndPostPageNum = styled.div`
position:absolute;
bottom:10%;
`


export const PostContainer = styled.div`

width:70%;
height:80%;
box-shadow: 10px 12px 13px -2px rgba(0,0,0,0.15);
background: #f5f5f5;
display: grid;
grid-template-columns: 20% 1fr;
position:absolute;
opacity: ${props => props.opacity};
z-index: ${props => props.zIndex};
transform-origin: left;

transition: all 0.7s ease, opacity 0.4s ease;
transform: translate(${props => props.translateX},${props => props.translateY});


@media only screen and (max-width: 750px){
width:20rem;
height:35rem;
grid-template-rows: 5rem 0.5fr 0.5fr 2rem;
grid-template-columns: 1fr;
}
`
export const ImageContainer = styled.div`
grid-row-start: 2;
display: flex;
justify-content: center;
align-items: center;

`

export const Image = styled.img`
width: 60%;

  transition: 0.3s ease-in-out;
  
  &:hover {
    //cursor: pointer;
   transform: scale(1.05)
  }
`
export const Content = styled.div`
width:70%;
height:5rem;
white-space: pre-line;
overflow-y: auto;

@media only screen and (max-width: 750px){
  width:100%;
}
`

export const ContentContainer = styled.div`
grid-row-start: 3;
text-align: justify;
text-justify: inter-word;
padding: 0 5rem;
display: flex;
justify-content: center;
align-items: center;
transition-duration: 1s;

@media only screen and (max-width: 1200px){
  padding: 0;
  
}
@media only screen and (max-width: 750px){
  font-size:1rem;
  padding: 0 2rem;
}
`

export const MainPostContainer = styled.div`
grid-column-start: 2;
display:grid;
grid-template-rows: 15% 0.66fr 0.33fr 5%;

@media only screen and (max-width: 750px){
  grid-template-rows: 5rem 1fr 1fr 2rem;
  
}
`

export const PageNumber = styled.div`
grid-row-start: 4;
display: flex;
justify-content: flex-end;
align-items: center;
padding-right: 2rem;
padding-bottom: 2rem;
`

export const DateLabel = styled.div`
grid-row-start: 1;
letter-spacing: 1px;
font-size:0.8rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 2rem;
    text-align:right;
`

export const TitleAndLocationContainer = styled.div`
grid-column-start: 1;
border-right: 0.1rem solid #B7B7B7;
display: grid;
grid-template-rows: 15% 1fr 15%;
@media only screen and (max-width: 750px){
  grid-template-rows: 10rem 1fr;
  border-right: none;
}
`

export const LocationContainer = styled.div`
grid-row-start: 2;
font-family: "Inter",sans-serif;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 750px){

}
`
export const Location = styled.div`

font-size:1.3rem;
`

export const Title = styled.div`
grid-row-start: 1;
display: flex;
justify-content: center;
align-items: center;
letter-spacing: 1px;
text-align:center;
padding: 0rem 0.5rem 0 0.5rem;


@media only screen and (max-width: 750px){
  padding: 0;
  font-size: 0.8rem;
}
`



export const Loading = styled.div`

@media only screen and (max-width: 750px){
  font-size:2.5rem;
  
}
`

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

export const BackButton = styled.button`
positon:abosolute;
z-index:999;

`

export const MobileTitleAndDateContainer = styled.div`
grid-row-start:1;
display:grid;
grid-template-columns: 0.5fr 0.5fr;
`

export const MobileTitle = styled.div`
grid-column-start: 1;
display: flex;
justify-content: center;
align-items: center;
letter-spacing: 1px;
text-align:center;
padding: 0rem 0.5rem 0 0.5rem;
font-size:0.7rem;
`

export const MobileDate = styled.div`
grid-column-start: 2;
display: flex;
justify-content: center;
align-items: center;
letter-spacing: 1px;
text-align:center;
padding: 0rem 0rem 0 0.5rem;
text-align:right;
font-size:0.7rem;
`

export const MobileImageContainer = styled.div`
grid-row-start:2;
display: flex;
justify-content: center;
align-items: center;

`

export const MobileImage = styled.img`
width: 85%;
`

export const MobileLocationAndContentContainer = styled.div`
grid-row-start:3;
display:grid;
grid-template-columns: 0.33fr 0.66fr;

`

export const MobileLocation = styled.div`
grid-column-start: 1;

display: flex;
justify-content: center;
align-items: center;
`

export const MobileContent = styled.div`
grid-column-start: 2;
display: flex;
justify-content: center;
align-items: center;
text-align: justify;
font-size:0.8rem;
padding: 2rem 1.5rem 2rem 0rem;
height: 9rem;
white-space: pre-line;
overflow-y: auto;


`

export const MobilePageNum = styled.div`
display: flex;
justify-content: flex-end;
padding-right:1.2rem;
`

