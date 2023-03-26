import { React, useEffect, useState, useRef } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { CentralisingContainer } from "../pagesStyles";
import { BigTitle, Container, CoverPictureContainer, CountdownSection, CountdownContainer, Hours, Minutes, Seconds, Days, TopDownLayoutContainer, AboutSection, CountdownSectionTitle, BigTitleSubText, AboutText, AboutTextContainer, QuickLinksSection, FoodLinkContainer, BlogLinkContainer, FoodLink, BlogLink, FoodConveyorBelt, FoodConveyorBeltContainer, CountdownSubtitle, FoodConveyorBeltH1, FoodTitle, FoodTitleContainer, FoodLink2, BigBlogContainer, BlogFlyingContainer, FlyingBlog, BlogConveyorBelt } from "./DumpPageStyles";
import coverPictureDesktop from './pictures/hualien_scenery_1.jpg';
import coverPictureMobile from './pictures/hualien_scenery_1_mobile.jpg';
import Navbar from "../../components/Navbar/NavbarIndex";
import { foodItems, foodItems2, foodItems3, foodItems4, BlogItems } from "./HomePageItems";
import Tilt from 'react-parallax-tilt';
import TiltComponent from "../../components/TiltComponent/TiltComponent";

const DumpPage = () => {


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

    // const blogRandomNumber = (min, max) => {
    //     min = 1;
    //     max = 10;
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }


    const red = "#FD3456";
    const blue = "#29A9FF";
    const yellow = "#F5FF63";
    const background = "#140726";
    const white = "#f5f5f5";



    return (
        <>
            <Navbar linkColor={'#f5f5f5'} backgroundColor={"#140726"} borderColor={"#140726"} colorChange={navbarChangeColour} />
            <Container>

                <CoverPictureContainer backgroundSrc={coverPicture} ref={navbarTargetRef}>
                    <CentralisingContainer>
                        <BigTitleSubText>Welcome to</BigTitleSubText>
                        <BigTitle>THE DUMP</BigTitle>

                    </CentralisingContainer>
                </CoverPictureContainer>

                <AboutSection >
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
                    <BigBlogContainer>
                        <BlogFlyingContainer>
                            <BlogConveyorBelt>
                                {BlogItems.map((blogItem) => (
                                    <FlyingBlog>{blogItem}</FlyingBlog>
                                ))}
                                {BlogItems.map((blogItem) => (
                                    <FlyingBlog>{blogItem}</FlyingBlog>
                                ))}
                            </BlogConveyorBelt>
                        </BlogFlyingContainer>

                        <BlogLinkContainer>
                            <TiltComponent colStart={2} colEnd={4} rowStart={2} rowEnd={8} backgroundColor={blue} />
                            <TiltComponent colStart={2} colEnd={4} rowStart={8} rowEnd={30} backgroundColor={yellow} />

                            <TiltComponent colStart={4} colEnd={20} rowStart={2} rowEnd={18} backgroundColor={red} />
                            <TiltComponent colStart={4} colEnd={12} rowStart={18} rowEnd={30} backgroundColor={white} ><BlogLink fontSize={3.2} mobileFontSize={2} color={background} href={'/blogs'} style={{ transform: "rotate(90deg);" }}>JIUFEN</BlogLink></TiltComponent>
                            <TiltComponent colStart={12} colEnd={20} rowStart={18} rowEnd={24} backgroundColor={white} />
                            <TiltComponent colStart={12} colEnd={28} rowStart={24} rowEnd={30} backgroundColor={blue} />

                            <TiltComponent colStart={20} colEnd={28} rowStart={2} rowEnd={5} backgroundColor={white} />
                            <TiltComponent colStart={20} colEnd={24} rowStart={5} rowEnd={13} backgroundColor={white} />
                            <TiltComponent colStart={24} colEnd={28} rowStart={5} rowEnd={13} backgroundColor={yellow} />
                            <TiltComponent colStart={20} colEnd={28} rowStart={13} rowEnd={21} backgroundColor={white} ><BlogLink fontSize={4} mobileFontSize={2} color={background} href={'/blogs'} style={{ marginTop: "15rem" }}>HUA LIEN</BlogLink></TiltComponent>
                            <TiltComponent colStart={20} colEnd={28} rowStart={21} rowEnd={24} backgroundColor={red} ></TiltComponent>

                            <TiltComponent colStart={28} colEnd={42} rowStart={2} rowEnd={3} backgroundColor={white} />
                            <TiltComponent colStart={28} colEnd={42} rowStart={3} rowEnd={15} backgroundColor={blue}>

                            </TiltComponent>
                            <TiltComponent colStart={28} colEnd={35} rowStart={15} rowEnd={23} backgroundColor={white} />
                            <TiltComponent colStart={35} colEnd={42} rowStart={15} rowEnd={23} backgroundColor={red} />
                            <TiltComponent colStart={28} colEnd={38} rowStart={23} rowEnd={24} backgroundColor={white} />
                            <TiltComponent colStart={38} colEnd={42} rowStart={23} rowEnd={30} backgroundColor={white} />
                            <TiltComponent colStart={28} colEnd={38} rowStart={24} rowEnd={30} backgroundColor={white} />

                            <TiltComponent colStart={42} colEnd={48} rowStart={2} rowEnd={6} backgroundColor={white} />
                            <TiltComponent colStart={42} colEnd={48} rowStart={6} rowEnd={17} backgroundColor={white} />
                            <TiltComponent colStart={42} colEnd={48} rowStart={17} rowEnd={25} backgroundColor={white} />
                            <TiltComponent colStart={42} colEnd={48} rowStart={25} rowEnd={30} backgroundColor={yellow}><BlogLink fontSize={3.5} mobileFontSize={2} color={background} href={'/blogs'} >ZOO</BlogLink></TiltComponent>

                            <TiltComponent colStart={48} colEnd={50} rowStart={2} rowEnd={10} backgroundColor={blue} />
                            <TiltComponent colStart={48} colEnd={50} rowStart={10} rowEnd={16} backgroundColor={white} />
                            <TiltComponent colStart={48} colEnd={50} rowStart={16} rowEnd={20} backgroundColor={white} />
                            <TiltComponent colStart={48} colEnd={50} rowStart={20} rowEnd={30} backgroundColor={red} />
                        </BlogLinkContainer>
                    </BigBlogContainer>


                    <FoodLinkContainer>
                        <FoodConveyorBeltContainer >
                            <FoodConveyorBelt >
                                <FoodConveyorBeltH1>
                                    {foodItems3.map((foodItem) => (
                                        <FoodLink2 color={foodItem.color} href={"/food"}>{foodItem.name}</FoodLink2>
                                    ))}
                                </FoodConveyorBeltH1>

                                <FoodConveyorBeltH1>
                                    {foodItems3.map((foodItem) => (
                                        <FoodLink2 color={foodItem.color} href={"/food"}>{foodItem.name}</FoodLink2>
                                    ))}
                                </FoodConveyorBeltH1>
                            </FoodConveyorBelt>
                        </FoodConveyorBeltContainer>
                    </FoodLinkContainer>



                    <FoodTitleContainer>
                        <FoodTitle href="/food">
                            FOOD
                        </FoodTitle>
                    </FoodTitleContainer>





                    <FoodLinkContainer>
                        <FoodConveyorBeltContainer >
                            <FoodConveyorBelt  >
                                <FoodConveyorBeltH1>
                                    {foodItems4.map((foodItem) => (
                                        <FoodLink2 color={foodItem.color} href={"/food"}>{foodItem.name}</FoodLink2>
                                    ))}
                                </FoodConveyorBeltH1>

                                <FoodConveyorBeltH1>
                                    {foodItems4.map((foodItem) => (
                                        <FoodLink2 color={foodItem.color} href={"/food"}>{foodItem.name}</FoodLink2>
                                    ))}
                                </FoodConveyorBeltH1>


                            </FoodConveyorBelt>
                        </FoodConveyorBeltContainer>
                    </FoodLinkContainer>


                </QuickLinksSection>

                <CountdownSection>
                    <CountdownSectionTitle>
                        - Time Left In Taiwan -
                    </CountdownSectionTitle>
                    <CountdownContainer>
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

export default DumpPage;