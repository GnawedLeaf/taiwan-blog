import { React, useEffect, useState, useRef } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import { BigTitle, Container, CoverPictureContainer, CountdownSection, CountdownContainer, Hours, Minutes, Seconds, Days, TopDownLayoutContainer, CountdownSectionTitle, BigTitleSubText, CoverPictureTitlesContainer, CountdownSubtitle, LinksSectionContainer, BlogsLinksContainer, FoodLinksContainer, LinkTitle, LinkSubtitle, AboutText, AboutSection, LinkRowContainer, AboutLinkContainer, DumpLinkContainer } from "./HomePageStyles2";
import coverPictureDesktop from './pictures/hualien_scenery_1.jpg';
import coverPictureMobile from './pictures/hualien_scenery_1_mobile.jpg';
import Navbar from "../../components/Navbar/NavbarIndex";
import { Squash as Hamburger } from 'hamburger-react'


const HomePage2 = () => {


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
    const [navbarChangeColour, setnavbarChangeColour] = useState(false);

    const targetRef = useRef(null);
    const navbarTargetRef = useRef(null);

    useEffect(() => {

        //Homepage text
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

        //Navbar change colour to make it readable
        const observerNavbar = new IntersectionObserver(
            ([entry]) => {
                setnavbarChangeColour(!entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px 0px 0px 0px',
                threshold: 0.3,
            },
        );

        if (navbarTargetRef.current && !navbarChangeColour) {

            observerNavbar.observe(navbarTargetRef.current);
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

    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const handleBurgerClick = () => {
        setHamburgerOpen(!hamburgerOpen);


    }

    return (
        <>
            <Navbar linkColor={'#4a4e69'} backgroundColor={"#f5f5f5"} borderColor={"#4a4e69"} colorChange={navbarChangeColour} />
            <Container>

                <CoverPictureContainer backgroundSrc={coverPictureDesktop} ref={navbarTargetRef}>
                    <CoverPictureTitlesContainer>

                        <BigTitle>An Introvert's Guide to Taiwan</BigTitle>
                        <BigTitleSubText>By Marcel</BigTitleSubText>
                    </CoverPictureTitlesContainer>
                </CoverPictureContainer>


                <AboutSection>
                    <AboutText>
                        A guide/blog/record of my experiences in Taiwan of whats good and whats shit.
                    </AboutText>
                    <AboutText>
                        To be honest, I could spend every night and every weekend staying at home and playing games but I wanna force myself to go out.
                    </AboutText>
                    <AboutText>
                        It's also an excuse to use some cool React effects I've learnt so some sections might be abit whacky.
                    </AboutText>
                    <AboutText>
                        Enjoy.
                    </AboutText>
                </AboutSection>


                <LinksSectionContainer>
                    <LinkRowContainer>
                        <BlogsLinksContainer href="/blogs">
                            <LinkTitle>BLOGS</LinkTitle>
                            <LinkSubtitle>Highlights Of My Travels</LinkSubtitle>

                        </BlogsLinksContainer>
                        <FoodLinksContainer href="/food">
                            <LinkTitle>FOOD</LinkTitle>
                            <LinkSubtitle>Reviews Of Amazing Food</LinkSubtitle>
                        </FoodLinksContainer>
                    </LinkRowContainer>
                    <LinkRowContainer>
                        <AboutLinkContainer href="/about">
                            <LinkTitle>ABOUT</LinkTitle>
                            <LinkSubtitle>That's What It's About</LinkSubtitle>

                        </AboutLinkContainer>
                        <DumpLinkContainer href="/dump">
                            <LinkTitle>DUMP</LinkTitle>
                            <LinkSubtitle>A Graveyard Of Ununsed Designs</LinkSubtitle>
                        </DumpLinkContainer>
                    </LinkRowContainer>

                </LinksSectionContainer>








                <CountdownSection>
                    <CountdownContainer>
                        <CountdownSectionTitle>
                            Time Left In Taiwan
                        </CountdownSectionTitle>
                        <TopDownLayoutContainer>
                            <Days>
                                {(timeLeft.days < 10 ? "0" : "") + timeLeft.days}
                            </Days>
                            <CountdownSubtitle>
                                {(timeLeft.days < 2 && timeLeft > 0 ? "Day" : "Days")}
                            </CountdownSubtitle>

                        </TopDownLayoutContainer>

                        <TopDownLayoutContainer>
                            <Hours>
                                {(timeLeft.hours < 10 ? "0" : "") + timeLeft.hours}
                            </Hours>
                            <CountdownSubtitle>{(timeLeft.hours < 2 && timeLeft.hours > 0 ? "Hour" : "Hours")}</CountdownSubtitle>


                        </TopDownLayoutContainer>

                        <TopDownLayoutContainer>
                            <Minutes>
                                {(timeLeft.minutes < 10 ? "0" : "") + timeLeft.minutes}
                            </Minutes>
                            <CountdownSubtitle>{(timeLeft.minutes < 2 && timeLeft.minutes > 0 ? "Minute" : "Minutes")}</CountdownSubtitle>

                        </TopDownLayoutContainer>

                        <TopDownLayoutContainer>
                            <Seconds>
                                {(timeLeft.seconds < 10 ? "0" : "") + timeLeft.seconds}
                            </Seconds>
                            <CountdownSubtitle> {(timeLeft.seconds < 2 && timeLeft.seconds > 0 ? "Second" : "Seconds")}</CountdownSubtitle>

                        </TopDownLayoutContainer>

                    </CountdownContainer>
                </CountdownSection>
            </Container >
        </>
    )
}

export default HomePage2;