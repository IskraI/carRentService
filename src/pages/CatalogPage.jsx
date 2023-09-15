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
import { getTotalCars } from '../api/carsApi';

const Catalog = () => {
  const cars = useSelector(selectCars);
  // const [visibleCars, setVisibleCars] = useState(8);
  const error = useSelector(selectError);

  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCars(1));
  // }, []);

  // const loadMore = () => {
  //   setVisibleCars(prevVisibleCars => prevVisibleCars + 8);
  // };

  const totalCars = cars.length;

  console.log('totalCars', totalCars);
  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  useEffect(() => {
    if (prevPage !== page) {
      dispatch(fetchCars(page));
      setPrevPage(page);
    }
  }, [page]);

  // const getCars = async page => {
  //   setIsLoading(true);
  //   try {
  //     const cars = await CarsService.getAdverts(page);

  //     setCars(prevCars => [...prevCars, ...cars]);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <SectionCatalog>
      {cars?.length !== 0 && (
        <>
          {/* <Filter /> */}
          <CarList cars={cars} />
        </>
      )}
      {/* {visibleCars < cars.length && (
        <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
      )} */}
      <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
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
