import { React, useEffect, useState } from "react";
import { CentralisingContainer } from "../pagesStyles";
import { BigTitle, Container, Text, CoverPictureContainer } from "./HomePageStyles";
import coverPictureDesktop from './pictures/hualien_scenery_1.jpg';
import coverPictureMobile from
    './pictures/hualien_scenery_1_mobile.jpg'

const HomePage = () => {


    const useWindowWidth = () => {
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);

        useEffect(() => {
            const handleWindowResize = () => {
                setWindowWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleWindowResize);
            return () => window.removeEventListener('resize', handleWindowResize);
        }, []);

        return windowWidth;
    };

    const coverPicture = useWindowWidth() >= 650 ? coverPictureDesktop : coverPictureMobile;

    return (
        <Container>
            <CoverPictureContainer backgroundSrc={coverPictureDesktop} >
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