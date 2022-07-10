import styled from "styled-components";

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 193px;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const Link = styled.a`
  font-size: 20px;

  color: var(--subtitle-color);

  text-decoration: none;

  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
