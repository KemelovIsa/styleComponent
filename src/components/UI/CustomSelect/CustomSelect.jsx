import React from 'react';
import styled from 'styled-components';

const StyledCustomSelect = styled.div`
  margin-top: 10px;
`;

const StyledSelect = styled.select`
  width: 200px;
  height: 40px;
  outline: none;
  border: 1px solid blue;
  border-radius: 10px;
`;

const CustomSelect = ({ data, typeProduct, setData }) => {
  return (
    <StyledCustomSelect>
      <StyledSelect value={typeProduct} onChange={setData}>
        {data.map((el) => (
          <option value={el.name} key={el.id}>
            {el.name}
          </option>
        ))}
      </StyledSelect>
    </StyledCustomSelect>
  );
};

export default CustomSelect;
