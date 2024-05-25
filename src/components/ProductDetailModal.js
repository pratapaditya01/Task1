// src/components/ProductDetailModal.js
import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import ProductFeatures from './ProductFeatures';
import ProductBenefits from './ProductBenefits';
import Ingredients from './Ingredients';
import CustomerReviews from './CustomerReviews';
import PurchaseOptions from './PurchaseOptions';

Modal.setAppElement('#root');

const ModalContent = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  outline: none;
  max-width: 800px;
  margin: auto;
`;

const CloseButton = styled.button`
  background: #007BFF;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  float: right;
  &:hover {
    background: #0056b3;
  }
`;

const ProductDetailModal = ({ isOpen, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Product Details"
    style={{
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
      },
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    }}
  >
    <ModalContent>
      <CloseButton onClick={onRequestClose}>Close</CloseButton>
      <h2>Product Details</h2>
      <ProductFeatures />
      <ProductBenefits />
      <Ingredients />
      <CustomerReviews />
      <PurchaseOptions />
    </ModalContent>
  </Modal>
);

export default ProductDetailModal;
