import { React, useEffect, useState, useRef } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { CentralisingContainer } from "../pagesStyles";
import { BigTitle, Container, CoverPictureContainer, LatestBlogContainer, LatestBlogBigTitle, CountdownSection, CountdownContainer, Hours, Minutes, Seconds, Days, TopDownLayoutContainer, AboutSection, CountdownSectionTitle, BigTitleSubText, AboutText, AboutTextContainer, QuickLinksSection, FoodLinkContainer, BlogLinkContainer, FoodLink, BlogLink } from "./HomePageStyles";
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

    // <-------------------------------------Viewport Checker---------------------------------->

    const [isVisible1, setisVisible1] = useState(false);
    const [isVisible1Final, setisVisible1Final] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {

                setisVisible1(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px 0px 0px 0px',
                threshold: 0.9,
            },
        );

        if (targetRef.current && !isVisible1) {

            observer.observe(targetRef.current);
        }

        // Cleanup
        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, []);

    //Makes sure animation only runs one time
    useEffect(() => {
        if (isVisible1) {
            setisVisible1Final(true);
        }
    }, [isVisible1])

    //<------------------------------------------------------------------------------------------------------------------>




    return (
        <Container>
            <CoverPictureContainer backgroundSrc={coverPictureDesktop} >
                <CentralisingContainer>
                    <BigTitle>Taiwan No. 1</BigTitle>
                    <BigTitleSubText>Marcel's Blog</BigTitleSubText>
                </CentralisingContainer>
            </CoverPictureContainer>




            <AboutSection>


                <AboutTextContainer>

                    <AboutText isVisible={isVisible1Final} data-text="Hi." delay={0}> Hi.

                    </AboutText>
                    <AboutText ref={targetRef} isVisible={isVisible1Final} delay={0.8} data-text="I'm doing an internship in Taiwan.">
                        I'm doing an internship in Taiwan.
                    </AboutText>
                    <AboutText isVisible={isVisible1Final} delay={2.5} data-text="Since I always procrastinate making a vlog," >
                        Since I always procrastinate making a vlog,
                    </AboutText >
                    <AboutText isVisible={isVisible1Final} delay={4} data-text="heres a blog instead.">
                        heres a blog instead.
                    </AboutText>
                </AboutTextContainer>
            </AboutSection>

            <QuickLinksSection>
                <BlogLinkContainer>
                    <BlogLink>Blog</BlogLink>
                </BlogLinkContainer>
                <FoodLinkContainer>
                    <FoodLink>
                        Food
                    </FoodLink>
                </FoodLinkContainer>

            </QuickLinksSection>

            <CountdownSection>
                <CountdownSectionTitle>
                    Time Left In Taiwan
                </CountdownSectionTitle>
                <CountdownContainer>
                    <TopDownLayoutContainer>
                        <Days>
                            {(timeLeft.days < 10 ? "0" : "") + timeLeft.days}
                        </Days>
                        {(timeLeft.days < 2 ? "Day" : "Days")}
                    </TopDownLayoutContainer>

                    <TopDownLayoutContainer>
                        <Hours>
                            {(timeLeft.hours < 10 ? "0" : "") + timeLeft.hours}
                        </Hours>
                        {(timeLeft.hours < 2 ? "Hour" : "Hours")}

                    </TopDownLayoutContainer>

                    <TopDownLayoutContainer>
                        <Minutes>
                            {(timeLeft.minutes < 10 ? "0" : "") + timeLeft.minutes}
                        </Minutes>
                        {(timeLeft.minutes < 2 ? "Minute" : "Minutes")}
                    </TopDownLayoutContainer>

                    <TopDownLayoutContainer>
                        <Seconds>
                            {(timeLeft.seconds < 10 ? "0" : "") + timeLeft.seconds}
                        </Seconds>
                        {(timeLeft.seconds < 2 ? "Second" : "Seconds")}
                    </TopDownLayoutContainer>

                </CountdownContainer>
            </CountdownSection>







        </Container >

    )
}

export default HomePage;