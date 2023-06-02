/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import MulishBoldWoff from './Mulish-Bold.woff';
import MulishBoldWoff2 from './Mulish-Bold.woff2';
import MulishRegularWoff from './Mulish-Regular.woff';
import MulishRegularWoff2 from './Mulish-Regular.woff2';
import MulishSemiBoldWoff from './Mulish-SemiBold.woff';
import MulishSemiBoldWoff2 from './Mulish-SemiBold.woff2';

export const MulishFonts = createGlobalStyle`
    @font-face {
    font-family: 'Mulish';
    src: local('Mulish'),
      url(${MulishRegularWoff}) format('woff'),
      url(${MulishRegularWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Mulish';
    src: local('Mulish'),
      url(${MulishSemiBoldWoff}) format('woff'),
      url(${MulishSemiBoldWoff2}) format('woff2');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Mulish';
    src: local('Mulish'),
      url(${MulishBoldWoff}) format('woff'),
      url(${MulishBoldWoff2}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${normalize}
`;
