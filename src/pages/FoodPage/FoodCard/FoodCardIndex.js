import { React, Fragment, useState, useEffect, useRef } from "react";
import { FoodCardContainer, FoodPicture, ChineseFoodTitle, EngFoodTitle, Price, Location, FoodPictureContainer, InformationContainer, CornerContainer, TransitionContainer, TransitionImage } from "./FoodCardStyles";
import FoodModal from "../FoodModal/FoodModalIndex";
import { BsArrowLeft, BsArrowLeftCircle } from 'react-icons/bs';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import FoodModalLast from "../FoodModal/FoodModalLast";

const FoodCard = (props) => {


  const convertToLines = (str) => {
    const lines = str.split('');
    return lines.map((line, index) => <Fragment key={index}>{line}<br /></Fragment>);
  }

  const foodData = props.data;
  const [foodModalArray, setFoodModalArray] = useState([
    {
      picture: "",
      description: "",
      location: "",
      locationLink: "",
      chineseFoodName: "",
      price: 0,
    }
  ]);
  const [menu, setMenu] = useState([""])

  useEffect(() => {
    if (foodData.foodImages) {
      const foodModalPictures = foodData.foodImages
      const foodModalChineseFoodTitles = foodData.chineseFoodTitles
      const foodModalFoodDescriptions = foodData.foodDescriptions
      const foodModalFoodPrices = foodData.foodPrices
      const foodModalLocations = foodData.foodLocations[0].text
      const foodModalLocationLinks = foodData.foodLocationLinks[0]

      setFoodModalArray(foodModalPictures.map((foodPicture, index) => (
        {
          picture: foodPicture.url,
          description: foodModalFoodDescriptions[index].text,
          location: foodModalLocations,
          locationLink: foodModalLocationLinks,
          chineseFoodName: foodModalChineseFoodTitles[index].text,
          price: foodModalFoodPrices[index],
        }
      )))
    }
    if (foodData.menu) {
      setMenu(foodData.menu.map((menu, index) => (
        menu.url
      )))
    }
    console.log("foodData: ", foodData.foodDate)
  }, [foodData])




  const [foodCardClicked, setFoodCardClicked] = useState(false);
  const handleFoodCardClick = (food) => {
    props.onFoodCardClick();
    setFoodCardClicked(true);
  }

  const [mobileWindow, setMobileWindow] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

  }, []);


  useEffect(() => {
    setMobileWindow(windowWidth >= 750 ? false : true)
  }, [windowWidth, mobileWindow])


  //Intersection Observer
  const elementRef = useRef(null);
  const [elementIntersected, setElementIntersected] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          setElementIntersected(true);
        }
        else {
          setElementIntersected(false)
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.4,
      }
    );

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };

  }, [elementIntersected]);


  //scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);



  const [pageNum, setPageNum] = useState(0)
  const [lastPage, setLastPage] = useState(1);
  useEffect(() => {
    setLastPage(foodModalArray.length)
  }, [foodModalArray.length])

  const handleGoNextPage = () => {
    if (pageNum !== lastPage) {
      setPageNum(pageNum + 1)
    }

  }

  const handleGoPrevPage = () => {
    if (pageNum !== 0) {
      setPageNum(pageNum - 1)
    }

  }





  return (
    <>
      <FoodCardContainer ref={elementRef} seen={elementIntersected} onClick={handleFoodCardClick} clicked={foodCardClicked} >
        <FoodPictureContainer>
          <FoodPicture src={foodData.coverImage && foodData.coverImage.url} />
        </FoodPictureContainer>
        <InformationContainer>
          <ChineseFoodTitle>
            {foodData.cardTitle && convertToLines(foodData.cardTitle)}
          </ChineseFoodTitle>
          <CornerContainer>
            <EngFoodTitle>
              {foodData.englishFoodTitles && foodData.englishFoodTitles[0].text}
            </EngFoodTitle>

            <Location>
              {foodData.foodLocations && foodData.foodLocations[0].text}
            </Location>
            <Price>
              {foodData.foodDate && foodData.foodDate}
            </Price>
          </CornerContainer>
        </InformationContainer>
      </FoodCardContainer>
      <TransitionContainer clicked={foodCardClicked} >
        <BsArrowLeftCircle style={{ zIndex: "999", color: "#f5f5f5", position: "absolute", top: "1.5rem", left: mobileWindow ? "1rem" : "1.5rem", cursor: "pointer" }} size={mobileWindow ? "1.5rem" : "2rem"} onClick={() => {
          setFoodCardClicked(false)
          setPageNum(0);
        }} />

        {foodModalArray.length > 0 && foodModalArray.map((foodPageData, index) => (
          <FoodModal pageNum={pageNum} data={foodPageData} key={index} index={index} />
        ))}

        <FoodModalLast pageNum={pageNum} data={menu} index={foodModalArray.length} />

        <MdKeyboardArrowRight size={"2rem"} color={"#f5f5f5"} style={{ padding: "2rem", zIndex: "999", position: "fixed", right: "4%", cursor: "pointer", display: pageNum == lastPage ? "none" : "", transitionDuration: "0.3s" }} onClick={handleGoNextPage} />
        <MdKeyboardArrowLeft size={"2rem"} color={"#f5f5f5"} style={{ padding: "2rem", zIndex: "999", position: "fixed", left: "4%", cursor: "pointer", display: pageNum == 0 ? "none" : "", transitionDuration: "0.7s" }} onClick={handleGoPrevPage} />
      </TransitionContainer>
    </>
  )
}

export default FoodCard;