// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

const Footer = () => (
  <FooterWrapper>
    <p>© 2024 ProteinPlus. All rights reserved.</p>
  </FooterWrapper>
);

export default Footer;
