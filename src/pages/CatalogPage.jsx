import React from 'react';
import axios from 'axios';
import CarList from '../components/CarList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Filter from '../components/Filter/Filter';
import {
  selectIsLoading,
  selectError,
  selectCars,
} from '../redux/cars-selector';
import { fetchCars } from 'redux/cars-operation';
import { SectionCatalog, LoadMoreBtn } from './CatalogPage.styled';
import { Container } from '../pages/HomePage.styled';
import { setTotalCars } from '../redux/totalCarsSlice';
import { selectTotalCars } from '../redux/totalCarsSlice';
import { getTotalCars } from '../api/carsApi';

const Catalog = () => {
  const cars = useSelector(selectCars);
  const error = useSelector(selectError);
  const totalCars = useSelector(selectTotalCars);

  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const total = await getTotalCars();

        dispatch(setTotalCars(total));
      } catch (error) {
        console.error('Error fetching total cars:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (prevPage !== page) {
      dispatch(fetchCars(page));
      setPrevPage(page);
    }
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  console.log('cars.length', cars.length);
  console.log('totalCars.length', totalCars.length);
  return (
    <Container>
      <SectionCatalog>
        {cars?.length !== 0 && (
          <>
            {/* <Filter /> */}
            <CarList cars={cars} />
          </>
        )}
        {totalCars.length > cars.length && (
          <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
        )}
        {/* <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn> */}
        {error && cars?.length === 0 && <p>{error}</p>}
        {!isLoading && !error && cars.length === 0 && (
          <p>
            There is no contacts yet. Use the form above to add your first
            contact.
          </p>
        )}
        {cars?.length === 0 && isLoading && <>Load</>}
      </SectionCatalog>
    </Container>
  );
};

export default Catalog;
