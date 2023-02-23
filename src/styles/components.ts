import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
`

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  color: #3E3E3E;
    
`

export const Textarea = styled.textarea`
  font-family: 'ApercuArabicPro';
  resize: none;
  background: #FFFFFF;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  height: 189px;
  padding-top: 31px;
  padding-left: 46px;
  padding-right: 46px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 180%;
  color: #2D2D2D;
`



export const Footer = styled.footer`
  position: relative;
  background: #FAFAFA;
  border: 1px solid #D8D8D8;
  min-height: 130px;
  /* z-index: -1; */
`

export const FooterWrapepr = styled.div`
  min-height: 130px;
  display: flex;
  align-items: center;
  padding-left: 30%;
  & :nth-child(-n + 3) {
    padding-right: 25px;
  }
`
