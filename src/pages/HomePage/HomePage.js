import { React, useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { CentralisingContainer } from "../pagesStyles";
import { BigTitle, Container, Text, CoverPictureContainer, LatestBlogContainer, LatestBlogBigTitle, CountdownSection, CountdownContainer, Hours, Minutes, Seconds, Days } from "./HomePageStyles";
import coverPictureDesktop from './pictures/hualien_scenery_1.jpg';
import coverPictureMobile from
    './pictures/hualien_scenery_1_mobile.jpg'

const HomePage = () => {


    //<-------------------------------------Window width detector---------------------------------->
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

    //<-------------------------------------Countdown code---------------------------------->
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const countdownDate = new Date('July 14, 2023 00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    //<------------------------------------------------------------------------------------------------------------------>

    return (
        <Container>
            <CoverPictureContainer backgroundSrc={coverPicture} >
                <CentralisingContainer>
                    <BigTitle>Taiwan Number 1</BigTitle>
                    <Text>I love Taiwan </Text>
                </CentralisingContainer>
            </CoverPictureContainer>

            <CountdownSection>
                <h1 style={{ top: '50%' }}>Countdown to Last Day in Taiwan</h1>
                <CountdownContainer>
                    <Days>
                        {timeLeft.days} days
                    </Days>
                    <Hours>
                        {timeLeft.hours} hours
                    </Hours>
                    <Minutes>
                        {timeLeft.minutes} minutes
                    </Minutes>
                    <Seconds>
                        {timeLeft.seconds} seconds
                    </Seconds>
                </CountdownContainer>
            </CountdownSection>

            <LatestBlogContainer>
                <LatestBlogBigTitle>Latest Blog </LatestBlogBigTitle>

            </LatestBlogContainer>






        </Container >

    )
}

export default HomePage;