import React from "react";
import { useParams } from "react-router-dom";
import { BLOG_QUERY } from "../../../backend/blogQuery";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { GraphQLClient } from 'graphql-request'
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

import { LoadingContainer, Title, PostContainer, DateLabel, Loading, DotsAnimation, BigContainer, TitleAndLocationContainer, LocationContainer, Location, MainPostContainer, PageNumber, ImageContainer, ContentContainer, Image, Content, MobileTitleAndDateContainer, MobileTitle, MobileDate, MobileImage, MobileLocationAndContentContainer, MobileLocation, MobileContent, MobileImageContainer, MobilePageNum, StartPostContainer, StartPostImage, StartPostTitle, StartPostDate, StartPostChineseLabel, EndPostContainer, EndPostText, EndPostPageNum } from "./DailyBlogPostStyles";
import { BsArrowLeft } from 'react-icons/bs';
const DailyBlogPost = (props) => {

  const graphcms = new GraphQLClient('https://api-ap-northeast-1.hygraph.com/v2/clg7r296t1gd401uigal98mrw/master');
  const [dailyPost, setDailyPost] = useState({})
  const params = useParams();
  const [firstText, setFirstText] = useState("")
  const [lastText, setLastText] = useState("")
  const navigate = useNavigate();
  const [postContent, setPostContent] = useState([{
    location: "",
    content: "",
    imageUrl: ""
  }])
  const [pageNum, setPageNum] = useState(0);
  const [mobileWindow, setMobileWindow] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [coverImageUrl, setCoverImageUrl] = useState();
  const [lastPage, setLastPage] = useState();
  const [weekday, setWeekday] = useState("")


  //<-------------------------------------Window width detector---------------------------------->

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    //Return is meant to remove the handler after its done
    fetchData();


  }, []);


  useEffect(() => {
    setMobileWindow(windowWidth >= 750 ? false : true)
  }, [windowWidth, mobileWindow])


  const getDayOfWeek = (date) => {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null :
      ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
  }

  //Formatting date
  const dateString = params.date; // replace this with your date string
  const parts = dateString.split("-"); // split the date string into an array of parts
  const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`; // join the parts in the desired order
  const dayOfWeek = getDayOfWeek(dateString)


  //Formatting chinese location to include br
  const convertToLines = (str) => {
    const lines = str.split('');
    return lines.map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>);
  }



  const fetchData = async () => {
    const { posts } = await graphcms.request(BLOG_QUERY);
    const dailyArray = posts.filter((post) => post.slug.includes("daily"));

    const filteredArray = dailyArray.filter(post => post.date.includes(params.date));
    const firstObjectWithDate = filteredArray[0];

    setDailyPost(firstObjectWithDate);

  };


  useEffect(() => {

    // Cleave out the first and last item of the content array 
    if (dailyPost.postContent) {
      setFirstText(dailyPost.postContent.shift())
      setLastText(dailyPost.postContent.pop())

      const location = dailyPost.chineseLocation;
      const imageUrl = dailyPost.postImage;
      const content = dailyPost.postContent

      // Set the data to an array of objects that contain the location, content and imageurl of each post
      setPostContent(location.map((locationInput, index) => ({
        location: locationInput,
        content: content[index],
        imageUrl: imageUrl[index]
      }

      )))
    }
    if (dailyPost.coverImage) {
      setCoverImageUrl(dailyPost.coverImage.url);
    }



  }, [dailyPost]);

  useEffect(() => {
    setLastPage(postContent.length + 1)
  }, [postContent])


  const handleGoBackToBlog = () => {
    navigate(-1)
  }

  const handleGoNextPage = () => {
    if (pageNum !== postContent.length + 1) {
      setPageNum(pageNum + 1)
    }

  }

  const handleGoPrevPage = () => {
    if (pageNum !== 0) {
      setPageNum(pageNum - 1)
    }

  }

  //Swipe handlers:
  const swipeRef = useRef(null);
  let touchStartX;
  let touchEndX;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX - touchEndX;
    if (touchDiff > 50) {
      //swipe left
      handleGoNextPage();
    } else if (touchDiff < 50) {
      //swiped right
      handleGoPrevPage();
    }
  };

  //Scroll Handlers
  const scrollRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset;
      setScrollPosition(position);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    console.log("scrollPosition", scrollPosition)
  }, [scrollPosition])



  return (
    <BigContainer>

      <BsArrowLeft style={{ zIndex: "999", color: "rgba(34, 34, 59, 0.75)", position: "absolute", top: "1rem", left: mobileWindow ? "1rem" : "1.5rem", cursor: "pointer" }} size={mobileWindow ? "1.5rem" : "2rem"} onClick={handleGoBackToBlog} />

      {dailyPost && firstText && postContent ? (

        <>
          {mobileWindow ? (
            <>
              <StartPostContainer ref={swipeRef} onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd} translateX={pageNum === 0 ? 0 : pageNum > 0 ? "-100%" : (1 - pageNum) / 3 + "rem"} translateY={pageNum === 0 ? 0 : (1 - pageNum) / 3 + "rem"} opacity={pageNum > 0 ? "0" : "1"} zIndex={102}>
                <StartPostImage src={coverImageUrl} />

                <StartPostTitle imageExists={coverImageUrl ? true : false}>{dailyPost.title}

                </StartPostTitle>
                <StartPostDate imageExists={coverImageUrl ? true : false}>{formattedDate}</StartPostDate>
                <StartPostChineseLabel> {convertToLines("每日博客")}</StartPostChineseLabel>
              </StartPostContainer>
              {postContent.map((page, index) => (

                <PostContainer ref={swipeRef} onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd} translateX={pageNum === index + 1 ? 0 : pageNum > index + 1 ? "-100%" : (index + 1 - pageNum) / 3 + "rem"} translateY={pageNum === index + 1 ? 0 : (index + 1 - pageNum) / 3 + "rem"} opacity={pageNum > index + 1 ? "0" : "1"} zIndex={100 - index + 1}>
                  <MobileTitleAndDateContainer>
                    <MobileTitle>{dailyPost.title}</MobileTitle>
                    <MobileDate>{formattedDate} <br /> {dayOfWeek} </MobileDate>
                  </MobileTitleAndDateContainer>
                  <MobileImageContainer>
                    <MobileImage src={page.imageUrl.url} />
                  </MobileImageContainer>
                  <MobileLocationAndContentContainer>
                    <MobileLocation>{convertToLines(page.location.text)}</MobileLocation>
                    <MobileContent>{page.content && page.content.text}</MobileContent>
                  </MobileLocationAndContentContainer>
                  <MobilePageNum>{index + 1}</MobilePageNum>


                </PostContainer>
              ))}

              <EndPostContainer ref={swipeRef} onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd} translateX={pageNum === lastPage ? 0 : (lastPage - pageNum) / 3 + "rem"} translateY={pageNum === lastPage ? 0 : (lastPage - pageNum) / 3 + "rem"} opacity={pageNum > lastPage ? "0" : "1"} zIndex={100 - lastPage}>
                {lastText && (
                  <EndPostText>{lastText.text}</EndPostText>
                )}
                <EndPostPageNum>End</EndPostPageNum>
                <StartPostChineseLabel> {convertToLines("每日博客")}</StartPostChineseLabel>


              </EndPostContainer>
            </>
          ) : (
            <>
              <StartPostContainer translateX={pageNum === 0 ? 0 : pageNum > 0 ? "-100%" : (1 - pageNum) / 3 + "rem"} translateY={pageNum === 0 ? 0 : (1 - pageNum) / 3 + "rem"} opacity={pageNum > 0 ? "0" : "1"} zIndex={102}>
                <StartPostImage src={coverImageUrl} />

                <StartPostTitle imageExists={coverImageUrl ? true : false}>{dailyPost.title}

                </StartPostTitle>
                <StartPostDate imageExists={coverImageUrl ? true : false}>{formattedDate}</StartPostDate>
                <StartPostChineseLabel> {convertToLines("每日博客")}</StartPostChineseLabel>
              </StartPostContainer>


              {postContent.map((page, index) => (
                <PostContainer translateX={pageNum === index + 1 ? 0 : pageNum > index + 1 ? "-100%" : (index + 1 - pageNum) / 3 + "rem"} translateY={pageNum === index + 1 ? 0 : (index + 1 - pageNum) / 3 + "rem"} opacity={pageNum > index + 1 ? "0" : "1"} zIndex={100 - index + 1}>

                  <TitleAndLocationContainer>
                    <Title>{dailyPost.title}</Title>
                    <LocationContainer>
                      <Location>
                        {convertToLines(page.location.text)}
                      </Location></LocationContainer>
                  </TitleAndLocationContainer>
                  <MainPostContainer>
                    <DateLabel>{formattedDate} <br /> {dayOfWeek}</DateLabel>
                    <ImageContainer>

                      <Image src={page.imageUrl.url}></Image>
                    </ImageContainer>
                    <ContentContainer>
                      <Content>{page.content && page.content.text}</Content>
                    </ContentContainer>
                    <PageNumber>{index + 1}</PageNumber>
                  </MainPostContainer>
                </PostContainer>
              ))}

              <EndPostContainer translateX={pageNum === lastPage ? 0 : (lastPage - pageNum) / 3 + "rem"} translateY={pageNum === lastPage ? 0 : (lastPage - pageNum) / 3 + "rem"} opacity={pageNum > lastPage ? "0" : "1"} zIndex={100 - lastPage}>
                {lastText && (
                  <EndPostText>{lastText.text}</EndPostText>
                )}
                <EndPostPageNum>End</EndPostPageNum>
                <StartPostChineseLabel> {convertToLines("每日博客")}</StartPostChineseLabel>


              </EndPostContainer>
              <MdKeyboardArrowRight size={"2rem"} color={"rgba(34, 34, 59, 0.56)"} style={{ padding: "2rem", zIndex: "999", position: "fixed", right: "4%", cursor: "pointer", display: pageNum == lastPage ? "none" : "", transitionDuration: "0.3s" }} onClick={handleGoNextPage} />
              <MdKeyboardArrowLeft size={"2rem"} color={"rgba(34, 34, 59, 0.56)"} style={{ padding: "2rem", zIndex: "999", position: "fixed", left: "4%", cursor: "pointer", display: pageNum == 0 ? "none" : "", transitionDuration: "0.7s" }} onClick={handleGoPrevPage} />
            </>
          )}


          <div style={{ marginTop: "40%", zIndex: "999", display: mobileWindow ? "none" : "" }}>

          </div>

        </>


      ) : (
        <LoadingContainer>
          <Loading>LOADING
            <DotsAnimation marginLeft={0.5} delay={0.1}>.</DotsAnimation>
            <DotsAnimation marginLeft={1.5} delay={0.2}>.</DotsAnimation>
            <DotsAnimation marginLeft={2.5} delay={0.3}>.</DotsAnimation>
          </Loading>

        </LoadingContainer>
      )
      }

    </BigContainer>
  )
}

export default DailyBlogPost;