// ProductDetails.js
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailsWrapper = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: 200px;
  margin-bottom: 20px;
`;

const ProductDetails = () => {
  const { state } = useLocation();
  const { id } = useParams();

  if (!state) {
    return <p>No product details available.</p>;
  }

  const { image, purchaseOptions, reviews, ingredients, benefits } = state;

  return (
    <DetailsWrapper>
      <h2>Product Details for Product ID: {id}</h2>
      <ProductImage src={image} alt={`Product ${id}`} />
      <PurchaseOptions options={purchaseOptions} />
      <CustomerReviews reviews={reviews} />
      <Ingredients ingredients={ingredients} />
      <Benefits benefits={benefits} />
    </DetailsWrapper>
  );
};

const PurchaseOptions = ({ options }) => (
  <div>
    <h3>Purchase Options</h3>
    {options.map((option, index) => (
      <p key={index}>{option}</p>
    ))}
  </div>
);

const CustomerReviews = ({ reviews }) => (
  <div>
    <h3>Customer Reviews</h3>
    {reviews.map((review, index) => (
      <p key={index}>{review}</p>
    ))}
  </div>
);

const Ingredients = ({ ingredients }) => (
  <div>
    <h3>Ingredients</h3>
    {ingredients.map((ingredient, index) => (
      <p key={index}>{ingredient}</p>
    ))}
  </div>
);

const Benefits = ({ benefits }) => (
  <div>
    <h3>Benefits</h3>
    {benefits.map((benefit, index) => (
      <p key={index}>{benefit}</p>
    ))}
  </div>
);

export default ProductDetails;
