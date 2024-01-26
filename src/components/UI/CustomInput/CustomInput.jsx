import React from 'react';
import styled from 'styled-components';

const StyledInputContainer = styled.div`
  margin-top: 10px;
`;

const StyledInput = styled.input`
  width: 200px;
  height: 40px;
  outline: none;
  border: 1px solid blue;
  border-radius: 10px;
  padding: 8px; /* добавил отступы для лучшего визуального восприятия */
`;

const CustomInput = ({ value, setData, placeholder }) => {
  return (
    <StyledInputContainer>
      <StyledInput
        type="text"
        value={value}
        onChange={(event) => {
          setData(event.target.value);
        }}
        placeholder={placeholder}
      />
    </StyledInputContainer>
  );
};

export default CustomInput;
