import React from "react";
import Navbar from "../../components/Navbar/NavbarIndex";
import { Container } from "./AboutPageStyles";
const AboutPage = () => {


    return (
        <>
            <Navbar linkColor={'#4a4e69'} backgroundColor={"#f5f5f5"} borderColor={"#4a4e69"} colorChange={true} />
            <Container>
                <div>About</div>
                <br />
                <div>Year 3 Information Engineer and Media Student</div>
                <div>Nanyang Technological University</div>
                <br />
                <div>Currently doing an internship at PenguinSmart in Taiwan </div>
                <br />
                <div>marcelyap31@gmail.com</div>
                <div>+65 97774671</div>
            </Container>

        </>

    );
}

export default AboutPage;