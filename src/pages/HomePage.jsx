import React from 'react';
import {
  Title,
  ContainerHero,
  Hero,
  TextHero,
  TitleBlock,
  TextBlock,
  UL,
  Li,
  Link,
  NavigLink,
} from './HomePage.styled';

const Home = () => {
  return (
    <ContainerHero>
      <Hero>
        <TitleBlock>
          <Title>Cars Rent Service</Title>
          <TextHero>Better journeys, with us</TextHero>
          <Link>
            <NavigLink to="/catalog">Find cars</NavigLink>
          </Link>
        </TitleBlock>
        <TextBlock>
          <UL>
            <Li>
              <h3>Super flexible cancellation policy</h3>
              <p>No cancellation fees, just full cash refunds</p>
            </Li>
            <Li>
              <h3>Closer to you</h3>
              <p>Locations in 170 cities</p>
            </Li>
            <Li>
              <h3>Preferred loyalty</h3>
              <p>Priority service, free voucher & dedicated app</p>
            </Li>
            <Li>
              <h3>Speedy QuickPass</h3>
              <p>Time-saving free pre-registration service</p>
            </Li>
          </UL>
        </TextBlock>
      </Hero>
    </ContainerHero>
  );
};

export default Home;
