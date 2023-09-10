import React, { useState, useEffect } from 'react'
import { GoPersonFill } from 'react-icons/go'
import { getCustomers } from '../service';

const Header = () => {
  const [query, setQuery] = useState('');
  const [delayedQuery, setDelayedQuery] = useState('');

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    let timer;

    // Define a function to execute the search query
    const performSearch = () => {
      // You can check if the query meets the minimum length requirement (3 characters)
      if (delayedQuery.length >= 3) {
        // Perform your search or API request here with the 'delayedQuery' value

        setCustomers(getCustomers(delayedQuery));
      }
    };

    // Clear the timer when the input changes
    clearTimeout(timer);

    // Set a timer to execute the search query after 1000 milliseconds (1 second)
    if (delayedQuery.length >= 3) {
      timer = setTimeout(performSearch, 500);
    }

    return () => {
      // Cleanup: Clear the timer when the component unmounts
      clearTimeout(timer);
    };
  }, [delayedQuery]);

  // Handle input change and update 'delayedQuery'
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    // Update 'delayedQuery' after 1 second (1000 milliseconds)
    setTimeout(() => {
      setDelayedQuery(inputValue);
    }, 1000);
  };


  useEffect(() => {
    console.log(customers);
  }, [customers]);

  return (
    <div className='flex flex-row w-full justify-center items-stretch pt-4'>
      <div className="py-2 my-2 mx-4 flex-grow bg-white shadow-lg rounded-lg transition duration-300">
        <input
          className="outline-none text-gray-700 mx-4 focus:ring-blue-500 focus:shadow-blue-lg"
          placeholder="Search Customer"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <div className='py-2 my-2 mx-4 bg-white shadow-md rounded-lg'>
        <div className='flex flex-row items-center justify-center'>
          <h3 className='pr-4 pl-2 text-gray-600'>Good Efes Guy</h3>

          <div className="flex justify-center items-center w-6 h-6 bg-gray-400 rounded-full mr-2">
            <GoPersonFill color='white' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header