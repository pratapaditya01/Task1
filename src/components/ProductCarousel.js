import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import product1 from '../images/image1.jpg';
import product2 from '../images/image2.jpg';
import product3 from '../images/image3.jpg';

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

const Image = styled.img`
  max-width: 100%;
  height: 200px;
  cursor: pointer;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const images = [product1, product2, product3];

const productDetails = [
  {
    image:product1,
    features: ['Brightens skin tone', 'Reduces fine lines'],
    benefits: ['Evens out complexion', 'Improves skin texture'],
    ingredients: ['Vitamin C', 'Hyaluronic Acid'],
    reviews: ['"Absolutely love this product!"', '"My skin has never looked better."'],
    purchaseOptions: ['30ml - $25', '50ml - $40']
  },
  {
    image:product2,
    features: ['Deeply hydrates', 'Soothes irritation'],
    benefits: ['Repairs skin barrier', 'Calms redness'],
    ingredients: ['Aloe Vera', 'Chamomile Extract'],
    reviews: ['"Works wonders for sensitive skin."', '"My holy grail moisturizer!"'],
    purchaseOptions: ['50ml - $30', '100ml - $50']
  },
  {image:product3,
    features: ['Detoxifies pores', 'Minimizes breakouts'],
    benefits: ['Purifies skin', 'Balances oil production'],
    ingredients: ['Charcoal', 'Tea Tree Oil'],
    reviews: ['"My acne has significantly improved."', '"Great for oily skin types."'],
    purchaseOptions: ['50ml - $20', '100ml - $35']
  },
];

const ProductCarousel = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  const goToDetails = () => navigate(`/product/${current + 1}`, { state: productDetails[current], id: current + 1 });

  return (
    <CarouselWrapper>
      <Image src={images[current]} alt="Product Image" onClick={goToDetails} />
      <div>
        <Button onClick={prevImage}>Previous</Button>
        <Button onClick={nextImage}>Next</Button>
      </div>
    </CarouselWrapper>
  );
};

export default ProductCarousel;
