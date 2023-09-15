import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1240px;
  margin: auto;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  text-transform: capitalize;
  line-height: 1.2;
  color: #1a4f4f;
`;
export const Hero = styled.section`
  padding: 50px 50px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 50px);
  margin: 0 auto;
  padding: 0 20px;
`;
export const TextHero = styled.p`
  color: #333;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;
export const Text = styled.p`
  color: #333;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;
export const TitleBlock = styled.div`
  display: flex;

  justify-content: space-between;
`;
export const TextBlock = styled.div`
  display: flex;
`;
