import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  border: 1px solid blue;
  color: blue;
  margin: 10px;
`;

const ProductCard = ({ productName, productPrice, productQuantity, id, typeProduct }) => {
  return (
    <StyledCard key={id}>
      <p>{productName}</p>
      <p>{productPrice}</p>
      <p>{productQuantity}</p>
      <p>{typeProduct}</p>
    </StyledCard>
  );
};

export default ProductCard;
