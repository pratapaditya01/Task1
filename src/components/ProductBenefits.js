// src/components/ProductBenefits.js
import React from 'react';
import styled from 'styled-components';

const BenefitsWrapper = styled.section`
  padding: 40px 20px;
  background-color: #fff;
  text-align: center;
`;

const Benefit = styled.div`
  margin: 20px 0;
  font-size: 18px;
  color: #333;
`;

const ProductBenefits = () => (
  <BenefitsWrapper id="benefits">
    <h2>Benefits</h2>
    <Benefit>Enhances muscle growth</Benefit>
    <Benefit>Improves recovery time</Benefit>
    <Benefit>Boosts overall energy</Benefit>
    <Benefit>Promotes a healthy metabolism</Benefit>
  </BenefitsWrapper>
);

export default ProductBenefits;
