import { ArtistCardContainer, Content, Information } from "./styles";

interface ArtistCardProps {
  artistName: string;
  numberOfPhotos: string;
  img: string;
}

export function ArtistCard({
  artistName,
  img,
  numberOfPhotos,
}: ArtistCardProps) {
  return (
    <ArtistCardContainer>
      <Content>
        <img src={img} alt={artistName} />
        <Information>
          <strong>{artistName}</strong>
          <p>{numberOfPhotos}</p>
        </Information>
      </Content>
    </ArtistCardContainer>
  );
}
