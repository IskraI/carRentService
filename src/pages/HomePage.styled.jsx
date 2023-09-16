import styled from '@emotion/styled';
import hero from '../img/ban_carent.jpg';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  max-width: 1240px;
`;

export const ContainerHero = styled.div`
  display: flex;
  background: linear-gradient(
      to left,
      rgba(44, 48, 47, 0.7),
      rgba(44, 48, 47, 0.4)
    ),
    url(${hero});

  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: calc(100vh - 45px);
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  text-transform: capitalize;
  line-height: 1.2;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: #b0c9c9;
`;
export const Hero = styled.div`
  padding: 50px 50px;
  width: 1240px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  text-align: left;
  margin-bottom: 24px;
  padding: 12px;
`;
export const TextHero = styled.p`
  color: #195858;

  font-weight: 600;
  font-style: italic;
  font-size: 32px;
`;

export const TextBlock = styled.div`
  position: absolute;
  bottom: 0;
`;

export const UL = styled.ul`
  display: flex;
  text-align: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;
export const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #9cb9b9;
  gap: 12px;
  align-items: center;
  margin: 0;
  padding: 20px;
`;
export const Link = styled.div``;
export const NavigLink = styled(NavLink)`
  padding: 8px 0px;
  border-radius: 36px;
  font-weight: 700;
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  text-align: center;
  color: #b0c9c9;
  transition: color 0.3s ease;
  &.active {
    color: #122e36;
  }
  &:hover,
  &:focus {
    color: #122e36;
  }
`;
