import styled, { keyframes } from "styled-components";

export const Container = styled.div`
font-size: 1rem;
color:black;
text-align: center;
font-family: 'Outfit';
background: #140726;
margin:0;
`
export const CoverPictureContainer = styled.div`


background-image: url(${(props) => props.backgroundSrc});
background-color: #C6C6C6;
background-blend-mode: multiply;
background-position: top center;
background-size: cover;
background-repeat: no-repeat;
background-position-y: 30%;
background-attachment: fixed;
color:white;
font-family: 'Bebas Neue', cursive;


height: 100vh;
width:100%;
min-width: 100%;
min-height:100vh;
@media (prefers-color-scheme: not(light)) {
    background-color: white;
}


`
export const BigTitle = styled.div`
font-size: 6.5rem;


@media only screen and (max-width: 650px){
 font-size:4.3rem;
}
`


export const BigTitleSubText = styled.div`
font-size: 1.3rem;
justify-content: center;

@media only screen and (max-width: 650px){
    font-size: 1rem;
   }

`



export const CountdownContainer = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: nowrap;
flex-direction: row;
border: 0.8rem #FD3456 solid;
background: #140726;
padding: 1rem 1rem 2rem 1rem;
margin: 0 5rem 0 5rem;

@media only screen and (max-width: 650px){
    padding: 0.5rem 0rem 1rem 0rem;
    margin: 0 0 0 0;
    width: 90%;
    border: 0.3rem  solid;
}
`
export const CountdownSectionTitle = styled.div`
font-size: 2rem;
font-weight: bold;
margin-bottom:2rem;
text-align: center;

@media only screen and (max-width: 650px){
    font-size: 1.6rem;
    margin-bottom:1rem;
    margin-left: 0;
    text-align: center;
}
`


export const CountdownTitles = styled.div`
font-size: 7rem;
font-family: 'Archivo Black', sans-serif;

@media only screen and (max-width: 650px){
    font-size:2rem;
}

animation:  upanddown 1s linear 0s infinite backwards;


@keyframes upanddown {
    0%{
        transform: translateY(0px);
    }
    25%{

    }
    50% {
        transform: translateY(-2px);
    }
    75%{

    }
    100%{
        transform: translateY(0px);
    }
}

`

export const CountdownSubtitle = styled.div`
font-size:2rem;
@media only screen and (max-width: 650px){
    font-size:1rem;
}
`

export const Days = styled(CountdownTitles)`

`
export const Hours = styled(CountdownTitles)``
export const Minutes = styled(CountdownTitles)``
export const Seconds = styled(CountdownTitles)``

export const CountdownSection = styled.div`
color: #FD3456;
padding: 4rem 0 15rem 0;
margin: 5rem 0 5rem 0;


@media only screen and (max-width: 650px){
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    margin: 1rem 0 1rem 0;
}
`

export const TopDownLayoutContainer = styled.div`


`

export const AboutSection = styled.div`
color: #40798C;
display: flex;
justify-content: center;
margin: 10rem 0 10rem 0;
min-width: 100%;
height: 80vh;



@media only screen and (max-width: 650px){
    margin: 0;
    height: auto;
}
`

export const AboutText = styled.div`
color: #f5f5f5;
font-size: 3rem;
text-align: left;
margin: 10vh 0 10vh 0;
position: relative;
overflow: hidden;
white-space: nowrap;
border-right: .15em solid #140726;
animation: ${(props) => props.isVisible ? "typing" : ""} 2s steps(40, end) ${(props) => props.delay}s forwards,
${(props) => props.isVisible ? "blink-caret" : ""}
 2s ${(props) => props.delay}s step-end  forwards;
width: 0%;

