import React from 'react';

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
import { setTotalCars, selectTotalCars } from '../redux/totalCars-slice';
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

  return (
    <Container>
      {isLoading ||
        (cars?.length !== 0 ? (
          <>
            {/* <Filter /> */}
            <CarList cars={cars} />

            {totalCars.length > cars.length && (
              <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
            )}
          </>
        ) : (
          <p>There is no cars</p>
        ))}

      {error && <p>{error}</p>}
    </Container>
  );
};

export default Catalog;
