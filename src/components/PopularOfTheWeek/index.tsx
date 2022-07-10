import {
  Container,
  Divider,
  LeftColumn,
  RightColumn,
  PopularContainer,
  SectionTitle,
  Popular,
  PopularHeader,
  Title,
  Button,
  Artist,
  ArtistName,
  ArtValue,
} from "./styles";

export function PopularOfTheWeek() {
  return (
    <Container>
      <SectionTitle>
        <p>Populares&nbsp;</p> da semana
      </SectionTitle>
      <PopularContainer>
        <LeftColumn>
          <Popular>
            <PopularHeader>
              <Title>Astronauta 1</Title>
              <Button></Button>
            </PopularHeader>
            <Artist>
              <ArtistName>Mayk Brito</ArtistName>
              <ArtValue>1.50 RKT</ArtValue>
            </Artist>
          </Popular>
          <Popular>
            <PopularHeader>
              <Title>Astronauta 3</Title>
              <Button></Button>
            </PopularHeader>
            <Artist>
              <ArtistName>João Inácio</ArtistName>
              <ArtValue>3.75 RKT</ArtValue>
            </Artist>
          </Popular>
        </LeftColumn>
        <Divider />
        <RightColumn>
          <Popular>
            <PopularHeader>
              <Title>Astronauta 2</Title>
              <Button></Button>
            </PopularHeader>
            <Artist>
              <ArtistName>Jakeliny Gracielly</ArtistName>
              <ArtValue>2.0 RKT</ArtValue>
            </Artist>
          </Popular>
          <Popular>
            <PopularHeader>
              <Title>Astronauta 4</Title>
              <Button></Button>
            </PopularHeader>
            <Artist>
              <ArtistName>Tamires Santos</ArtistName>
              <ArtValue>4.30 RKT</ArtValue>
            </Artist>
          </Popular>
        </RightColumn>
      </PopularContainer>
    </Container>
  );
}
