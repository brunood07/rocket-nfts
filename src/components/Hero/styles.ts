import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 1277px;

  margin-top: 98px;
`;

export const ArtistsContainer = styled.div`
  width: 369px;

  p {
    font-size: 18px;
    font-weight: 400;

    line-height: 22px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 55px;
`;

export const NumberContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  font-size: 18px;
  font-weight: 400;

  line-height: 22px;

  margin-left: 6px;
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-right: 40px;
`;

export const TextSection = styled.div`
  p {
    font-size: 50px;
    font-weight: bold;

    line-height: 61px;

    color: var(--color-logo);
  }
`;

export const Section = styled.section`
  font-size: 50px;
  font-weight: bold;

  line-height: 61px;
`;
