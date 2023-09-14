import React from 'react';
import { Form, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavigationLink, Nav } from './Navigation.styled';

const Navigation = () => {
  const location = useLocation();
  return (
    <Nav>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/catalog">Catalog</NavigationLink>
      <NavigationLink to="/favorites">Favorites</NavigationLink>
    </Nav>
  );
};
export default Navigation;
