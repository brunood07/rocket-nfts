import LogoSVG from "../../assets/logo.svg";
import UpArrow from "../../assets/arrow-black.svg";
import InstagramLogo from "../../assets/instagram.svg";
import TwitterLogo from "../../assets/twitter.svg";
import YoutubeLogo from "../../assets/youtube.svg";
import EmailSVG from "../../assets/email.svg";

import {
  FooterContainer,
  NewsletterContainer,
  SectionOne,
  SectionThree,
  SectionTwo,
  SocialMediaContainer,
} from "./styles";
import { FooterLinks } from "../FooterLinks";

export function Footer() {
  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <FooterContainer>
      <SectionOne>
        <img src={LogoSVG} />
        <button onClick={handleScrollToTop}>
          <img src={UpArrow} />
        </button>
      </SectionOne>
      <SectionTwo>
        <NewsletterContainer>
          <p>Fique por dentro de</p>
          <strong>todas as novidades</strong>
          <div>
            <input placeholder="nft@rocketseat.com.br" />
            <button>Enviar</button>
          </div>
        </NewsletterContainer>
        <FooterLinks />
      </SectionTwo>
      <SectionThree>
        <a href="www.rocketseat.com.br">www.rocketseat.com.br</a>
        <SocialMediaContainer>
          <a>
            <img src={InstagramLogo} />
          </a>
          <a>
            <img src={YoutubeLogo} />
          </a>
          <a>
            <img src={TwitterLogo} />
          </a>
          <a>
            <img src={EmailSVG} />
          </a>
        </SocialMediaContainer>
      </SectionThree>
    </FooterContainer>
  );
}
