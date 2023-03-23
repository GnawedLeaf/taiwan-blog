import Tilt from 'react-parallax-tilt';
import React from 'react';


const TiltComponent = (props) => {



    return (
        <Tilt glareEnable={true} tiltMaxAngleX={20}
            tiltMaxAngleY={20} perspective={1000} tiltReverse={true}
            glareColor={"rgb(245,245,245)"} style={{ gridColumn: `${props.colStart} / ${props.colEnd}`, gridRow: `${props.rowStart} / ${props.rowEnd}`, background: props.backgroundColor, }} >
            {props.children}
        </Tilt>
    )
}

export default TiltComponent;
