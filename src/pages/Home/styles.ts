import styled from "styled-components";

import backgroundIMG from "../../assets/background.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;

  background-image: url(${backgroundIMG});
  background-size: cover;
`;
