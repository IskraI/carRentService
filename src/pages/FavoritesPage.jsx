import React from 'react';
import { useSelector } from 'react-redux';
import CarList from '../components/CarList/CarList';
import { selectTotalCars } from '../redux/totalCars-slice';
import { Title, Container } from './HomePage.styled';

const Favorites = () => {
  const totalCars = useSelector(selectTotalCars);
  const favorite = useSelector(state => state.favorite);
  const favoriteCars = totalCars.filter(car => favorite.includes(car.id));

  return (
    <Container>
      <Title>My favorites cars</Title>

      <CarList cars={favoriteCars} />
    </Container>
  );
};

export default Favorites;
