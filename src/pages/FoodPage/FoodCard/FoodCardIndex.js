import { React, Fragment, useState, useEffect, useRef } from "react";
import { FoodCardContainer, FoodPicture, ChineseFoodTitle, EngFoodTitle, Price, Location, FoodPictureContainer, InformationContainer, CornerContainer, TransitionContainer, TransitionImage } from "./FoodCardStyles";
import FoodModal from "../FoodModal/FoodModalIndex";
import { BsArrowLeft, BsArrowLeftCircle } from 'react-icons/bs';
import { foodModalData } from "./FoodCardData/FoodCardData";

const FoodCard = (props) => {
  const convertToLines = (str) => {
    const lines = str.split('');
    return lines.map((line, index) => <Fragment key={index}>{line}<br /></Fragment>);
  }


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
    console.log("elementIntersected", elementIntersected)
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





  return (
    <>
      <FoodCardContainer ref={elementRef} seen={elementIntersected} onClick={handleFoodCardClick} clicked={foodCardClicked}>
        <FoodPictureContainer>
          <FoodPicture src={props.data.pictures[0]} />
        </FoodPictureContainer>
        <InformationContainer>
          <ChineseFoodTitle>
            {convertToLines(props.data.cName)}
          </ChineseFoodTitle>
          <CornerContainer>
            <EngFoodTitle>
              {props.data.eName}
            </EngFoodTitle>
            <Price>
              {props.data.price} NTD
            </Price>
            <Location>
              {props.data.location}
            </Location>
          </CornerContainer>
        </InformationContainer>
      </FoodCardContainer>
      <TransitionContainer clicked={foodCardClicked} >
        <BsArrowLeftCircle style={{ zIndex: "999", color: "#f5f5f5", position: "absolute", top: "1.5rem", left: mobileWindow ? "1rem" : "1.5rem", cursor: "pointer" }} size={mobileWindow ? "1.5rem" : "2rem"} onClick={() => {
          setFoodCardClicked(false)
        }} />
        {/* <TransitionImage src={props.data.pictures[0]} /> */}
        <FoodModal foodModalData={foodModalData} />
      </TransitionContainer>
    </>
  )
}

export default FoodCard;