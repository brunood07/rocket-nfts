import styled from "styled-components";

export const BestArtistsContainer = styled.div`
  width: 1277px;
`;

export const ArtistsContainer = styled.div`
  width: 1277px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 111px;
`;

export const Title = styled.div`
  width: 1277px;
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 15px;

  margin: 120px 0;

  font-size: 50px;
  font-weight: bold;

  p {
    color: var(--color-logo);
  }
`;

export const SeeMore = styled.div`
  width: 1277px;
  display: flex;

  align-items: center;
  justify-content: center;

  margin-top: 120px;

  a {
    display: flex;
    gap: 20px;
    cursor: pointer;

    font-size: 20px;
  }
`;
