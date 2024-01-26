import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import CustomSelect from '../UI/CustomSelect/CustomSelect';

const Products = ({ products, setProductsData }) => {
  const [typeProduct, setTypeProduct] = useState('');
  const [totalSum, setTotalSum] = useState(0);

  const selectData = [
    { id: 4, name: 'Все' },
    { id: 1, name: 'Одежда' },
    { id: 2, name: 'Teхника' },
    { id: 3, name: 'Обувь' },
  ];

  const handleChangeTypeProduct = (event) => {
    const selectValue = event.target.value;
    setTypeProduct(selectValue);
    const [filteredProducts, deletedProducts] = products;

    if (selectValue !== 'Все') {
      const filteredItems = [...filteredProducts, ...deletedProducts].filter(
        (el) => el.typeProduct === selectValue
      );

      const deletedItems = [...filteredProducts, ...deletedProducts].filter(
        (el) => el.typeProduct !== selectValue
      );

      setProductsData([filteredItems, deletedItems]);
      updateTotalSum(filteredItems);
    } else {
      setProductsData([[...filteredProducts, ...deletedProducts], []]);
      updateTotalSum([...filteredProducts, ...deletedProducts]);
    }
  };

  const updateTotalSum = (items) => {
    const sum = items.reduce((total, item) => total + item.productPrice,0 );
    setTotalSum(sum);
  };

  useEffect(() => {
    // Initial total sum when component mounts
    updateTotalSum([...products[0], ...products[1]]);
  }, [products]);

  return (
    <div>
      <CustomSelect
        data={selectData}
        typeProduct={typeProduct}
        setData={handleChangeTypeProduct}
      />
      {products[0].map(
        ({ productName, productPrice, productQuantity, typeProduct, id }) => (
          <ProductCard
            key={id}
            productName={productName}
            productPrice={productPrice}
            productQuantity={productQuantity}
            typeProduct={typeProduct}
          />
        )
      )}
      <h1>Общая сумма товара: ${totalSum}</h1>
    </div>
  );
};

export default Products;