@keyframes typing {
    from { width: 0%; color: #3AA84C; }
    to { width: 100%; color: #3AA84C; }
  }

@keyframes blink-caret {
    0% {border-color: #f5f5f5}
   90% {border-color: transparent}
   100%{border-color: transparent}
}
  

@media only screen and (max-width: 650px){
    font-size:1.5rem;
    white-space: normal;
    animation: ${(props) => props.isVisible ? "typing" : ""} 2s steps(40, end) ${(props) => props.delay}s forwards,
${(props) => props.isVisible ? "blink-caret" : ""}

@keyframes blink-caret {
    0% {border-color: #f5f5f5}
   90% {border-color: #140726}
}

`

export const AboutTextContainer = styled.div`
padding: 0 2rem 0 2rem;
`


export const QuickLinksSection = styled.div`
text-align:center;
color:white;
margin: 15rem 0 15rem 0;


@media only screen and (max-width: 650px){
    margin:5rem 0 5rem 0;
}
`



export const BlogLinkContainer = styled.div`
height:100vh;
padding: 0.5rem;
padding-bottom: 0;
margin: 10rem 0 10rem 0;



display: grid;
grid-gap: 0.5rem;
grid-template-columns:1fr repeat(50, 1em [col]) 1fr;
grid-template-rows: 1fr repeat(30, 1em [row]) 1fr;

@media only screen and (max-width: 900px){
    height:auto;
    grid-template-columns: 1fr repeat(50, 0.4em [col]) 1fr;
    grid-template-rows:1fr repeat(30, 0.2em [row]) 1fr;
    transform: rotate(90deg);
    margin-bottom:30rem;

    
}


`

export const BlogDecoBox = styled.div`
grid-column: ${(props) => props.colStart} /  ${(props) => props.colEnd};
grid-row: ${(props) => props.rowStart} /  ${(props) => props.rowEnd};
background: ${(props) => props.background};

animation: ${props => props.animationOn ? "ani2" : ""} 10s infinite ${props => props.delay}s;
@keyframes ani2 {
    0% {
        transform: scale(1);

    }
    20%{
        transform: scale(1);
        opacity:1;
    }
    50%{
        transform: scale(0);
        opacity: 0;
    }
    80%{
        transform: scale(1);
        opacity:1;
    }
    100%{
        transform: scale(1);
    }
}
`



export const BlogLink = styled.a`
color: ${props => props.color};
font-size: ${props => props.fontSize}rem;
text-decoration:none;
text-align: center;
font-weight:bold;
position: flex;

@media only screen and (max-width: 650px){
    font-size:${props => props.mobileFontSize}rem;
}

&:hover{
    animation: BlogLinkAnimation 5s infinite;
    @keyframes BlogLinkAnimation {
        0%{
            color: ${props => props.color};
        }
        25%{
            color: #FD3456 ;
        }
        50%{
            color: #F5FF63;
        }
        75%{
            color: #29A9FF;
        }
        100%{
            color: ${props => props.color};
        }
    }
}
`

export const BlogFlyingContainer = styled.div`
display: flex;
position: relative;
width: 100%;
overflow: hidden;
`
export const BigBlogContainer = styled.div`

`
export const BlogConveyorBelt = styled.div`
display: flex;
animation: scrollText2 20s infinite linear;
@keyframes scrollText2 {
    from  { transform: translateX(-50%);

     }
    to { transform: translateX(0%);

     }
  }


`

export const FlyingBlog = styled.div`
font-size:8rem;
text-decoration: none;
color: #f5f5f5;
font-family: "Prompt", sans-serif;
font-weight:700;

margin: 0 15rem 0 15rem;
transform: translate3d(0.16em,0 ,0);
transition-duration: 0.5s;
animation: FlyingBlogAni 8s infinite;
@keyframes FlyingBlogAni {
    40%{
        text-shadow: -1.8em 0 rgb(253,52,86,0.8),1.8em 0 rgb(245,255,99,0.8);
        color: rgb(41,169,255,1);
    }
    100%{
        text-shadow: 0em 0 rgb(253,52,86,0),0em 0 rgb(245,255,99,0);
        color: #f5f5f5;
    }
}

@media only screen and (max-width: 650px){
    font-size: 5rem;
}

`

export const FoodLinkContainer = styled.div`
margin: 3rem 0 3rem 0;
border: 0.8rem solid #29A9FF;
border-left: none;
border-right: none;

display: flex;
position: relative;
width: 100%;
height: 10rem;
overflow: hidden;

@media only screen and (max-width: 650px){

}
`

export const FoodLink = styled.span`
text-decoration: none;
color: #29A9FF;
font-size: 4rem;
margin: 0 1rem 0 1rem;
text-shadow: 0px 0px grey;


@media only screen and (max-width: 650px){
    font-size:3.8rem;
}
`

export const FoodLink2 = styled(FoodLink)`
color: ${(props) => props.color};
`

export const FoodConveyorBeltH1 = styled.h1`

`

export const FoodConveyorBeltContainer = styled.div`
display: flex;
position: absolute;
top: 0;
left: 0;
align-items: center;
justify-content: flex-start;
width: 100%;
height: 100%;
white-space: nowrap;
transform: scale(1.2);
transition: all 1s ease;
`

export const FoodConveyorBelt = styled.div`
display: flex;
animation: scrollText 20s  infinite linear;
@keyframes scrollText {
    from  { transform: translateX(0%); }
    to { transform: translateX(-50%); }
  }

  
`

export const FoodTitleContainer = styled.div`
margin: 5rem 0 5rem 0;


`
export const FoodTitle = styled.a`
font-size:8rem;
text-decoration: none;
color: #f5f5f5;
font-family: "Prompt", sans-serif;
font-weight:700;


position: relative;
display: inline-block;

transition: all 0.8s;
transition-timing-function: ease;
@keyframes ani{
    0%{
        transform: translate3d(0,0,0);
        text-shadow: 0em 0em 0 #29A9FF;
        color: white;
    }
    30%{
        transform: translate3d(0,0,0);
        text-shadow: 0em 0em 0 #29A9FF;
        color: white;
    }
    60%{
        transform: translate3d(0.16em,-0.16em,0);
        text-shadow: -0.08em 0.08em #29A9FF,;
        color: white;
    }
    100%{
        transform: translate3d(0.16em,-0.16em,0);
        text-shadow: -0.08em 0.08em #29A9FF, -0.16em 0.16em #AE29FF, -0.24em 0.24em #D95067;
        color: white;
    }
}

&:hover {

    transform: translate3d(0.16em,-0.16em,0);
    text-shadow: -0.08em 0.08em #29A9FF, -0.16em 0.16em #AE29FF, -0.24em 0.24em #D95067;
    color: white;

  }
@media only screen and (max-width: 650px){
    font-size:5rem;
    animation: ani  2s infinite alternate ;
}
`

