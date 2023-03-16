import styled from "styled-components";

export const NavLink = styled.a`
text-decoration: none;
font-size: 1.2rem;
color: white;
font-family: "Inter";

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

display: inline-flex;
justify-content: center;

`