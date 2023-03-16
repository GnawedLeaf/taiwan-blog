import styled from "styled-components";

export const Container = styled.div`
font-size: 1rem;
color:black;
background: CadetBlue;
text-align: center;
font-family: "Jost";

`
export const CoverPictureContainer = styled.div`
height: 100vh;
width:100%;
background-image: url(${(props) => props.backgroundSrc});
background-color: #C6C6C6;
background-blend-mode: multiply;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-position-y: -30vh;

background-attachment: fixed;


color:white;
`
export const BigTitle = styled.div`
font-size: 69px;
`


export const Text = styled.div`
font-size: 1.1rem;
justify-content: center;

`