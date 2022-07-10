import { ColumnLinks } from "../ColumnLinks";
import { FooterLinksContainer } from "./styles";

const columnOne = {
  title: "Empresa",
  links: [
    {
      id: "1",
      displayName: "Sobre",
      href: "#",
    },
    {
      id: "2",
      displayName: "Serviços",
      href: "#",
    },
    {
      id: "3",
      displayName: "Time",
      href: "#",
    },
    {
      id: "4",
      displayName: "Carreira",
      href: "#",
    },
  ],
};

const columnTwo = {
  title: "Mapa",
  links: [
    {
      id: "5",
      displayName: "Galeria",
      href: "#",
    },
    {
      id: "6",
      displayName: "Populares",
      href: "#",
    },
    {
      id: "7",
      displayName: "Vendas",
      href: "#",
    },
    {
      id: "8",
      displayName: "Contato",
      href: "#",
    },
  ],
};

const columnThree = {
  title: "Links",
  links: [
    {
      id: "9",
      displayName: "FAQs",
      href: "#",
    },
    {
      id: "10",
      displayName: "Termos",
      href: "#",
    },
    {
      id: "11",
      displayName: "Política",
      href: "#",
    },
    {
      id: "12",
      displayName: "Ajuda",
      href: "#",
    },
  ],
};

export function FooterLinks() {
  return (
    <FooterLinksContainer>
      <ColumnLinks title={columnOne.title} links={columnOne.links} />
      <ColumnLinks title={columnTwo.title} links={columnTwo.links} />
      <ColumnLinks title={columnThree.title} links={columnThree.links} />
    </FooterLinksContainer>
  );
}
