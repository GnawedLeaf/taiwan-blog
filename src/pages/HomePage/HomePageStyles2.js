import styled, { keyframes } from "styled-components";

export const Container = styled.div`
font-size: 1rem;
color:black;
text-align: center;
font-family: 'Jost', sans-serif;
background: #f5f5f5;
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
font-family: 'Jost', sans-serif;


height: 100vh;
width:100%;
min-width: 100%;
min-height:100vh;
@media (prefers-color-scheme: not(light)) {
    background-color: white;
}
`

export const CoverPictureTitlesContainer = styled.div`
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`
export const BigTitle = styled.div`
font-size: 3rem;
@media only screen and (max-width: 650px){
 font-size:2.5rem;
}
`


export const BigTitleSubText = styled.div`
font-size: 1rem;
justify-content: center;

@media only screen and (max-width: 650px){
    font-size: 1.5rem;
   }
`

export const AboutSection = styled.div`
padding: 0 5rem 0 5rem;
margin: 10rem 0 10rem 0;
    display: flex;
        flex-direction: column;
        align-items: center


`

export const AboutText = styled.div`
font-size: 1.3rem;
width:50%;
margin-top:5rem;
text-align:left;
color: #4A4E69;
@media only screen and (max-width: 650px){
    width:100%;
    text-align:left;
}
`












export const LinksSectionContainer = styled.div`
margin:10rem 0 10rem 0;
`

export const LinkRowContainer = styled.div`
margin-top: 5rem;
padding: 0 5rem 0 5rem;
display:inline-flex;
@media only screen and (max-width: 650px){
    display:flex;
    flex-direction: column;
    padding: 0 1rem 0 1rem;
    margin:0;
    align-items: center;
}
`

export const BlogsLinksContainer = styled.a`
border: 0.20rem #4A4E69 solid;
margin:0 5rem 0 5rem;
padding: 1rem 6rem 2rem 6rem;
text-decoration: none;
color: #4A4E69;
transition-duration: 0.3s;
&:hover{
    background: #84A59D;
    color: #f5f5f5;
    transform: scale(1.2);
    border-color: #84A59D;
    
}

@media only screen and (max-width: 650px){
    padding:0.35rem 0.1rem 0.5rem 0.1rem;
    width:80%;
    margin:0;
    margin-top:3rem;
    border: 0.13rem #4A4E69 solid;


}
`

export const FoodLinksContainer = styled(BlogsLinksContainer)`
color: #4A4E69;
border-color: #4A4E69;

&:hover{
    background: #F28482;
    border-color: #F28482;
    
}
`

export const AboutLinkContainer = styled(BlogsLinksContainer)`
color: #4A4E69;
border-color: #4A4E69;

&:hover{
    background: #E5B15A;
    border-color: #E5B15A;
}
`

export const DumpLinkContainer = styled(BlogsLinksContainer)`
color: #4A4E69;
border-color: #4A4E69;

&:hover{
    background: #DBB7B1;
    border-color: #DBB7B1;
}
`

export const LinkTitle = styled.div`
font-size:5rem;
font-weight:bold;

@media only screen and (max-width: 650px){
    font-size:2rem;
}
`

export const LinkSubtitle = styled.div`
@media only screen
`












export const CountdownContainer = styled.fieldset`
display: flex;
justify-content: space-evenly;
flex-wrap: nowrap;
flex-direction: row;
border: 0.2rem #4A4E69 solid;
color: #4A4E69;
padding: 1rem 1rem 2rem 1rem;
margin: 5rem 5rem 5rem 5rem;
width:70%;


@media only screen and (max-width: 650px){
    padding: 0.5rem 0rem 1rem 0rem;
    margin: 0 0 0 0;
    width: 80%;
    border: 0.2rem solid;
    border-right: none;
    border-left: none;
    border-bottom: none;
    margin: 1rem 5rem 5rem 5rem;
}
`
export const CountdownSectionTitle = styled.legend`
font-size: 1.3rem;
padding: 0 1rem 0 1rem;
text-align: center;

@media only screen and (max-width: 650px){
    font-size: 1.6rem;
    margin-bottom:1rem;
    margin-left: 0;
    text-align: center;
}
`


export const CountdownTitles = styled.div`
font-size: 3.3rem;
font-family: 'Archivo Black', sans-serif;

@media only screen and (max-width: 650px){
    font-size:2rem;
}


`

export const CountdownSubtitle = styled.div`
font-size:1.3rem;
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
padding: 0;
padding: 4rem 0 1rem 0;
margin: 10rem 0 10rem 0;
display:flex;

justify-content: center;



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

export const ToggleContainer = styled.div`

`

