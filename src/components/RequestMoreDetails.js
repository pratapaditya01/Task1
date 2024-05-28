import React, { useState } from 'react';
import styled from 'styled-components';

const RequestMoreDetails = () => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    alert('Request Received, Thank You!');
  };

  return (
    <Container>
      <StyledInput
        type="text"
        value={value}
        onChange={ (e) => setValue(e.target.value)}
        required
      />
      <StyledButton onClick={handleSubmit}>Submit</StyledButton>
    </Container>
  );
};

export default RequestMoreDetails;

// Styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 200px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007BFF;
  color: white;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;
