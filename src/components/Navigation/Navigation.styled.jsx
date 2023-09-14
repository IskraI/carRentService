import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 100px;

`;

export const NavigationLink = styled(NavLink)`
  padding: 8px 0px;
  border-radius: 36px;
  font-weight: 700;
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  text-align: center;
  color: #15687f;
  transition: color 0.3s ease;
  &.active {
    color: #727f83;
  }
  &:hover,
  &:focus {
    color: #727f83;
  }
`;
