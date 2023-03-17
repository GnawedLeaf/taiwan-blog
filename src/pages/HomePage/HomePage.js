import { React, useEffect, useState } from "react";
import { CentralisingContainer } from "../pagesStyles";
import { BigTitle, Container, Text, CoverPictureContainer, LatestBlogContainer, LatestBlogBigTitle } from "./HomePageStyles";
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
            //Return is meant to remove the handler after its done
            return () => window.removeEventListener('resize', handleWindowResize);
        }, []);

        return windowWidth;
    };

    const coverPicture = useWindowWidth() >= 650 ? coverPictureDesktop : coverPictureMobile;

    return (
        <Container>
            <CoverPictureContainer backgroundSrc={coverPicture} >
                <CentralisingContainer>
                    <BigTitle>Taiwan Number 1</BigTitle>
                    <Text>I love Taiwan </Text>
                </CentralisingContainer>
            </CoverPictureContainer>

            <LatestBlogContainer>
                <LatestBlogBigTitle>Latest Blog </LatestBlogBigTitle>
            </LatestBlogContainer>


        </Container >

    )
}

export default HomePage;