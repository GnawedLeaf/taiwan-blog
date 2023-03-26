import styled from "styled-components";

export const NavLink = styled.a`
text-decoration: none;
font-size: 1.2rem;
color: ${(props) => props.colorChange ? props.linkColor : "#f5f5f5"};
font-family: "Lato";
margin: 0 0.5rem 0 0.5rem;
display: ${(props) => props.colorChange ? "" : "none"};
transition-duration: 0.3s;


`
export const NavLinksContainer = styled.div`
display: grid;
grid-template-columns: repeat(${(props) => props.gridCount}, auto);
text-align: center;
width: 50%;

`

export const NavbarContainer = styled.div`
position: fixed;
width: 100%;
padding: 1.1rem;
z-index:99;
background: ${(props) => props.colorChange ? props.backgroundColor : "transparent"};
display: ${(props) => props.colorChange ? "" : "none"};
transition-duration: 0.3s;
border-bottom:  ${(props) => props.colorChange ? props.borderColor : "none"} 0.1rem solid;
display: inline-flex;
justify-content: center;
transition-duration: 0.5s;

`

