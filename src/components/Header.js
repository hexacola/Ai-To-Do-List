import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-family: 'Bebas Neue', sans-serif;
  font-size: var(--title-large);
  color: var(--primary-yellow);
  text-shadow: 3px 3px 0px var(--primary-red);
  letter-spacing: 3px;
  margin: 0 0 0.5rem 0;
`;

const Subtitle = styled(motion.p)`
  font-family: 'Oswald', sans-serif;
  font-size: var(--text-medium);
  color: var(--secondary-cream);
  margin: 0;
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15
        }}
      >
        PRODUKTYVUMO ĮRANKIS
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Įveikite užduotis efektyviai naudodami dirbtinio intelekto pagalbą ir vykdymo režimą
      </Subtitle>
    </HeaderContainer>
  );
};

export default Header; 