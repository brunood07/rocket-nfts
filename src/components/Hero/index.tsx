import ArtistsIMG from "../../assets/group-avarts.png";
import BadgeIMG from "../../assets/badge.svg";

import {
  ArtistsContainer,
  BannerContainer,
  HeroContainer,
  ImageContainer,
  NumberContainer,
  Section,
  TextSection,
} from "./styles";

export function Hero() {
  return (
    <HeroContainer>
      <ArtistsContainer>
        <p>
          Mercado digital para colecionáveis em criptos e tokens não fungível
          (NFT). Compre, venda e descubra ativos digitais exclusivos para você.
        </p>
        <ImageContainer>
          <img src={ArtistsIMG} alt="" />
          <NumberContainer>
            <strong>+10</strong>
            <p>Artistas selecionados</p>
          </NumberContainer>
        </ImageContainer>
      </ArtistsContainer>
      <BannerContainer>
        <TextSection>
          <Section>Descubra a verdadeira</Section>
          <Section>arte digital e</Section>
          <Section>colecione diversas</Section>
          <p>NFTs</p>
        </TextSection>
        <img src={BadgeIMG} alt="" />
      </BannerContainer>
    </HeroContainer>
  );
}
