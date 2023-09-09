import React, { useState, useEffect } from 'react';
import { MdLocationOn } from 'react-icons/md';
import Graph from './Graph';

const BrandList = ({ brands, selectedBrandIndex, handleBrandClick }) => (
  <ul className='flex flex-row items-center'>
    {brands.map((brand, index) => (
      <li
        key={brand.id}
        className={`text-sm mx-2 ${selectedBrandIndex === index ? 'text-blue-500' : 'text-gray-600'}`}
        onClick={() => handleBrandClick(index)}
      >
        {brand.name}
      </li>
    ))}
  </ul>
);

const ProductList = ({ products, selectedProductIndex, handleProductClick }) => (
  <ul className='flex flex-row items-center'>
    {products.map((product, index) => (
      <li
        key={product.id}
        className={`text-sm mx-2 ${selectedProductIndex === index ? 'text-blue-500' : 'text-gray-600'}`}
        onClick={() => handleProductClick(index, product.name)}
      >
        {product.name}
      </li>
    ))}
  </ul>
);

const Store = ({ data }) => {
  const [selectedBrandIndex, setSelectedBrandIndex] = useState(0);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  const handleBrandClick = (index) => {
    handleProductClick(0, data.brands[index].products[0].name);
    setSelectedBrandIndex(index);
  };

  const handleProductClick = (index, productName) => {
    console.log(`Making turbo giga chad request ${productName} ${data.store}`);
    setSelectedProductIndex(index);
  };

  useEffect(() => {
    if (selectedProductIndex === -1 && data.brands[selectedBrandIndex].products.length > 0) {
      handleProductClick(0, data.brands[selectedBrandIndex].products[0].name);
    }
  }, [data, selectedBrandIndex, selectedProductIndex]);

  return (
    <div className='flex flex-col bg-white m-4 rounded-lg shadow-lg'>
      <div className='flex flex-row justify-end items-center'>
        <div>
          <h2 className='text-gray-700 mx-2'>{data.city}, {data.store}</h2>
        </div>
        <div>
          <MdLocationOn color='#A3D8FF' size='2em' />
        </div>
      </div>
      
      <div className=''>
        <Graph item={data.brands[selectedBrandIndex].products[selectedProductIndex]} />
      </div>

      <BrandList
        brands={data.brands}
        selectedBrandIndex={selectedBrandIndex}
        handleBrandClick={handleBrandClick}
      />

      <ProductList
        products={data.brands[selectedBrandIndex].products}
        selectedProductIndex={selectedProductIndex}
        handleProductClick={handleProductClick}
      />
    </div>
  );
};

export default Store;
