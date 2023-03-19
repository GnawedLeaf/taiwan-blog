import styled from "styled-components";

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
font-family: 'Jost';

@media only screen and (max-width: 650px){
 font-size:4.3rem;
}
`


export const BigTitleSubText = styled.div`
font-size: 1.3rem;
justify-content: center;
font-family: 'Jost';
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
border: 4px #87b5a2 solid;
padding: 1rem 1rem 2rem 1rem;
margin: 0 5rem 0 5rem;

@media only screen and (max-width: 650px){
    padding: 0.5rem 0rem 1rem 0rem;
    margin: 0rem 0 1rem 0;
    width: 90%;
}
`
export const CountdownSectionTitle = styled.div`
font-size: 5rem;
font-weight: bold;
margin-bottom:2rem;


@media only screen and (max-width: 650px){
    font-size: 2rem;
    margin-bottom:1rem;
}
`


export const CountdownTitles = styled.div`
font-size: 80px;
font-family: 'Archivo Black', sans-serif;

@media only screen and (max-width: 650px){
    font-size:2.5rem;
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

export const Days = styled(CountdownTitles)`

`
export const Hours = styled(CountdownTitles)``
export const Minutes = styled(CountdownTitles)``
export const Seconds = styled(CountdownTitles)``

export const CountdownSection = styled.div`
color: #70a9a1;
padding: 4rem 0 4rem 0;
background: #f5f5f5;


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


@media only screen and (max-width: 650px){
    margin: 0;
}
`

export const AboutText = styled.div`
font-size: 3rem;
text-align: left;
margin: 5vh 0 5vh 0;
opacity: ${(props) => props.isVisible ? "1" : "0"};
transition-duration: 2s;
transition-property: opacity;
@media only screen and (max-width: 650px){
    font-size:2rem;
}


`

export const AboutTextContainer = styled.div`

padding: 0 2rem 0 2rem;
`