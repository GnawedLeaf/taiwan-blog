import React from "react";
import { useState, useEffect } from "react";
import { gql } from '@apollo/client';
// import { Typewriter } from 'react-simple-typewriter'
// import { Link } from "react-router-dom";
import { BigContainer, BlogBigTitle, BlogNavBar, BlogFooter, BlogMainContainer, Icon, Word1, Word2, Word3, CheckboxContainer, Box, DiagonalLine1, DiagonalLine2, HamburgerStyled, HamburgerMenu, MobileMenuContainer, MobileMenuText, DailyBlogCardsContainer, DailyBlogImg, CalenderContainer, Calender, CalenderDay } from "./BlogOverviewStyles"
import { Squash as Hamburger } from 'hamburger-react'
import { GraphQLClient } from 'graphql-request'
import DailyBlogCard from './DailyBlogs/DailyBlogCard'
import DailyBlogPost from "./DailyBlogs/DailyBlogPost";



const BlogsOverview = () => {

    const [janArray, setJanArray] = useState(Array(31).fill());
    const [febArray, setFebArray] = useState(Array(28).fill());
    const [marArray, setMarArray] = useState(Array(31).fill());
    const [aprArray, setAprArray] = useState(Array(30).fill());
    const [mayArray, setMayArray] = useState(Array(31).fill());
    const [junArray, setJunArray] = useState(Array(30).fill());
    const [julyArray, setJulyArray] = useState(Array(31).fill());
    const [monthsContainer, setMonthsContainer] = useState([janArray, febArray, marArray, aprArray, mayArray, junArray, julyArray]);


    const graphcms = new GraphQLClient('https://api-ap-northeast-1.hygraph.com/v2/clg7r296t1gd401uigal98mrw/master');

    const BLOG_QUERY = gql`
    {
        posts {
          slug
          title
          date
          coverImage {
            url
            createdAt
          }
          postImage {
            height
            width
            url(transformation: {image: {resize: {height: 225, width: 400}}})
          }
          content {
            html
          }
          author {
            name
            publishedAt
          }

        }
      }
      
      
    `
    const [posts, setPosts] = useState([]);
    const [mainPosts, setMainPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { posts } = await graphcms.request(BLOG_QUERY);

            //filter out all the slugs with "blog" , "daily" will be used for the calender 

            setPosts(posts);

            //console.log("posts: ", posts)
        };
        fetchData();

    }, []);

    useEffect(() => {
        sortBlogsIntoCalender(posts);
    }, [posts])

    //update the month container everytime one of the months updates
    useEffect(() => {
        setMonthsContainer([janArray, febArray, marArray, aprArray, mayArray, junArray, julyArray])
    }, [janArray, febArray, marArray, aprArray, mayArray, junArray, julyArray])


    const sortBlogsIntoCalender = (posts) => {
        if (posts) {
            for (let i = 0; i < posts.length; i++) {
                const rawDate = posts[i].date;
                const year = rawDate.substring(0, 4);
                const month = rawDate.substring(5, 7);
                const day = rawDate.substring(8, 10);
                const dateObject = { year, month, day };

                switch (dateObject.month) {
                    case "01": {
                        const updatedArray = [...janArray];
                        updatedArray[dateObject.day - 1] = posts[i]
                        console.log("within switch statement: ", updatedArray)
                        setJanArray(updatedArray)
                        console.log(janArray)
                        // if (!janArray[dateObject.day - 1]) {
                        //     i--;
                        // }
                    }
                    case "02": {
                        const updatedArray = [...febArray];
                        updatedArray[dateObject.day - 1] = posts[i];
                        setFebArray(updatedArray);
                        console.log(febArray);
                        break;
                    }
                    case "03": {
                        const updatedArray = [...marArray];
                        updatedArray[dateObject.day - 1] = posts[i];
                        console.log("within switch statement: ", updatedArray)
                        setMarArray(updatedArray);


                        break;
                    }
                    case "04": {
                        const updatedArray = [...aprArray];
                        updatedArray[dateObject.day - 1] = posts[i];
                        console.log("within switch statement: ", updatedArray)
                        setAprArray(updatedArray);

                        break;
                    }
                    case "05": {
                        const updatedArray = [...mayArray];
                        updatedArray[dateObject.day - 1] = posts[i];
                        setMayArray(updatedArray);
                        console.log(mayArray);
                        break;
                    }
                    case "06": {
                        const updatedArray = [...junArray];
                        updatedArray[dateObject.day - 1] = posts[i];
                        setJunArray(updatedArray);
                        console.log(junArray);
                        break;
                    }
                    case "07": {
                        const updatedArray = [...julyArray];
                        updatedArray[dateObject.day - 1] = posts[i];
                        setJulyArray(updatedArray);
                        console.log(julyArray);
                        break;
                    }
                    default:
                        break;

                }
            }
        }


    }

    useEffect(() => {
        console.log("within switch statement, APR arra: ", aprArray)
        console.log("within switch statement, MAR array: ", marArray)
        console.log(monthsContainer)
    }, [aprArray, marArray])






    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const handleBurgerClick = () => {
        setHamburgerOpen(!hamburgerOpen);


    }

    //Calender thing -------------------------------------------------

    const handleDailyPostClick = () => [
        console.log("clicked")
    ]





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
                    <DailyBlogCardsContainer>

                        {posts.map((post, index) => (
                            <DailyBlogCard postData={post}>{index}</DailyBlogCard>
                        ))}



                        <div>
                            {posts.map((post) => (
                                <div key={post.slug}>
                                    <h2>{post.author.name}</h2>
                                    <p>{post.date}</p>
                                    <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
                                    {post.coverImage && <img src={post.coverImage.url} alt={post.coverImage.createdAt} style={{ width: "30%" }} />}
                                    {post.postImage.map((image) => (
                                        <DailyBlogImg src={image.url}></DailyBlogImg>
                                    ))}
                                </div>
                            ))}
                        </div>

                    </DailyBlogCardsContainer>

                    {/* <Link to='/blogs/week1'>Week 1</Link> */}
                </BlogMainContainer>
                <CalenderContainer>
                    {monthsContainer.map((month, index) => (
                        <>
                            {index}
                            < Calender >
                                {
                                    month.map((day, index) => (
                                        <CalenderDay onClick={day && handleDailyPostClick} hasBlog={day} key={index}>{index + 1} {day && day.title}</CalenderDay>
                                    ))
                                }
                            </Calender>
                        </>

                    ))}

                </CalenderContainer>

                <BlogFooter></BlogFooter>
            </BigContainer >

        </>

    );
}

export default BlogsOverview;