import React from "react";
import { useState, useEffect } from "react";
import { gql } from '@apollo/client';
// import { Typewriter } from 'react-simple-typewriter'
// import { Link } from "react-router-dom";
import { BigContainer, BlogBigTitle, BlogNavBar, BlogFooter, BlogMainContainer, Icon, Word1, Word2, Word3, CheckboxContainer, Box, DiagonalLine1, DiagonalLine2, HamburgerStyled, HamburgerMenu, MobileMenuContainer, MobileMenuText } from "./BlogOverviewStyles"
import { Squash as Hamburger } from 'hamburger-react'
import { GraphQLClient } from 'graphql-request'


const BlogsOverview = () => {
    const graphcms = new GraphQLClient('https://api-ap-northeast-1.hygraph.com/v2/clg7r296t1gd401uigal98mrw/master');

    const BLOG_QUERY = gql`
    {
        posts {
          author {
            name
            publishedAt
          }
          content {
            html
          }
          coverImage {
            url
            createdAt
          }
          createdAt
          slug
        }
    }
      
      
    `
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { posts } = await graphcms.request(BLOG_QUERY);
            setPosts(posts);
        };

        fetchData();
    }, []);


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
                    <Icon href={'/'}>~</Icon>
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
                    <div>
                        {posts.map((post) => (
                            <div key={post.slug}>
                                <h2>{post.author.name}</h2>
                                <p>{post.createdAt}</p>
                                <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
                                {post.coverImage && <img src={post.coverImage.url} alt={post.coverImage.createdAt} />}
                            </div>
                        ))}

                    </div>

                    {/* <Link to='/blogs/week1'>Week 1</Link> */}
                </BlogMainContainer>

                <BlogFooter></BlogFooter>
            </BigContainer>

        </>

    );
}

export default BlogsOverview;