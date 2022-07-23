import styled from "styled-components";

export const ArtistCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 150px;

  background-color: var(--card-color);

  transition: all 0.3s;

  &:hover {
    background-color: var(--color-logo);
    color: #fff;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 0 32px;

  img {
    width: 100px;
    height: 100px;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: left;

  gap: 10px;

  p {
    font-size: 20px;
    font-weight: medium;
    color: #fff;
  }

  strong {
    font-size: 20px;
    font-weight: medium;
    color: #fff;
  }
`;
