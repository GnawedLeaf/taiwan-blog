import React, { useEffect } from "react";
import { NavbarItems } from "./NavbarItems";
import { NavLink, NavLinksContainer, NavbarContainer } from "./NavbarStyles";
import { BrowserRouter, Route, Link } from "react-router-dom";


const Navbar = () => {

    useEffect(() => {
        console.log(NavbarItems.length)
    }, [])
    return (
        <NavbarContainer>
            <NavLinksContainer gridCount={NavbarItems.length}>
                {NavbarItems.map((item, index) => {
                    return (
                        <div key={index}>
                            <NavLink href={item.url}>{item.title}</NavLink>
                        </div>
                    )
                })}
            </NavLinksContainer>
        </NavbarContainer>
    )
}

export default Navbar