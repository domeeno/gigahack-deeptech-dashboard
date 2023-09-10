import React, { useState, useEffect } from 'react';
import { MdLocationOn } from 'react-icons/md';
import Graph from './Graph';
import { RxCross2 } from "react-icons/rx";
import { BiSolidPlaneLand } from "react-icons/bi";

import { removeStoreFromDash } from '../service';

const BrandList = ({ brands, selectedBrandIndex, handleBrandClick }) => (
  <ul className='flex flex-row items-center'>
    {brands.map((brand, index) => (
      <li
        key={brand.id}
        className={`text-sm cursor-pointer mx-4 ${selectedBrandIndex === index ? 'text-blue-500' : 'text-gray-600'}`}
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
        className={`text-sm cursor-pointer p-1 m-2 ${selectedProductIndex === index ? 'text-blue-500 shadow-efes shadow-inner rounded-lg' : 'text-gray-600'}`}
        onClick={() => handleProductClick(index, product.name)}
      >
        <div className='flex flex-row items-center justify-between'>
          <h4 className='ml-1'>{product.name.slice(-2)}</h4>
          <span className='mx-2 text-xs text-gray-400'>{product.volume}L</span>
          {product.imported ? <BiSolidPlaneLand className='mr-2 text-lg text-gray-400' /> : ''}
        </div>
      </li>
    ))}
  </ul>
);

const Store = ({ data }) => {
  const [selectedBrandIndex, setSelectedBrandIndex] = useState(0);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [untilDate, setUntilDate] = useState('');
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');
  const [selectedOption, setSelectedOption] = useState("DAY");
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const calculateData = () => {
      console.log('Calculating data...')
      // Define the interval in milliseconds
      let interval;
      switch (selectedOption) {
        case 'DAY':
          interval = 24 * 60 * 60 * 1000; // 1 day
          break;
        case 'WEEK':
          interval = 7 * 24 * 60 * 60 * 1000; // 1 week
          break;
        case 'MONTH':
          // This is a rough estimate, actual month length varies
          interval = 30 * 24 * 60 * 60 * 1000; // 1 month
          break;
        default:
          interval = 24 * 60 * 60 * 1000; // Default to 1 day
      }

      console.log(interval)

      // Calculate the number of entries
      const startDate = new Date().getTime();
      const endDate = new Date(untilDate).getTime();
      const numEntries = Math.floor((endDate - startDate) / interval) + 1;

      console.log(data.brands[selectedBrandIndex].products[selectedProductIndex].volume)

      // Generate data points with a value of 200
      const generatedData = [];
      let currentDate = startDate;
      let litres = 200;
      let stringVolume = data.brands[selectedBrandIndex].products[selectedProductIndex].volume;
      for (let i = 0; i < numEntries; i++) {
        console.log("pushing ", currentDate)
        generatedData.push({
          name: new Date(currentDate).toISOString().split('T')[0],
          litres: litres,
          products: (litres / parseFloat(stringVolume.replace(',', '.'))).toFixed(2)
        });
        currentDate += interval;
      }

      setGraphData(generatedData);

      console.log(generatedData)
    };

    calculateData();
  }, [data, selectedOption, untilDate, selectedBrandIndex, selectedProductIndex]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    // Get today's date
    const today = new Date();

    // Get the date two months from now
    const twoMonthsFromNow = new Date(today);
    twoMonthsFromNow.setMonth(today.getMonth() + 2);

    const aWeakFromNow = new Date(today);
    aWeakFromNow.setDate(today.getDate() + 7);
    const aWeakFromNowFormatted = aWeakFromNow.toISOString().split('T')[0];

    // Format the dates as yyyy-MM-dd (HTML date input format)
    const todayFormatted = today.toISOString().split('T')[0];
    const twoMonthsFromNowFormatted = twoMonthsFromNow.toISOString().split('T')[0];

    // Set the state variables
    setMinDate(todayFormatted);
    setMaxDate(twoMonthsFromNowFormatted);
    setUntilDate(aWeakFromNowFormatted)
  }, []);

  const handleDateChange = (event) => {
    setUntilDate(event.target.value);
  };

  const handleBrandClick = (index) => {
    handleProductClick(0, data.brands[index].products[0].name);
    setSelectedBrandIndex(index);
  };

  const handleProductClick = (index, productName) => {
    console.log(`Making turbo giga chad request ${productName} ${data.name}`);
    setSelectedProductIndex(index);
  };

  const handleRemoveStore = () => {
    removeStoreFromDash(data.id).then((data) => {
      console.log(data);
    }
    )
    // navigate to the dashboard
    window.location.href = '/';
  }

  useEffect(() => {
    if (selectedProductIndex === -1 && data.brands[selectedBrandIndex].products.length > 0) {
      handleProductClick(0, data.brands[selectedBrandIndex].products[0].name);
    }
  }, [data, selectedBrandIndex, selectedProductIndex]);

  return (
    <div className='flex flex-col bg-white m-4 rounded-lg shadow-lg'>
      <div className='flex flex-row justify-between items-center m-4'>
        <div className='flex flex-row justify-center items-center'>
          <h4 className='text-gray-700 mr-4'>Until: </h4>
          <input className='text-gray border-2 rounded-lg' max={maxDate} min={minDate} type="date" value={untilDate} onChange={handleDateChange} />
          <h4 className='text-gray-700 ml-4'>Intervals: </h4>
          <select className='outline-none' id="enumSelect" value={selectedOption} onChange={handleSelectChange}>
            <option value="DAY">DAY</option>
            <option value="WEEK">WEEK</option>
            <option value="MONTH">MONTH</option>
          </select>
        </div>

        <div className='flex flex-row justify-end items-center'>
          <div>
            <h2 className='text-gray-700 mx-2'>{data.region}, {data.city}, {data.name}</h2>
          </div>
          <div>
            <MdLocationOn color='#A3D8FF' size='2em' />
          </div>
          <div className='cursor-pointer'>
            <RxCross2 color="#FFB1B1" size='2em' onClick={() => handleRemoveStore()} />
          </div>
        </div>
      </div>

      <div className=''>
        <Graph data={graphData}/>
      </div>

      <BrandList
        brands={data.brands}
        selectedBrandIndex={selectedBrandIndex}
        handleBrandClick={handleBrandClick}
      />

      <ProductList
        products={data.brands.length > 0 ? data.brands[selectedBrandIndex].products : []}
        selectedProductIndex={selectedProductIndex}
        handleProductClick={handleProductClick}
      />
    </div>
  );
};

export default Store;
