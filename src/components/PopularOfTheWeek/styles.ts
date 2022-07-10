import styled from "styled-components";

export const Container = styled.div`
  width: 1277px;
  height: 937px;

  margin-top: 150px;
`;

export const PopularContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 158px;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */

  width: 638.5px;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */

  width: 638.5px;
`;

export const SectionTitle = styled.div`
  display: flex;

  font-size: 50px;
  font-weight: bold;
  line-height: 61px;

  p {
    color: var(--color-logo);
  }
`;

export const Divider = styled.hr`
  height: 718px;
`;

export const Popular = styled.div`
  display: flex;
  flex-direction: column;

  width: 377px;
`;

export const PopularHeader = styled.div``;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 500;

  line-height: 37px;
`;

export const Button = styled.div``;

export const Artist = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const ArtistName = styled.div`
  font-size: 20px;
  font-weight: 600;

  line-height: 25px;
`;

export const ArtValue = styled.div`
  font-size: 20px;
  font-weight: 600;

  line-height: 25px;

  color: var(--color-logo);
`;
