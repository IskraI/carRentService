import React from 'react';
import CarItem from '../CarItem/CarItem';
// import {  useSelector } from 'react-redux';

// import {  selectFilter } from 'redux/cars-selector';
import { SectionContainer, List } from './CarList.styled';

// const getVisibleCars = (cars, filter) => {
//   const normalizedFilter = filter.toLowerCase().trim();
//   return cars
//     .filter(car => car.name.toLowerCase().includes(normalizedFilter))
//     .sort((a, b) => a.name.localeCompare(b.name));
// };

const CarList = ({ cars }) => {
  // const cars = useSelector(selectCars);
  // const filter = useSelector(selectFilter);
  // const visibleCars = getVisibleCars(cars, filter);

  return (
    <SectionContainer>
      <List>
        {cars.map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </List>
    </SectionContainer>
  );
};
export default CarList;
