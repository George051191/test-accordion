/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import MulishBold from './Mulish-Bold.ttf';
import RobotoRegular from './Roboto-Regular.ttf';
import MulishRegular from './Mulish-Regular.ttf';

import MulishSemiBold from './Mulish-SemiBold.ttf';

export const MulishFonts = createGlobalStyle`
    @font-face {
    font-family: 'Mulish';
    src: local('Mulish-Regular'),
      url(${MulishRegular}) format('truetype');
    
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Mulish';
    src: local('Mulish'),
      url(${MulishSemiBold}) format('truetype');
   
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Mulish';
    src: local('Mulish-SemiBold'),
      url(${MulishBold}) format('truetype');
     
    font-weight: 700;
    font-style: normal;
  }
`;

export const Roboto = createGlobalStyle`
   @font-face {
    font-family: 'Roboto';
    src: local('Roboto'),
      url(${RobotoRegular}) format('truetype');
    
    font-weight: 400;
    font-style: normal;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${normalize}
`;
