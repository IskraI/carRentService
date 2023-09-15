import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import {
  CarImg,
  CarImgWrap,
  InfoWrapper,
  Item,
  MainInfo,
  CarInfo,
  CarText,
  ModelBlue,
  SecondaryInfo,
  SecondaryCarText,
  LearnMoreBtn,
  HeartIcon,
  IconBtn,
  HeartIconBlue,
} from './CarItem.styled';

import {
  addFavoriteList,
  removeFavoriteList,
} from '../../redux/favorite-slice';
import Modal from '../Modal/Modal';

const CarItem = ({ car }) => {
  const dispatch = useDispatch();

  const {
    model,
    make,
    id,
    img,
    year,
    address,
    rentalPrice,
    rentalCompany,
    type,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
  } = car;
  const favorite = useSelector(state => state.favorite);
  console.log('favorite', favorite);
  const followStatus = favorite.includes(id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const incrementFavorite = () => {
    dispatch(addFavoriteList(id));
  };
  const decrementFavorite = () => {
    dispatch(removeFavoriteList(id));
  };

  const addressParts = car.address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];

  // const firstFunctionality = functionalities[0];

  return (
    <Item>
      <CarImgWrap>
        <CarImg src={img} alt={make} />
        <IconBtn
          onClick={!followStatus ? incrementFavorite : decrementFavorite}
          type="button"
        >
          {!followStatus ? <HeartIcon /> : <HeartIconBlue />}
        </IconBtn>
      </CarImgWrap>
      <InfoWrapper>
        <MainInfo>
          <CarInfo>
            <CarText>{make}</CarText>
            <ModelBlue>
              {model}
              <span style={{ color: 'black' }}>,</span>
            </ModelBlue>
            <CarText>{year}</CarText>
          </CarInfo>
          <CarText>{rentalPrice}</CarText>
        </MainInfo>
        <SecondaryInfo>
          <SecondaryCarText>{city}</SecondaryCarText>
          <SecondaryCarText>{country}</SecondaryCarText>
          <SecondaryCarText>{rentalCompany}</SecondaryCarText>
          <SecondaryCarText>{type}</SecondaryCarText>
          <SecondaryCarText>{make}</SecondaryCarText>
          <SecondaryCarText>{id}</SecondaryCarText>
          {/* <SecondaryCarText>{firstFunctionality}</SecondaryCarText> */}
        </SecondaryInfo>
        <LearnMoreBtn onClick={openModal}>Learn more</LearnMoreBtn>
        {isModalOpen && (
          <Modal
            onClose={closeModal}
            key={id}
            model={model}
            make={make}
            year={year}
            rentalPrice={rentalPrice}
            address={address}
            rentalCompany={rentalCompany}
            functionalities={functionalities}
            id={id}
            type={type}
            img={img}
            fuelConsumption={fuelConsumption}
            engineSize={engineSize}
            description={description}
            accessories={accessories}
            rentalConditions={rentalConditions}
            mileage={mileage}
          />
        )}
      </InfoWrapper>
    </Item>
  );
};

CarItem.propTypes = {
  car: PropTypes.object.isRequired,
};
export default CarItem;
