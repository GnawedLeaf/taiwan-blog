import { React, Fragment, useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar/NavbarIndex"
import { VerticalFoodContainer, VerticalFoodBigContainer, BigFoodContainer, FoodHeroTitle, FoodHeroSection, FoodListContainer } from "./FoodOverviewStyles"

const FoodOverview = () => {

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





  //Prevents scrolling for the first 4 seconds
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
  }
  const enableScroll = () => {
    document.body.style.overflow = 'auto';
  }

  useEffect(() => {
    disableScroll();
    const timeoutId = setTimeout(() => {
      enableScroll();
      setScrollEnabled(true);
    }, (FoodNamesArray.length / 2 * 100 + 3000));
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


  //Formatting chinese location to include br
  const convertToLines = (str) => {
    const lines = str.split('');
    return lines.map((line, index) => <Fragment key={index}>{line}<br /></Fragment>);
  }
  const FoodNamesArray = ["招牌水餃", "牛肉麵", "滷肉飯", "牛肉麵", "滷肉飯", "牛肉麵", "滷肉飯", "招牌水餃", "牛肉麵"]
  const FoodNamesArray2 = ["KINGMETA", "COIN", "NFT", "豬腳便當", "台灣食品", "排骨酥湯", "炸雞排", "招牌鍋貼", "紅油抄手"]


  return (
    <>
      <Navbar linkColor={'#333333'} backgroundColor={"transparent"} borderColor={"none"} colorChange={navbarVisible} />
      <BigFoodContainer>
        <VerticalFoodBigContainer mobileMode={isMobile} >
          {FoodNamesArray.map((food, index) => (
            <VerticalFoodContainer shutterMode={shutterMode} mobileMode={isMobile} middleIndex={Math.floor(FoodNamesArray.length / 2)} totalIndex={FoodNamesArray.length - 1} index={index} arrayLength={FoodNamesArray.length} style={{ borderLeft: index === 0 ? "0.6vw solid #333333" : "0.3vw solid #333333", borderRight: index === FoodNamesArray.length - 1 ? "0.6vw solid #333333" : "0.3vw solid #333333" }}>
              {isMobile ? food : convertToLines(food)}
            </VerticalFoodContainer>
          ))}
        </VerticalFoodBigContainer>

        <FoodHeroSection ref={navbarRef}>
          <FoodHeroTitle>
            Food
          </FoodHeroTitle>
        </FoodHeroSection>
        <FoodListContainer>

        </FoodListContainer>


      </BigFoodContainer>



    </>


  );
}

export default FoodOverview;