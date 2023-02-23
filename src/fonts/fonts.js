import { createGlobalStyle } from 'styled-components';

import ApercuArabicPro from './ApercuArabicPro-Regular.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'ApercuArabicPro';
    src: local('ApercuArabicPro'), url(${ApercuArabicPro}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
`
