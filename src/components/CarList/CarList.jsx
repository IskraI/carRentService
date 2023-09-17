import React from 'react';
import CarItem from '../CarItem/CarItem';
import { SectionContainer, List } from './CarList.styled';

const CarList = ({ cars }) => {
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
