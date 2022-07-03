import { Gallery } from "../../components/Gallery";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <Gallery />
    </Container>
  );
}
