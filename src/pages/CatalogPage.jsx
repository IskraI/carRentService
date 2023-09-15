import React from 'react';
import CarList from '../components/CarList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Filter from '../components/Filter/Filter';
import {
  selectIsLoading,
  selectError,
  selectCars,
} from '../redux/cars-selector';
import { fetchCars } from 'redux/cars-operation';
import { SectionCatalog } from './CatalogPage.styled';
import { Container } from '../pages/HomePage.styled';

const Catalog = () => {
  const cars = useSelector(selectCars);
  const error = useSelector(selectError);

  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <SectionCatalog>
      {cars?.length !== 0 && (
        <>
          <Filter />
          <CarList cars={cars} />
        </>
      )}
      {error && cars?.length === 0 && <p>{error}</p>}
      {!isLoading && !error && cars.length === 0 && (
        <p>
          There is no contacts yet. Use the form above to add your first
          contact.
        </p>
      )}
      {cars?.length === 0 && isLoading && <>Load</>}
    </SectionCatalog>
  );
};

export default Catalog;
