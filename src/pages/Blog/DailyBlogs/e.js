import React, { useLayoutEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const App = () => {
    const [show, doShow] = useState({
        itemThree: false,
    })
    const [percentShown, setPercentShow] = useState({
        itemThree: 0,
    })
    const refThree = useRef(null)

    useLayoutEffect(() => {
        const topPos = (element) => element.getBoundingClientRect().top
        const getHeight = (element) => element.offsetHeight
        const div3Pos = topPos(refThree.current)

        const div3Height = getHeight(refThree.current)

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight

            if (div3Pos < scrollPos) {
                // Element scrolled to
                doShow((state) => ({ ...state, itemThree: true }))

                let itemThreePercent = ((scrollPos - div3Pos) * 100) / div3Height
                if (itemThreePercent > 100) itemThreePercent = 100
                if (itemThreePercent < 0) itemThreePercent = 0

                setPercentShow((prevState) => ({
                    ...prevState,
                    itemThree: itemThreePercent,
                }))
            } else if (div3Pos > scrollPos) {
                // Element scrolled away (up)
                doShow((state) => ({ ...state, itemThree: false }))
            }
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    return (
        <>
            <p>scroll down</p>
            <Wrapper>
                <Div
                    animate={show.itemThree}
                    animatePercent={percentShown.itemThree}
                    ref={refThree}
                >
                    <p>tag here</p>
                    <p>tag here</p>
                    <p>tag here</p>
                    <p>tag here</p>
                </Div>
            </Wrapper>
        </>
    )
}

const Div = styled.div.attrs({
    style: ({ animatePercent }) => ({
        opacity: animatePercent ? animatePercent / 100 : 1,
    }),
})`
  height: 900px;
  width: 300px;
  background-color: red;
  transform: translateX(${({ animate }) => (animate ? '0' : '-100vw')});
  transition: transform 1s;
  margin: 20px;
  opacity: ${({ animatePercent }) =>
        animatePercent ? `${animatePercent / 100}` : `1`};
`

const Wrapper = styled.div`
  margin-top: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
`

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)