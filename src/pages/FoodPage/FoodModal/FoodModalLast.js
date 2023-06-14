import { React, useEffect, useState } from "react";
import { FoodModalLastContainer, FoodModalLastPicture, FoodModalTitle, PictureNotAvaliable } from "./FoodModalStyles";

const FoodModalLast = (props) => {

  const foodPageData = props.data;
  const pageNum = props.pageNum;
  const index = props.index;
  console.log("menu inside", foodPageData)
  return (
    (foodPageData &&
      <FoodModalLastContainer translateX={pageNum === index ? 0 : pageNum > index ? "100%" : -(index - pageNum) / 3 + "rem"} translateY={pageNum === index + 1 ? 0 : (index - pageNum) / 3 + "rem"} opacity={pageNum > index ? "0" : "1"} zIndex={100 - index + 1}>
        <FoodModalTitle>Menu</FoodModalTitle>
        {foodPageData.length !== 0 ? (
          <FoodModalLastPicture src={foodPageData} />) : (
          <PictureNotAvaliable>Menu Not Avaliable</PictureNotAvaliable>
        )
        }


      </FoodModalLastContainer>)

  )
}

export default FoodModalLast;