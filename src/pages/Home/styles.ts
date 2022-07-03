import styled from "styled-components";

import backgroundIMG from "../../assets/background.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-image: url(${backgroundIMG});
  background-size: cover;
`;
