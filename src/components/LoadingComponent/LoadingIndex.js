import React from "react";
import { LoadingContainer, Loading, DotsAnimation } from "./LoadingStyles";

const LoadingScreen = () => {


  return (
    <LoadingContainer>
      <Loading>LOADING
        <DotsAnimation marginLeft={0.5} delay={0.1}>.</DotsAnimation>
        <DotsAnimation marginLeft={1.5} delay={0.2}>.</DotsAnimation>
        <DotsAnimation marginLeft={2.5} delay={0.3}>.</DotsAnimation>
      </Loading>

    </LoadingContainer>
  )


}

export default LoadingScreen;