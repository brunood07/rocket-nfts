import { Footer } from "../../components/Footer";
import { Gallery } from "../../components/Gallery";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { InfoSection } from "../../components/InfoSection";
import { PopularOfTheWeek } from "../../components/PopularOfTheWeek";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <Gallery />
      <InfoSection />
      <PopularOfTheWeek />
      <Footer />
    </Container>
  );
}
