import React from 'react'
import Header from '../compoent/Header'
import Store from '../compoent/Store'

const data = [
  {
    "id": 1,
    "name": "Good Efes Guy",
    "location": "Istanbul"
  },
  {
    "id": 2,
    "name": "Good Efes Guy",
    "location": "Istanbul"
  },
  {
    "id": 3,
    "name": "Good Efes Guy",
    "location": "Istanbul"
  },
  {
    "id": 1,
    "name": "Good Efes Guy",
    "location": "Istanbul"
  },
  {
    "id": 2,
    "name": "Good Efes Guy",
    "location": "Istanbul"
  },
  {
    "id": 3,
    "name": "Good Efes Guy",
    "location": "Istanbul"
  },
  {
    "id": 1,
    "name": "Good Efes Guy",
    "location": "Istanbul"
  },
  {
    "id": 2,
    "name": "Good Efes Guy",
    "location": "Istanbul"
  },
  {
    "id": 3,
    "name": "Good Efes Guy",
    "location": "Istanbul"
  },
]

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full h-full bg-clean shadow-inner">
      <Header />
      <div className="flex-grow w-full items-center justify-center">
        <div className="h-96 overflow-y-auto">
          {data.map((item, index) => {
            return <Store key={index} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard