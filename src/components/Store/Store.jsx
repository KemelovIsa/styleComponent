import './Store.css';
import { useState } from 'react';
import Products from '../Products/Products';
import ProductForm from '../ProductForm/ProductForm';

const Store = () => {
  const [productsData, setProductsData] = useState([[], []]);
  return (
    <div className="container">
      <Products products={productsData} setProductsData={setProductsData} />
      <ProductForm products={productsData} setProductsData={setProductsData} />
    </div>
  );
};

export default Store;
