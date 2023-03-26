import React, { useEffect } from "react";
import { NavbarItems } from "./NavbarItems";
import { NavLink, NavLinksContainer, NavbarContainer } from "./NavbarStyles";
import { BrowserRouter, Route, Link } from "react-router-dom";


const Navbar = (props) => {

    useEffect(() => {
        console.log(NavbarItems.length)
    }, [])

    return (
        <NavbarContainer borderColor={props.borderColor} backgroundColor={props.backgroundColor} colorChange={props.colorChange}>
            <NavLinksContainer gridCount={NavbarItems.length}>
                {NavbarItems.map((item, index) => {
                    return (
                        <div key={index}>
                            <NavLink linkColor={props.linkColor} colorChange={props.colorChange} href={item.url}>{item.title}</NavLink>
                        </div>
                    )
                })}
            </NavLinksContainer>
        </NavbarContainer>

    )
}

export default Navbar