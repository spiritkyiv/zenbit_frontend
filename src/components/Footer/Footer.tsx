import React from "react";
import { Footer as StyledFooter, FooterWrapepr} from "../../styles/components";
import { CartoonImage } from "../CartoonImage";


export const Footer: React.FC = () => {
  return (
    <StyledFooter>
        <CartoonImage name='Group_80' right={7} top={-10} width={65} />
        <CartoonImage name='red_cartoon_4' right={-2} top={27} width={90} />
        <CartoonImage name='red_cartoon_6' right={80} top={0} width={200} />
      <FooterWrapepr>

        <a href="https://linkedin.com">
          <img src={require('../../images/icons/linkedIn.png')} alt="linkedIn" />
        </a>

        <a href="https://twitter.com">
          <img src={require('../../images/icons/twitter.png')} alt="twitter" />
        </a>

        <a href="https://facebook.com">
          <img src={require('../../images/icons/facebook.png')} alt="facebook" />
        </a>

        <a href="https://pinterest.com">
          <img src={require('../../images/icons/pinterest.png')} alt="pinterest" />
        </a>
      </FooterWrapepr>
     </StyledFooter>
  )
}
