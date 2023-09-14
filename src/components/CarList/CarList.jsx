import React from 'react';
import CarItem from '../Car/Car';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Filter from '../Filter/Filter';
import { selectCars, selectFilter } from 'redux/cars-selector';
import { fetchCars } from 'redux/cars-operation';
import { nanoid } from 'nanoid';
import { SectionContainer, List } from './CarList.styled';

// const getVisibleCars = (cars, filter) => {
//   const normalizedFilter = filter.toLowerCase().trim();
//   return cars
//     .filter(car => car.name.toLowerCase().includes(normalizedFilter))
//     .sort((a, b) => a.name.localeCompare(b.name));
// };

const CarList = () => {
  const cars = useSelector(selectCars);
  const filter = useSelector(selectFilter);
  // const visibleCars = getVisibleCars(cars, filter);

  return (
    <SectionContainer>
      <Filter />
      <List>
        {cars.map(car => (
          <CarItem
            key={nanoid()}
            car={car}
            // model={car.model}
            // make={car.make}
            // year={car.year}
            // rentalPrice={car.rentalPrice}
            // isFavorite={car.isFavorite}
            // address={car.address}
            // rentalCompany={car.rentalCompany}
            // functionalities={car.functionalities}
            // id={car.id}
            // type={car.type}
            // img={car?.img}
            // fuelConsumption={car.fuelConsumption}
            // engineSize={car.engineSize}
            // description={car.description}
            // accessories={car.accessories}
            // rentalConditions={car.rentalConditions}
            // mileage={car.mileage}
          />
        ))}
      </List>
    </SectionContainer>
  );
};
export default CarList;
