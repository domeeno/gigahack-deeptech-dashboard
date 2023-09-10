import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Store from '../component/Store';
import SidePanel from '../component/SidePanel';
import { getDashboardData } from '../service';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDashboardData().then((result) => {
      setData(result); 
    });
  }, []);

  return (
    <div className='flex flex-row justify-between items-center h-full'>
      <div className='flex flex-row items-center h-full w-full'>
        <SidePanel />
        <div className="flex flex-col w-full h-full bg-clean shadow-inner">
          <Header />
          <div className="flex-grow items-center justify-center mt-14">
            <div className="overflow-y-auto" style={{ height: "32rem" }}>
              {data.map((item, index) => {
                return <Store key={index} data={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
