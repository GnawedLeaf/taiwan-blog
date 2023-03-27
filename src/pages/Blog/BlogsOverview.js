import React from "react";
import { useState } from "react";
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom";
import { BigContainer, BlogBigTitle, BlogNavBar, BlogFooter, BlogMainContainer, Icon, Word1, Word2, Word3, CheckboxContainer, Box, DiagonalLine1, DiagonalLine2, HamburgerStyled, HamburgerMenu, MobileMenuContainer, MobileMenuText } from "./BlogOverviewStyles"
import { Squash as Hamburger } from 'hamburger-react'

const BlogsOverview = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const handleBurgerClick = () => {
        setHamburgerOpen(!hamburgerOpen);


    }

    return (
        <>
            <BigContainer>

                <MobileMenuContainer open={hamburgerOpen}>

                    <MobileMenuText href="/home">
                        Home
                    </MobileMenuText>
                    <MobileMenuText href="/about">
                        About
                    </MobileMenuText>
                    <MobileMenuText href="/food">
                        Food
                    </MobileMenuText>
                    <MobileMenuText href="/dump">
                        Dump
                    </MobileMenuText>
                </MobileMenuContainer>

                <BlogNavBar>
                    <Icon>~</Icon>
                    <Word1>Feed</Word1>
                    <Word2>Updates</Word2>
                    <Word3>
                        <HamburgerMenu>
                            <Hamburger color={'#333333'} size={25} onToggle={handleBurgerClick} />
                        </HamburgerMenu>
                        <CheckboxContainer href="/">
                            <Box />
                            Home*
                        </CheckboxContainer>


                        <CheckboxContainer href="/dump">
                            <Box />
                            About
                        </CheckboxContainer>
                        <CheckboxContainer href="#">

                            <Box>
                                <DiagonalLine1 />
                                <DiagonalLine2 />
                            </Box>
                            Blogs
                        </CheckboxContainer>
                        <CheckboxContainer href="/food">
                            <Box />
                            Food
                        </CheckboxContainer>
                        <CheckboxContainer href="/dump">
                            <Box />
                            Dump
                        </CheckboxContainer>

                    </Word3>

                </BlogNavBar>
                <BlogBigTitle>
                    MY BLOGS
                </BlogBigTitle>
                <BlogMainContainer>
                    Test

                    {/* <Link to='/blogs/week1'>Week 1</Link> */}
                </BlogMainContainer>

                <BlogFooter></BlogFooter>
            </BigContainer>

        </>

    );
}

export default BlogsOverview;