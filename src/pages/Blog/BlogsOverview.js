import React from "react";
import { useState, useEffect } from "react";
// import { Typewriter } from 'react-simple-typewriter'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BigContainer, BlogBigTitle, BlogNavBar, BlogFooter, BlogMainContainer, Icon, Word1, Word2, Word3, CheckboxContainer, Box, DiagonalLine1, DiagonalLine2, HamburgerStyled, HamburgerMenu, MobileMenuContainer, MobileMenuText, DailyBlogCardsContainer, DailyBlogImg, CalenderContainer, Calender, CalenderDay, CalenderDayLabel, Carousel, CarouselItem, Inner, CarouselTitleHolder, CalenderMonthHeader, CalenderDayTitle } from "./BlogOverviewStyles"
import { Squash as Hamburger } from 'hamburger-react'
import { GraphQLClient } from 'graphql-request'
import { BLOG_QUERY } from "../../backend/blogQuery";




const BlogsOverview = (props) => {

    const [janArray, setJanArray] = useState(Array(31).fill());
    const [febArray, setFebArray] = useState(Array(28).fill());
    const [marArray, setMarArray] = useState(Array(31).fill());
    const [aprArray, setAprArray] = useState(Array(30).fill());
    const [mayArray, setMayArray] = useState(Array(31).fill());
    const [junArray, setJunArray] = useState(Array(30).fill());
    const [julArray, setjulArray] = useState(Array(31).fill());
    const [monthsContainer, setMonthsContainer] = useState([janArray, febArray, marArray, aprArray, mayArray, junArray, julArray]);

    const graphcms = new GraphQLClient('https://api-ap-northeast-1.hygraph.com/v2/clg7r296t1gd401uigal98mrw/master');

    const [posts, setPosts] = useState([]);
    const [mainPosts, setMainPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { posts } = await graphcms.request(BLOG_QUERY);

            //filter out all the slugs with "blog" , "daily" will be used for the calender 
            const mainBlogArray = posts.filter((post) => !post.slug.includes("daily"));
            const dailyArray = posts.filter((post) => post.slug.includes("daily"));

            setPosts(dailyArray);

            setMainPosts(mainBlogArray);
        };
        fetchData();

    }, []);

    useEffect(() => {
        sortBlogsIntoCalender(posts);

    }, [posts])

    //update the month container everytime one of the months updates
    useEffect(() => {
        setMonthsContainer([janArray, febArray, marArray, aprArray, mayArray, junArray, julArray])


    }, [janArray, febArray, marArray, aprArray, mayArray, junArray, julArray, posts])

    //Lifting state up to App level
    useEffect(() => {
        console.log("blog level", monthsContainer)
        props.onData(monthsContainer)
    }, [monthsContainer])




    const sortBlogsIntoCalender = (posts) => {
        if (posts) {
            const monthArrays = {
                "01": [...janArray],
                "02": [...febArray],
                "03": [...marArray],
                "04": [...aprArray],
                "05": [...mayArray],
                "06": [...junArray],
                "07": [...julArray],
            };

            for (let i = 0; i < posts.length; i++) {
                const rawDate = posts[i].date;
                const year = rawDate.substring(0, 4);
                const month = rawDate.substring(5, 7);
                const day = rawDate.substring(8, 10);
                const dateObject = { year, month, day };

                monthArrays[dateObject.month][dateObject.day - 1] = posts[i];
            }

            setJanArray(monthArrays["01"]);
            setFebArray(monthArrays["02"]);
            setMarArray(monthArrays["03"]);
            setAprArray(monthArrays["04"]);
            setMayArray(monthArrays["05"]);
            setJunArray(monthArrays["06"]);
            setjulArray(monthArrays["07"]);
        }
    };

    // useEffect(() => {
    //     console.log("within switch statement, APR arra: ", aprArray)
    //     console.log("within switch statement, MAR array: ", marArray)
    //     console.log(monthsContainer)
    // }, [aprArray, marArray])






    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const handleBurgerClick = () => {
        setHamburgerOpen(!hamburgerOpen);

    }

    //Calender thing -------------------------------------------------

    const navigate = useNavigate();

    const handleDailyPostClick = (dayIndex, monthIndex) => {
        navigate(`/blogs/daily/${dayIndex + 1}-${monthIndex + 1}-2023`)
    }

    const Calenders = monthsContainer.map((month, monthIndex) => (
        <>
            {monthIndex}
            < Calender >
                {
                    month.map((day, dayIndex) => (
                        <CalenderDay onClick={day && handleDailyPostClick} hasBlog={day} key={dayIndex} feb={monthIndex === 1}>
                            <CalenderDayLabel hasBlog={day}>
                                {dayIndex + 1}
                            </CalenderDayLabel>
                        </CalenderDay>
                    ))
                }
            </Calender>
        </>

    ))


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



                        <div>
                            {mainPosts.map((post) => (
                                <div key={post.slug}>
                                    <h1>{post.title}</h1>
                                    <h3>By: {post.author.name}</h3>
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

                    {monthsContainer.map((month, monthIndex) => (
                        <>
                            <CalenderMonthHeader>
                                {monthIndex === 0 ? "Jan" : ""}
                                {monthIndex === 1 ? "Feb" : ""}
                                {monthIndex === 2 ? "Mar" : ""}
                                {monthIndex === 3 ? "Apr" : ""}
                                {monthIndex === 4 ? "May" : ""}
                                {monthIndex === 5 ? "Jun" : ""}
                                {monthIndex === 6 ? "Jul" : ""}
                            </CalenderMonthHeader>

                            < Calender >
                                {
                                    month.map((day, dayIndex) => (
                                        <Carousel onClick={() => { day && handleDailyPostClick(dayIndex, monthIndex) }} hasBlog={day} key={dayIndex} feb={monthIndex === 1}>
                                            <Inner hasBlog={day}>
                                                <CarouselItem>
                                                    <CalenderDayLabel hasBlog={day}>
                                                        {dayIndex + 1}
                                                    </CalenderDayLabel>
                                                    <CalenderDayTitle>
                                                        {day && day.title}
                                                    </CalenderDayTitle>
                                                </CarouselItem>
                                                {/* <CarouselItem>
                                                    <CarouselTitleHolder>
                                                        {day && day.title}
                                                    </CarouselTitleHolder></CarouselItem> */}
                                            </Inner>
                                        </Carousel>

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