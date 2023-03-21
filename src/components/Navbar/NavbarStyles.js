import styled from "styled-components";

export const NavLink = styled.a`
text-decoration: none;
font-size: 1.2rem;
color: ${(props) => props.colorChange ? "#f5f5f5" : "#f5f5f5"};
font-family: "Lato";
margin: 0 0.5rem 0 0.5rem;
transition-duration: 0.5s;


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
background: ${(props) => props.colorChange ? "#140726" : "transparent"};
border-bottom:  ${(props) => props.colorChange ? "none" : "none"};
display: inline-flex;
justify-content: center;
transition-duration: 0.5s;

`

