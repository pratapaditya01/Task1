// src/components/PurchaseOptions.js
import React from 'react';
import styled from 'styled-components';

const PurchaseWrapper = styled.section`
  padding: 40px 20px;
  background-color: #f8f9fa;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007BFF;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const PurchaseOptions = () => (
  <PurchaseWrapper id="purchase">
    <h2>Purchase Options</h2>
    <p>Select your flavor and size:</p>
    <Button>Buy Now</Button>
  </PurchaseWrapper>
);

export default PurchaseOptions;
