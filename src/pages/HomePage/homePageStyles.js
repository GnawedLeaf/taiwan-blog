import styled from "styled-components";

export const Container = styled.div`
font-size: 1rem;
color:black;
background: CadetBlue;
text-align: center;
font-family: "Jost";

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
font-size: 4.5rem;

@media only screen and (max-width: 650px){
 font-size:2.3rem;
}
`


export const Text = styled.div`
font-size: 1.6rem;
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