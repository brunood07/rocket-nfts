import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1277px;
  height: 50px;

  margin-top: 57px;
`;

export const NavContainer = styled.nav``;

export const NavOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 341px;

  list-style-type: none;

  a {
    cursor: pointer;
    transition: all 0.3s;

    :hover {
      opacity: 0.7;
    }
  }
`;

export const ConnectButton = styled.a`
  width: 230px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 15px;

  background-color: var(--text-color);
  color: var(--black-text);
  font-weight: bold;

  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
