import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 709px;

  margin-top: 148px;

  background-color: var(--card-color);
`;

export const SectionOne = styled.div`
  width: 100%;
  height: 222px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 88px;

  button {
    width: 80px;
    height: 80px;

    background-color: var(--color-logo);

    transition: all 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const SectionTwo = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 320px;

  border-top: 1px solid var(--subtitle-color);
  border-bottom: 1px solid var(--subtitle-color);
`;

export const NewsletterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-right: 1px solid var(--subtitle-color);

  width: 38%;
  height: 320px;

  p {
    font-size: 30px;
    color: var(--text-color);
  }

  strong {
    font-size: 30px;
    color: var(--color-logo);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 25px;

    input {
      all: unset;
      width: 280px;
      height: 50px;

      padding: 0 25px;

      background-color: var(--body-background);
    }

    button {
      width: 122px;
      height: 50px;

      background-color: var(--text-color);
      color: var(--body-background);
      font-size: 20px;
      font-weight: bold;

      transition: all 0.3s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const SectionThree = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 190px;

  width: 100%;
  height: 167px;

  a {
    font-size: 20px;
    color: var(--subtitle-color);
    text-decoration: none;

    cursor: pointer;

    transition: all 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 270px;
`;
