import React from "react";
import { useParams } from "react-router-dom";
import { BLOG_QUERY } from "../../../backend/blogQuery";
import { useState, useEffect } from "react";
import { GraphQLClient } from 'graphql-request'
import { useNavigate } from 'react-router-dom';
import { serializeFetchParameter } from "@apollo/client";
import { LoadingContainer, Title, PostContainer, Date, Loading, DotsAnimation, BigContainer, TitleAndLocationContainer, LocationContainer, Location, MainPostContainer, PageNumber, ImageContainer, ContentContainer, Image, ZoomedImageContainer, ZoomedImage, BackButton, Content } from "./DailyBlogPostStyles";
import { BsArrowLeft } from 'react-icons/bs';
const DailyBlogPost = (props) => {

  const graphcms = new GraphQLClient('https://api-ap-northeast-1.hygraph.com/v2/clg7r296t1gd401uigal98mrw/master');
  const [dailyPost, setDailyPost] = useState({})
  const [seperatedText, setSeperatedText] = useState([""])
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
  const [openZoomedImage, setOpenZoomedImage] = useState(false);

  //Formatting date
  const dateString = params.date; // replace this with your date string
  const parts = dateString.split("-"); // split the date string into an array of parts
  const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`; // join the parts in the desired order

  //Formatting chinese location to include br
  const convertToLines = (str) => {
    const lines = str.split('');
    return lines.map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>);
  }



  const fetchData = async () => {
    const { posts } = await graphcms.request(BLOG_QUERY);
    const dailyArray = posts.filter((post) => post.slug.includes("daily"));
    console.log("daily: ", dailyArray)
    const filteredArray = dailyArray.filter(post => post.date.includes(params.date));
    const firstObjectWithDate = filteredArray[0];
    console.log("first object", firstObjectWithDate);
    setDailyPost(firstObjectWithDate);

  };

  useEffect(() => {
    fetchData();
  }, []);


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

  }, [dailyPost]);

  useEffect(() => {
    console.log("firstText, LastText", firstText, lastText)
    console.log("postContent", postContent)
    console.log("postContent[0].imageUrl.url", postContent[0].imageUrl.url)
  }, [postContent])

  const handleGoBackToBlog = () => {
    navigate(-1)
  }

  const handleGoNextPage = () => {
    if (pageNum != postContent.length - 1) {
      setPageNum(pageNum + 1)
    }

  }

  const handleGoPrevPage = () => {
    if (pageNum != 0) {
      setPageNum(pageNum - 1)
    }

  }
  const handleOpenZoomedImage = () => {
    setOpenZoomedImage(true);
  }

  const handleToggleZoom = () => {
    setOpenZoomedImage(!openZoomedImage);
  }


  //Lexend Deca for text 
  //const media = dailyPost.postImage
  return (
    <BigContainer>
      <BsArrowLeft style={{ zIndex: "999", color: "#22223B", position: "absolute", top: "1rem", left: "1.5rem", cursor: "pointer" }} size={"2.5rem"} onClick={handleGoBackToBlog} />
      {dailyPost && firstText && postContent ? (
        <>
          {postContent.map((page, index) => (

            <PostContainer translateX={pageNum == index ? 0 : pageNum > index ? "-100%" : (index - pageNum) / 3 + "rem"} translateY={pageNum == index ? 0 : (index - pageNum) / 3 + "rem"} opacity={pageNum > index ? "0" : "1"} zIndex={100 - index}>

              <TitleAndLocationContainer>
                <Title>{dailyPost.title}</Title>
                <LocationContainer>
                  <Location>
                    {convertToLines(page.location.text)}
                  </Location></LocationContainer>
              </TitleAndLocationContainer>
              <MainPostContainer>
                <Date>{formattedDate}</Date>
                <ImageContainer>

                  <Image zoomMode={openZoomedImage} src={page.imageUrl.url}></Image>
                </ImageContainer>
                <ContentContainer zoomMode={openZoomedImage}>
                  <Content>{page.content && page.content.text}</Content>
                </ContentContainer>
                <PageNumber>{index + 1}</PageNumber>
              </MainPostContainer>
            </PostContainer>
          ))}
          <div style={{ marginTop: "40%", zIndex: "999" }}>
            <button style={{ zIndex: "999" }} onClick={handleGoNextPage}>next</button>
            <button style={{ zIndex: "999" }} onClick={handleGoPrevPage}>prev</button>
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