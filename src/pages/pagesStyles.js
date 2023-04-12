import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import Outfit from '../../src/fonts/Outfit.ttf';
import Unbounded from '../../src/fonts/Unbounded.ttf';

export const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Outfit';
  url(${Outfit}) format('ttf');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Unbounded';
  src:  url(${Unbounded}) format('ttf');
}

::-webkit-scrollbar {
  display: none;
}

::selection {
  background: #38BBE7;
  color: #f5f5f5; /* This sets the color of the highlighted text */
}

body {
  cursor: default;
  overflow-x: hidden;
  background: #f5f5f5;
}



`

export const CentralisingContainer = styled.div`
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`


