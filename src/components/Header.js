import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--card-background);
  box-shadow: 0 4px 0 var(--primary-red);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, var(--primary-yellow), var(--primary-red), var(--primary-yellow));
    z-index: 5;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% -20%, rgba(178, 34, 34, 0.1), transparent 70%);
    z-index: 1;
    pointer-events: none;
  }
`;

const Title = styled(motion.h1)`
  font-family: 'Anton', sans-serif;
  font-size: 2.5rem;
  color: var(--primary-yellow);
  text-shadow: 4px 4px 0px var(--primary-red);
  letter-spacing: 3px;
  margin: 0;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
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

const Header = ({ children }) => {
  return (
    <HeaderContainer>
      {children}
    </HeaderContainer>
  );
};

export default Header; 