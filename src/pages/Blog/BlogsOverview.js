import React from "react";
import { useState, useEffect, useRef } from "react";
// import { Typewriter } from 'react-simple-typewriter'
import { Link, Navigate, useAsyncError, useNavigate } from "react-router-dom";
import { BigContainer, BlogTransitionPlaceholder, BlogNavBar, BlogFooter, BlogMainContainer, Icon, Word1, Word2, Word3, CheckboxContainer, Box, DiagonalLine1, DiagonalLine2, HamburgerStyled, HamburgerMenu, MobileMenuContainer, MobileMenuText, DailyBlogCardsContainer, DailyBlogImg, BigCalenderContainer, Calender, CalenderDay, CalenderDayLabel, Carousel, CarouselItem, Inner, CarouselTitleHolder, CalenderMonthHeader, CalenderDayTitle, CalenderContainer, BlogTransitionContainer, TransitionText, DailyBlogTitle, DailyBlogSubtitle } from "./BlogOverviewStyles"
import { Squash as Hamburger } from 'hamburger-react'
import { GraphQLClient } from 'graphql-request'
import { BLOG_QUERY } from "../../backend/blogQuery";
import Navbar from "../../components/Navbar/NavbarIndex";
import coverPicture from "./pictures/blogCoverPicture.jpg"


const BlogsOverview = (props) => {
  const monthsContainer = props.dataToBlog.monthsContainer;
  const mainPosts = props.dataToBlog.mainPosts;
  const [calenderContainerSeen, setCalenderContainerSeen] = useState(false)
  const [scrollPositionTest, setScrollPositionTest] = useState(0)
  const [isVisible, setIsVisible] = useState(false);

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

  //Scroll Handlers
  const scrollRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (scrollRef !== null) {
      const topPosition = element => element.getBoundingClientRect().top;
      const div1Position = topPosition(scrollRef.current)
      console.log("div1Position", div1Position)
      function handleScroll() {
        const position = window.pageYOffset;
        if (position >= div1Position + 30) {
          console.log("PAST DIV 1")
          setCalenderContainerSeen(true)
          setScrollPositionTest(position - div1Position);
        }
        else {
          setCalenderContainerSeen(false)
          setScrollPositionTest(0);
        }
        setScrollPosition(position);
      }

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }

  }, [scrollRef]);





  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (isVisible) {
          //setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '10% 0%',
        threshold: 0.1,
      },
    );

    if (scrollRef.current && !isVisible) {
      observer.observe(scrollRef.current);
    }

    // Cleanup
    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.pageYOffset;
      const percentage = (scrolled / totalHeight) * 100;
      setScrollPercentage(percentage);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    //console.log("scrollPosition", scrollPosition)
    // console.log("calenderContainerSeen", calenderContainerSeen)
    // console.log("scrollPositionTest", scrollPositionTest)
    if (scrollPercentage) {
      console.log("scrollPercentage", scrollPercentage)
    }
    if (scrollPercentage == 93.1) {
      setIsVisible(true)
    }
    else {
      setIsVisible(false)
    }

  }, [scrollPercentage])

  //Controls the visibility of the navbar
  const [navbarVisible, setNavbarVisisble] = useState(false)
  const navbarRef = useRef(null);
  useEffect(() => {


    const observer = new IntersectionObserver(
      ([entry]) => {
        setNavbarVisisble(!entry.isIntersecting);
        if (navbarVisible) {
          //setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.3,
      },
    );

    if (navbarRef.current && !navbarVisible) {
      observer.observe(navbarRef.current);
    }

    // Cleanup
    return () => {
      if (navbarRef.current) {
        observer.unobserve(navbarRef.current);
      }
    };
  }, []);


  //Prevents scrolling while intro animation is playing
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const disableScroll = () => {
    document.body.style.overflowY = 'hidden';
  }
  const enableScroll = () => {
    document.body.style.overflowY = 'auto';
  }

  useEffect(() => {
    disableScroll();
    const timeoutId = setTimeout(() => {
      enableScroll();
      setScrollEnabled(true);
    }, (0));
    setScrollEnabled(false);
    return () => clearTimeout(timeoutId);
  }, []);


  //scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);


  const wordArray = ["一個風和日麗的早上..."]
  return (
    <>
      <Navbar linkColor={'#4a4e69'} backgroundColor={"transparent"} borderColor={"#4a4e69"} colorChange={navbarVisible} />
      <BigContainer>

        <BlogTransitionPlaceholder src={coverPicture} >
          <BlogTransitionContainer >
            {wordArray.map((word, index) => (
              <TransitionText index={index} totalIndex={wordArray.length - 1} length={wordArray.length} middleIndex={Math.floor(wordArray.length / 2)} mobileMode={false}>
                {word}
              </TransitionText>
            ))}



          </BlogTransitionContainer>
          Blogs
        </BlogTransitionPlaceholder>
        <BlogMainContainer ref={navbarRef}>
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
        <DailyBlogTitle>Daily Blogs</DailyBlogTitle>
        <DailyBlogSubtitle>Click on a square to view the blog for that day!</DailyBlogSubtitle>
        <BigCalenderContainer calenderSeen={isVisible} ref={scrollRef}>


          {monthsContainer && monthsContainer.map((month, monthIndex) => (
            <CalenderContainer calenderSeen={isVisible} style={{ top: "0", display: monthIndex == 0 || monthIndex == 1 || monthIndex == 2 ? `none` : `` }}>
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
            </CalenderContainer>

          ))}
        </BigCalenderContainer>
        <div>end</div>
      </BigContainer >

    </>

  );
}




export default BlogsOverview;