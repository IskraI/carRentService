import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  list-style: none;
  padding: 0 50px;
  margin: auto;
  display: flex;
  width: 1240px;

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
  color: #727f83;
  transition: color 0.3s ease;
  &:last-child {
    margin-left: auto;
  }
  &.active {
    color: #15687f;
  }

  &:hover,
  &:focus {
    color: #15687f;
  }
`;
