import styled, { keyframes } from "styled-components";

export const Container = styled.div`
font-size: 1rem;
color:black;
text-align: center;
font-family: 'Outfit';

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


export const LatestBlogContainer = styled.div`
height: 90vh;
background: ;
color: white;
`
export const LatestBlogBigTitle = styled.div`
font-size: 5.5rem;

@media only screen and (max-width: 650px){
    font-size:2.3rem;
   }
`

export const CountdownContainer = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: nowrap;
flex-direction: row;
border: 0.8rem #FF5E79 solid;
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
    font-size: 2rem;
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

animation:  0.5s linear 0s infinite backwards;


@keyframes upanddown {
    0%{
        transform: translateY(0px);
    }
    25%{

    }
    50% {
        transform: translateY(-10px);
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
color: #FF5E79;
padding: 4rem 0 4rem 0;
margin: 5rem 0 5rem 0;


@media only screen and (max-width: 650px){
        display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
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
   90% {border-color: #140726}
}
  

@media only screen and (max-width: 650px){
    font-size:1.5rem;
    white-space: normal;
}


`

export const AboutTextContainer = styled.div`

padding: 0 2rem 0 2rem;
`


export const QuickLinksSection = styled.div`
text-align:center;
color:white;
margin: 15rem 0 15rem 0;
`



export const BlogLinkContainer = styled.div`

padding-bottom: 1rem;
border-left: none;
border-right: none;
background: rgb(243,183,0);
background: linear-gradient(30deg, rgba(243,183,0,1) 3%, rgba(253,131,1,1) 51%, rgba(246,62,2,1) 79%);
background-size: 1000% 1000%;
animation: AnimationName 5s ease infinite;
@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}

`

export const BlogLink = styled.a`
color: #f5f5f5;
font-size: 6rem;
margin: 0 1rem 0 1rem;
text-decoration:none;

@media only screen and (max-width: 650px){
    font-size:7.5rem;
}


`
export const ConveyorBelt = styled.div`
white-space: no-wrap;
display: inline-flex;
overflow: hidden;
overflow-x:auto;
animation: slider 30s  ease-out infinite;
@keyframes slider {
    0%{
        transform: translateX(0px);

    }
    50%{
        transform: translateX(-700px);
    }
    100% {
        transform: translateX(-0px);
        
    }
}
@media only screen and (max-width: 650px){
    white-space: normal;

    overflow: hidden;
    
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
height: 15rem;
overflow: hidden;
`

export const FoodLink = styled.a`
text-decoration: none;
color: #29A9FF;
font-size: 5rem;
margin: 0 1rem 0 1rem;
text-shadow: 0px 0px grey;


@media only screen and (max-width: 650px){
    font-size:7.5rem;
}




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
    from   { transform: translateX(0%); }
    to { transform: translateX(-50%); }
  }

  
`

export const FoodTitleContainer = styled.div`
`
export const FoodTitle = styled.h1`
font-size:8rem;
&:hover {
    transition-duration: 0.3s;
  }
`

