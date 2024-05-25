// src/components/HomePage.js
import React from 'react';
import styled from 'styled-components';
import ProductCarousel from './ProductCarousel';

const HomeWrapper = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const HomePage = () => (
  <HomeWrapper>
    <h2>Welcome to ProteinPlus</h2>
    <p>Discover our premium protein powders.</p>
    <ProductCarousel />
  </HomeWrapper>
);

export default HomePage;
