import { React, Fragment, useState, useEffect, useRef } from "react";
import { FoodCardContainer, FoodPicture, ChineseFoodTitle, EngFoodTitle, Price, Location, FoodPictureContainer, InformationContainer, CornerContainer, TransitionContainer, TransitionImage } from "./FoodCardStyles";

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

  useEffect(() => {
  }, [foodCardClicked])


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



  return (
    <>
      <FoodCardContainer ref={elementRef} seen={elementIntersected} onClick={handleFoodCardClick} clicked={foodCardClicked}>
        <FoodPictureContainer>
          <FoodPicture clicked={foodCardClicked} src={props.data.pictures[0]} />
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
      <TransitionContainer clicked={foodCardClicked} onClick={() => {
        setFoodCardClicked(false)
      }}>
        <TransitionImage src={props.data.pictures[0]} />
      </TransitionContainer>
    </>
  )
}

export default FoodCard;