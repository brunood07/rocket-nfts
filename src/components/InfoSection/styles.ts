import styled from "styled-components";

export const InfoSectionContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 1277px;
  height: 659px;

  border-bottom: 1px solid var(--subtitle-color);
`;

export const EncapsulationContainer = styled.div`
  display: flex;

  width: 1277px;
`;

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 194px;
  height: 559px;

  border-right: 1px solid var(--subtitle-color);
`;

export const Statistic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 660px;
`;

export const StatisticBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatisticNumber = styled.strong`
  font-size: 50px;
  font-weight: 500;
`;

export const StatisticType = styled.p`
  font-size: 20px;
  font-weight: 500;

  color: var(--subtitle-color);
`;

export const InformativeContainer = styled.div`
  width: 1081px;
`;

export const TextContainer = styled.div`
  width: 1081px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 68px;

  margin-bottom: 71px;
`;

export const InformativeText = styled.div`
  width: 435px;

  text-align: left;

  margin-top: 80px;

  font-size: 18px;
  font-weight: 400;

  line-height: 22px;

  margin-bottom: 63px;
`;

export const SeeMore = styled.a`
  padding-top: 63px;

  font-size: 18px;
  font-weight: 400;

  line-height: 22px;

  text-decoration: underline;

  cursor: pointer;
`;
