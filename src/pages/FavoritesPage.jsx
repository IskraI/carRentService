import React from 'react';
import { useSelector } from 'react-redux';
import CarList from '../components/CarList/CarList';
import { selectCars } from '../redux/cars-selector';

const Favorites = () => {
  const cars = useSelector(selectCars);
  const favorite = useSelector(state => state.favorite);
  const favoriteCars = cars.filter(car => favorite.includes(car.id));
  return (
    <>
      <h2>My favorites cars</h2>

      <CarList cars={favoriteCars} />
    </>
  );
};

export default Favorites;
