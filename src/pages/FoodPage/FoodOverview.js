import { React, Fragment, useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar/NavbarIndex"
import { VerticalFoodContainer, VerticalFoodBigContainer, BigFoodContainer, FoodHeroTitle, FoodHeroSection, FoodListContainer } from "./FoodOverviewStyles"
import foodCoverPicture from "./pictures/foodCoverPicture.jpg"
import SlidingTransition from "../../components/SlidingTransitionComponent/SlidingTransition"
import FoodCard from "./FoodCard/FoodCardIndex";
import { FoodCardData } from "./FoodCard/FoodCardData/FoodCardData"
import { FOOD_QUERY } from "../../backend/foodQuery";
import { GraphQLClient } from 'graphql-request'
import { BLOG_QUERY } from "../../backend/blogQuery";


const FoodOverview = () => {

  //<-------------------------------------Backend and data handling---------------------------------->
  const hygraph = new GraphQLClient(
    'https://ap-northeast-1.cdn.hygraph.com/content/clg7r296t1gd401uigal98mrw/master'
  );
  const [foodData, setFoodData] = useState([{}])

  useEffect(() => {
    const fetchData = async () => {
      const { foods } = await hygraph.request(FOOD_QUERY);
      setFoodData(foods);
    };
    fetchData();

  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);


  const [shutterMode, setShutterMode] = useState("side")
  // "side": Original Mode 
  // "vertical": All shutters go upward
  // "spiral": For mobile

  //<-------------------------------------Window width detector---------------------------------->

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    //Return is meant to remove the handler after its done
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const isMobile = windowWidth <= 650;





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
    }, (FoodNamesArray.length / 2 * 100 + 2000));
    setScrollEnabled(false);
    return () => clearTimeout(timeoutId);
  }, []);





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
        threshold: 0.1,
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




  //Formatting chinese location to include br
  const convertToLines = (str) => {
    const lines = str.split('');
    return lines.map((line, index) => <Fragment key={index}>{line}<br /></Fragment>);
  }
  const FoodNamesArray = ["招牌水餃", "牛肉麵", "滷肉飯", "豬腳便當", "台灣食品", "排骨酥湯", "炸雞排", "招牌鍋貼", "紅油抄手"]
  const FoodNamesArray2 = ["KINGMETA", "COIN", "NFT", "豬腳便當", "台灣食品", "排骨酥湯", "炸雞排", "招牌鍋貼", "紅油抄手"]

  const onFoodCardClick = () => {

  }



  return (
    <>
      <Navbar linkColor={'#333333'} backgroundColor={"#FFFAF1"} borderColor={"none"} colorChange={navbarVisible} />
      <BigFoodContainer>
        <SlidingTransition shutterMode={shutterMode} inputArray={FoodNamesArray} />

        <FoodHeroSection src={foodCoverPicture} ref={navbarRef}>
          <FoodHeroTitle>
            台灣食品
          </FoodHeroTitle>
        </FoodHeroSection>
        <FoodListContainer>
          {foodData && foodData.map((food, index) => (
            <FoodCard onFoodCardClick={onFoodCardClick} data={food} />
          ))}


        </FoodListContainer>


      </BigFoodContainer>



    </>


  );
}

export default FoodOverview;