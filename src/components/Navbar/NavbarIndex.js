import React, { useEffect, useState } from "react";
import { NavbarItems } from "./NavbarItems";
import { NavLink, NavLinksContainer, NavbarContainer, MobileNavBarContainer, MobileIconContainer, HamburgerContainer, MobileMenuContainer, MobileMenuText } from "./NavbarStyles";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react'



const Navbar = (props) => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    useEffect(() => {
        console.log(NavbarItems.length)
    }, [])

    const handleBurgerClick = () => {
        setHamburgerOpen(!hamburgerOpen)
        console.log(hamburgerOpen)
    }

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
            <MobileNavBarContainer colorChange={props.colorChange} >
                <MobileIconContainer href={'/'}>
                    ~
                </MobileIconContainer>
                <HamburgerContainer>
                    <Hamburger onToggle={handleBurgerClick} color={'#333333'} size={20}></Hamburger>
                </HamburgerContainer>
            </MobileNavBarContainer>
            <MobileMenuContainer open={hamburgerOpen}>

                <MobileMenuText href="/blogs">
                    Blogs
                </MobileMenuText>

                <MobileMenuText href="/food">
                    Food
                </MobileMenuText>
                <MobileMenuText href="/about">
                    About
                </MobileMenuText>
                <MobileMenuText href="/dump">
                    Dump
                </MobileMenuText>
            </MobileMenuContainer>

        </NavbarContainer>

    )
}

export default Navbar