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

@media only screen and (max-width: 650px){
    display:none;
}

`

export const NavbarContainer = styled.div`
position: fixed;
width: 100%;
padding: 1.1rem;
z-index:99;
background: ${(props) => props.colorChange ? props.backgroundColor : "transparent"};
display: ${(props) => props.colorChange ? "" : "none"};
transition-duration: 0.3s;
border-bottom:  ${(props) => props.colorChange ? props.borderColor : "none"} 0.05rem solid;
display: inline-flex;
justify-content: center;
transition-duration: 0.5s;

@media only screen and (max-width: 650px){
    padding: 0.5rem;
}

`
export const MobileNavBarContainer = styled.div`
display:grid;
width:100%;
grid-template-columns: 30% 1fr 30%;
display: ${(props) => props.colorChange ? "" : "none"};
transition-duration: 0.3s;

@media only screen and (min-width: 650px){
    display:none;
}

`
export const MobileIconContainer = styled.a`
text-decoration: none;
grid-column-start: 2;

display: flex;
align-items: center;
justify-content: center;
font-size:2rem;
`
export const HamburgerContainer = styled.div`
grid-column-start: 3;
display: flex;
justify-content: center;
z-index:99;

`

export const MobileMenuText = styled.a`
text-decoration: none;
margin: 1rem 0 1rem 0;
text-decoration:none;
color: #333333;
`

export const MobileMenuContainer = styled.div`
transition-duration: 0.3s;
height:30vh;
position:absolute;
background: #f5f5f5;
width:100vw;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 5rem 0 5rem 0;
border-bottom: 0.1rem solid #333333;
left: ${(props) => props.open ? "0%" : "100%"};
`
