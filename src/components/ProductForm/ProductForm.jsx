import { useState } from 'react';
import CustomInput from '../UI/CustomInput/CustomInput';
import CustomButton from '../UI/CustomButton/CustomButton';
import CustomSelect from '../UI/CustomSelect/CustomSelect';

const ProductForm = ({ products, setProductsData }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [typeProduct, setTypeProduct] = useState('');

  const handleAddProduct = () => {
    const newProduct = {
      id: Math.random(),
      productName,
      productPrice,
      productQuantity,
      typeProduct,
    };
    const [filteredProducts, deletedProducts] = products;
    setProductsData([[...filteredProducts, newProduct], deletedProducts]);
  };
  const selectData = [
    { name: 'Одежда' },
    { name: 'Teхника' },
    { name: 'Обувь' },
  ];
  const handleChangeTypeProduct = (event) => {
    setTypeProduct(event.target.value);
  };

  return (
    <div>
      <p style={{ color: 'white' }}>Add Product Form</p>
      <CustomInput
        placeholder="наимования товара"
        value={productName}
        setData={setProductName}
      />
      <CustomInput
        placeholder="цена товара"
        value={productPrice}
        setData={setProductPrice}
      />
      <CustomInput
        placeholder="количество товара"
        value={productQuantity}
        setData={setProductQuantity}
      />
      <CustomSelect
        data={selectData}
        typeProduct={typeProduct}
        setData={handleChangeTypeProduct}
      />
      <CustomButton onClick={handleAddProduct}>Добавить</CustomButton>
    </div>
  );
};

export default ProductForm;
