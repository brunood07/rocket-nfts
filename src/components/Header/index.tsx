import LogoSVG from "../../assets/logo.svg";
import MetaMaskSVG from "../../assets/logo_MetaMask.svg";

import {
  ConnectButton,
  HeaderContainer,
  NavContainer,
  NavOptions,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoSVG} alt="Imagem de logo Escrito Rocket NFTs" />
      <NavContainer>
        <div>
          <NavOptions>
            <li>
              <a>Comprar NFT</a>
            </li>
            <li>
              <a>Sobre</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </NavOptions>
        </div>
      </NavContainer>
      <ConnectButton>
        <img src={MetaMaskSVG} alt="" />
        Conectar carteira
      </ConnectButton>
    </HeaderContainer>
  );
}
