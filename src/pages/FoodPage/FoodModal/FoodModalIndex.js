import { React, Fragment, useEffect } from "react";
import { FoodModalContainer, FoodModalPicturesContainer, FoodModalDescription, FoodModalLocation, FoodModalBigVerticalTitle, FoodModalPrice, FillerBox, FillerBox2, FoodModalLocationLink, FoodModalPicture } from "./FoodModalStyles";

const FoodModal = (props) => {

  const convertToLines = (str) => {
    const lines = str.split('');
    const convertedLines = lines.map((line, index) => <Fragment key={index}>{line}<br /></Fragment>);
    return convertedLines
  }

  const foodPageData = props.data;
  const pageNum = props.pageNum;
  const index = props.index;

  return (
    (foodPageData &&
      <FoodModalContainer translateX={pageNum === index ? 0 : pageNum > index ? "100%" : -(index - pageNum) / 3 + "rem"} translateY={pageNum === index + 1 ? 0 : (index - pageNum) / 3 + "rem"} opacity={pageNum > index ? "0" : "1"} zIndex={100 - index + 1}>
        <FillerBox />
        <FillerBox2 />
        <FoodModalPicturesContainer>
          <FoodModalPicture src={foodPageData.picture} />
        </FoodModalPicturesContainer>
        <FoodModalDescription>
          {foodPageData.description}
        </FoodModalDescription>
        <FoodModalLocation>
          <FoodModalLocationLink href={foodPageData.locationLink} target="_blank">
            {foodPageData.location}
          </FoodModalLocationLink>

        </FoodModalLocation>
        <FoodModalBigVerticalTitle length={convertToLines(foodPageData.chineseFoodName).length}>{convertToLines(foodPageData.chineseFoodName)}</FoodModalBigVerticalTitle>
        <FoodModalPrice>{foodPageData.price}</FoodModalPrice>
      </FoodModalContainer>)

  )
}

export default FoodModal;