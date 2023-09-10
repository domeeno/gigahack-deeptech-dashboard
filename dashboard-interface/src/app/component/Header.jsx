import React, { useState, useEffect, useRef } from 'react';
import { GoPersonFill } from 'react-icons/go';
import { addCustomer, getCustomers } from '../service';
import CustomerQuery from './CustomerQuery';

const Header = () => {
  const [query, setQuery] = useState('');
  const [delayedQuery, setDelayedQuery] = useState('');
  const [customers, setCustomers] = useState([]);
  const [showCustomers, setShowCustomers] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click target is outside of the input and customer list
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setCustomers([]); // Close the customer list by resetting it
      }
    };

    // Add the click event listener to the document body
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      // Remove the event listener when the component unmounts
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let timer;

    // Define a function to execute the search query
    const performSearch = () => {
      // You can check if the query meets the minimum length requirement (3 characters)
      if (delayedQuery.length >= 3) {
        // Perform your search or API request here with the 'delayedQuery' value

        getCustomers(delayedQuery)
          .then((data) => {
            // Update the 'customers' state with the data received from the API
            setCustomers(data);
            setShowCustomers(true); // Show the customer list
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            setCustomers([]); // Handle errors by setting customers to an empty array or showing an error message.
            setShowCustomers(true); // Still show the customer list even if there's an error
          });
      }
    };

    if (delayedQuery.length === 0) {
      setCustomers([]);
      setShowCustomers(false);
    }

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

  const handleCustomerClick = (id) => {
    addCustomer(id).then((data) => {
      console.log(data);
    })
    // navigate to the dashboard
    window.location.href = '/';
  };

  return (
    <div className='relative'>
      <div className='flex flex-row w-full justify-center items-stretch pt-4'>
        <div className="py-2 my-2 mx-4 flex-grow bg-white shadow-lg rounded-lg transition duration-300">
          <input
            ref={inputRef}
            className="outline-none text-gray-700 mx-4 w-[98%] focus:ring-blue-500 focus:shadow-blue-lg"
            placeholder="Search Customer"
            value={query}
            onChange={handleInputChange}
          />
        </div>
        <div className='py-2 my-2 mx-4 bg-white shadow-md rounded-lg'>
          <div className='flex flex-row items-center justify-center'>
            <h3 className='pr-4 pl-2 text-gray-600'>Good Efes SR</h3>
            <div className="flex justify-center items-center w-6 h-6 bg-gray-400 rounded-full mr-2">
              <GoPersonFill color='white' />
            </div>
          </div>
        </div>
      </div>
      {customers.length > 0 && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[65%] py-2 mx-4 bg-white shadow-lg rounded-lg z-10">
          <div className='flex flex-row cursor-pointer hover:bg-gray-100 shadow-inner justify-between items-center border-gray-300'>
            <h3 className='text-gray-300 text-sm my-2 text-left mx-4'>Customer</h3>
            <h3 className='text-gray-300 text-sm my-2 text-left mx-4'>City</h3>
            <h3 className='text-gray-300 text-sm my-2 text-left mx-4'>Region</h3>
            <h3 className='text-gray-300 text-sm my-2 text-left mx-4'>SR Code</h3>
            <h3 className='text-white text-sm my-2 text-left mx-4'>.</h3>

          </div>
          {customers.length > 0 && (
            customers.map((customer, index) => {
              return (
                <div className={index !== customers.length - 1 ? 'border-b border-gray-100' : ''}>
                  <CustomerQuery customer={customer} handleClick={handleCustomerClick} />
                </div>
              );
            })
          )}
        </div>
      )
      }
    </div >
  );
};

export default Header;
