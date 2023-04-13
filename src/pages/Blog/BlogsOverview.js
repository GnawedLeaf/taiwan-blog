import React from "react";
import { useState, useEffect } from "react";
// import { Typewriter } from 'react-simple-typewriter'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BigContainer, BlogBigTitle, BlogNavBar, BlogFooter, BlogMainContainer, Icon, Word1, Word2, Word3, CheckboxContainer, Box, DiagonalLine1, DiagonalLine2, HamburgerStyled, HamburgerMenu, MobileMenuContainer, MobileMenuText, DailyBlogCardsContainer, DailyBlogImg, CalenderContainer, Calender, CalenderDay, CalenderDayLabel, Carousel, CarouselItem, Inner, CarouselTitleHolder, CalenderMonthHeader, CalenderDayTitle } from "./BlogOverviewStyles"
import { Squash as Hamburger } from 'hamburger-react'
import { GraphQLClient } from 'graphql-request'
import { BLOG_QUERY } from "../../backend/blogQuery";
import Navbar from "../../components/Navbar/NavbarIndex";




const BlogsOverview = (props) => {
  const monthsContainer = props.dataToBlog.monthsContainer;
  const mainPosts = props.dataToBlog.mainPosts;
  console.log("blog level: ", monthsContainer)



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
    dayIndex++;
    monthIndex++;
    switch (dayIndex) {
      case 1:
        dayIndex = "01"
        break;
      case 2:
        dayIndex = "02"
        break;
      case 3:
        dayIndex = "03"
        break;
      case 4:
        dayIndex = "04"
        break;
      case 5:
        dayIndex = "05"
        break;
      case 6:
        dayIndex = "06"
        break;
      case 7:
        dayIndex = "07"
        break;
      case 8:
        dayIndex = "08"
        break;
      case 9:
        dayIndex = "09"
        break;

    }
    switch (monthIndex) {
      case 1:
        monthIndex = "01"
        break;
      case 2:
        monthIndex = "02"
        break;
      case 3:
        monthIndex = "03"
        break;
      case 4:
        monthIndex = "04"
        break;
      case 5:
        monthIndex = "05"
        break;
      case 6:
        monthIndex = "06"
        break;
      case 7:
        monthIndex = "07"
        break;
      case 8:
        monthIndex = "08"
        break;
      case 9:
        monthIndex = "09"
        break;

    }
    navigate(`/blogs/daily/2023-${monthIndex}-${dayIndex}`)
  }



  return (
    <>
      <BigContainer>

        <Navbar linkColor={'#4a4e69'} backgroundColor={"#f5f5f5"} borderColor={"#4a4e69"} colorChange={true} />

        <BlogNavBar>
          <Icon href={'/'}>~</Icon>
          <Word1>Feed</Word1>
          <Word2>Updates</Word2>
          <Word3>
            <HamburgerMenu>
              <Hamburger color={'#4A4E69'} size={25} onToggle={handleBurgerClick} />
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
          {/* <DailyBlogCardsContainer>
            <div>
              {mainPosts && mainPosts.map((post) => (
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

          </DailyBlogCardsContainer> */}

          {/* <Link to='/blogs/week1'>Week 1</Link> */}
        </BlogMainContainer>
        <CalenderContainer>

          {monthsContainer && monthsContainer.map((month, monthIndex) => (
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