import React from 'react';
// import {  } from 'styled-components';
import { ThemeProvider, LayoutProvider } from 'elemental-react';

const fontSizes = [96, 60, 48, 34, 24, 20, 16, 14];
const [h1, h2, h3, h4, h5, h6] = fontSizes;

const roundTo = function (target, num) {
  var resto = target % num;
  if (resto <= (num / 2)) {
    return target - resto;
  } else {
    return target + num - resto;
  }
}

const lineHeights = [h1, h2, h3, h4, h5, h6].map(n => roundTo(Math.abs(n * 1.15), 4));

fontSizes.h1 = h1;


const getWidth = () => {
  if (typeof window === 'undefined') {
    // Node/SSR environment builds for mobile width
    return 360;
  }
  if (window.innerWidth) {
    return window.innerWidth;
  }

  if (document.documentElement && document.documentElement.clientWidth) {
    return document.documentElement.clientWidth;
  }

  if (document.body) {
    return document.body.clientWidth;
  }
};

const getBreakpoint = (width) => {
  switch (width) {
    case width <= 360: {
      return 0;
    }
    case width <= 760: {
      return 1;
    }
    default: {
      return 2;
    }
  }
}

export default ({ element }) => {
  const breakpoint = getBreakpoint(getWidth());

  return (
    <ThemeProvider theme={{
      fontSizes,
      lineHeights,
      fontFamily: {
        primary: 'Helvetica',
        secondary: 'Helvetica'
      }
    }}>
      <LayoutProvider breakpoint={breakpoint}>
        {element}
      </LayoutProvider>
    </ThemeProvider>
  )
}
