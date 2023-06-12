import { React, Fragment } from "react";
import { FoodModalContainer, FoodModalPicturesContainer, FoodModalDescription, FoodModalLocation, FoodModalBigVerticalTitle, FoodModalPrice, FillerBox, FillerBox2, FoodModalLocationLink, FoodModalPicture } from "./FoodModalStyles";

const FoodModal = (props) => {

  const convertToLines = (str) => {
    const lines = str.split('');
    return lines.map((line, index) => <Fragment key={index}>{line}<br /></Fragment>);
  }

  return (
    <FoodModalContainer>
      <FillerBox />
      <FillerBox2 />
      <FoodModalPicturesContainer>
        <FoodModalPicture src={props.foodModalData[0].picture} />
      </FoodModalPicturesContainer>
      <FoodModalDescription>
        {props.foodModalData[0].description}
      </FoodModalDescription>
      <FoodModalLocation>
        <FoodModalLocationLink href={props.foodModalData[0].locationLink}>
          {props.foodModalData[0].location}
        </FoodModalLocationLink>

      </FoodModalLocation>
      <FoodModalBigVerticalTitle>{convertToLines(props.foodModalData[0].title)}</FoodModalBigVerticalTitle>
      <FoodModalPrice>{props.foodModalData[0].price}</FoodModalPrice>
    </FoodModalContainer>
  )
}

export default FoodModal;