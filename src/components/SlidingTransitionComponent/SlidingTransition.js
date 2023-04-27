import { React, useState, useEffect, Fragment } from "react";
import { VerticalFoodContainer, VerticalFoodBigContainer } from "./SlidingTransitionStyles"

const SlidingTransition = (props) => {




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


  //Converts a sentence to add <br> in between each word
  const convertToLines = (str) => {
    const lines = str.split('');
    return lines.map((line, index) => <Fragment key={index}>{line}<br /></Fragment>);
  }


  return (

    <VerticalFoodBigContainer mobileMode={isMobile} >
      {props.inputArray.map((food, index) => (
        <VerticalFoodContainer shutterMode={props.shutterMode} mobileMode={isMobile} middleIndex={Math.floor(props.inputArray.length / 2)} totalIndex={props.inputArray.length - 1} index={index} arrayLength={props.inputArray.length}>
          {isMobile ? food : convertToLines(food)}
        </VerticalFoodContainer>
      ))}
    </VerticalFoodBigContainer>

  )
}

export default SlidingTransition;