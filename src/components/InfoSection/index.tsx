import BannerIMG from "../../assets/banner.png";

import {
  EncapsulationContainer,
  InfoSectionContainer,
  StatisticsContainer,
  Statistic,
  StatisticNumber,
  StatisticType,
  StatisticBox,
  InformativeContainer,
  TextContainer,
  InformativeText,
  SeeMore,
} from "./styles";

export function InfoSection() {
  return (
    <InfoSectionContainer>
      <EncapsulationContainer>
        <StatisticsContainer>
          <Statistic>
            <StatisticBox>
              <StatisticNumber>10K+</StatisticNumber>
              <StatisticType>Artes</StatisticType>
            </StatisticBox>
            <StatisticBox>
              <StatisticNumber>200+</StatisticNumber>
              <StatisticType>Vendas</StatisticType>
            </StatisticBox>
            <StatisticBox>
              <StatisticNumber>20</StatisticNumber>
              <StatisticType>Artistas</StatisticType>
            </StatisticBox>
          </Statistic>
        </StatisticsContainer>
        <InformativeContainer>
          <TextContainer>
            <div>
              <InformativeText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
                malesuada amet pretium lacus. Id potenti diam et cras odio
                viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis
                nunc semper.
              </InformativeText>
              <SeeMore>Lorem ipsum</SeeMore>
            </div>
            <div>
              <InformativeText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
                malesuada amet pretium lacus. Id potenti diam et cras odio
                viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis
                nunc semper.
              </InformativeText>
              <SeeMore>Lorem ipsum</SeeMore>
            </div>
          </TextContainer>
          <img src={BannerIMG} alt="" />
        </InformativeContainer>
      </EncapsulationContainer>
    </InfoSectionContainer>
  );
}
