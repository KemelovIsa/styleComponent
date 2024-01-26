import React from 'react';
import styled from 'styled-components';

const StyledButtonContainer = styled.div`
  margin-top: 10px;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 40px;
  outline: none;
  border-radius: 10px;
  background-color: blue;
  color: white;
`;

const CustomButton = ({ children, onClick }) => {
  return (
    <StyledButtonContainer>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </StyledButtonContainer>
  );
};

export default CustomButton;
