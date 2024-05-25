// src/components/Ingredients.js
import React from 'react';
import styled from 'styled-components';

const IngredientsWrapper = styled.section`
  padding: 40px 20px;
  background-color: #f8f9fa;
  text-align: center;
`;

const Ingredient = styled.div`
  margin: 20px 0;
  font-size: 18px;
  color: #333;
`;

const Ingredients = () => (
  <IngredientsWrapper id="ingredients">
    <h2>Ingredients</h2>
    <Ingredient>Whey Protein Isolate</Ingredient>
    <Ingredient>Natural Flavors</Ingredient>
    <Ingredient>Stevia Extract</Ingredient>
    <Ingredient>Vitamins and Minerals Blend</Ingredient>
  </IngredientsWrapper>
);

export default Ingredients;
