// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #007BFF;
  }
`;

const Nav = styled.nav`
  a {
    margin: 0 15px;
    text-decoration: none;
    color: #333;
    &:hover {
      color: #007BFF;
    }
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    
    a {
      display: block;
      margin: 10px 0;
    }
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Logo to="/">ProteinPlus</Logo>
  </HeaderWrapper>
);

export default Header;
