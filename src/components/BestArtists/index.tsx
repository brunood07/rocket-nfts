import { ArtistCard } from "../ArtistCard";
import {
  ArtistsContainer,
  BestArtistsContainer,
  SeeMore,
  Title,
} from "./styles";

import art1 from "../../assets/artista-1.png";
import art2 from "../../assets/artista-2.png";
import art3 from "../../assets/artista-3.png";
import art4 from "../../assets/artista-4.png";
import art5 from "../../assets/artista-5.png";
import art6 from "../../assets/artista-6.png";

import arrowImg from "../../assets/arrow-orange.svg";

export function BestArtists() {
  return (
    <BestArtistsContainer>
      <Title>
        <span>Melhores</span>
        <p>artistas</p>
      </Title>

      <ArtistsContainer>
        <ArtistCard
          artistName="Mayk Brito"
          numberOfPhotos="80 Fotogragias"
          img={art1}
        />

        <ArtistCard
          artistName="Jakeliny G."
          numberOfPhotos="99 Fotogragias"
          img={art2}
        />

        <ArtistCard
          artistName="João I. (Biro)"
          numberOfPhotos="50 Fotogragias"
          img={art3}
        />

        <ArtistCard
          artistName="Tamires Santos"
          numberOfPhotos="43 Fotogragias"
          img={art4}
        />

        <ArtistCard
          artistName="Ana Silva"
          numberOfPhotos="28 Fotogragias"
          img={art5}
        />

        <ArtistCard
          artistName="Diego F."
          numberOfPhotos="20 Fotogragias"
          img={art6}
        />
      </ArtistsContainer>
      <SeeMore>
        <a href="#">
          Ver todos os artistas
          <img src={arrowImg} />
        </a>
      </SeeMore>
    </BestArtistsContainer>
  );
}
