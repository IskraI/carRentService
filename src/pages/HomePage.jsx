import React from 'react';
import { NavigationLink } from '../components/Navigation/Navigation.styled';
import { Title, Container } from './HomePage.styled';
import car from 'img/hero.jpg';

const Home = () => {
  return (
    <Container>
      <Title>Cars Rent Service</Title>

      <img src={car} alt="car" />
      <p>
        Car Rental Hub is your one-stop destination for hassle-free and
        convenient car rentals. Whether you're planning a business trip, a
        family vacation, or just need a temporary ride, we've got you covered.
        With a wide range of vehicles to choose from and a seamless booking
        process, we make renting a car easy and enjoyable.
      </p>
      <p>
        Why Choose Car Rental Hub: At Car Rental Hub, we believe that renting a
        car should be a straightforward and enjoyable experience. Our commitment
        to customer satisfaction, competitive rates, and a diverse fleet of
        well-maintained vehicles sets us apart as your trusted car rental
        partner. Don't compromise on your travel plans. Choose Car Rental Hub
        and experience the freedom and convenience of the open road. Book your
        car today and start your journey with confidence.
      </p>
      <div>
        <NavigationLink to="/catalog">Our cars</NavigationLink>
      </div>
    </Container>
  );
};

export default Home;
