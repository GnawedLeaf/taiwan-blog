import React from "react";
import { CentralisingContainer } from "../pagesStyles";
import { BigTitle, Container, Text, CoverPictureContainer } from "./HomePageStyles";
import coverPicture from './pictures/hualien_scenery_1.jpg';


const HomePage = () => {
    return (
        <Container>
            <CoverPictureContainer backgroundSrc={coverPicture} >
                <CentralisingContainer>
                    <BigTitle>Taiwan Number 1</BigTitle>
                    <Text>I love Taiwan so much </Text>
                </CentralisingContainer>
            </CoverPictureContainer>

            <div style={{ height: "200vh" }}>
                <BigTitle>let me show you the noods </BigTitle>


            </div>


        </Container >

    )
}

export default HomePage;