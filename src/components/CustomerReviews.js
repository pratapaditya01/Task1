// src/components/CustomerReviews.js
import React from 'react';
import styled from 'styled-components';

const ReviewsWrapper = styled.section`
  padding: 40px 20px;
  background-color: #fff;
  text-align: center;
`;

const Review = styled.div`
  margin: 20px 0;
  font-size: 18px;
  color: #333;
`;

const CustomerReviews = () => (
  <ReviewsWrapper id="reviews">
    <h2>Customer Reviews</h2>
    <Review>"Best protein powder I've ever used!" - John D.</Review>
    <Review>"Great taste and helps with my workouts." - Jane S.</Review>
    <Review>"Highly recommend this product!" - Bob K.</Review>
  </ReviewsWrapper>
);

export default CustomerReviews;
