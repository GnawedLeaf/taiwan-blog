import Tilt from 'react-parallax-tilt';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';


const TiltComponent = (props) => {

    const tiltRef = useRef(null);

    useEffect(() => {
        // animate the tilt on mount
        gsap.to(tiltRef.current, { duration: 1, rotateX: '20deg', rotateY: '20deg' });
    }, []);

    return (
        <Tilt glareEnable={true} tiltMaxAngleX={30}
            tiltMaxAngleY={30} perspective={500} tiltReverse={true}
            glareColor={"rgb(245,245,245)"} style={{ gridColumn: `${props.colStart} / ${props.colEnd}`, gridRow: `${props.rowStart} / ${props.rowEnd}`, background: props.backgroundColor, }} >
            {props.children}
        </Tilt>
    )
}

export default TiltComponent;
