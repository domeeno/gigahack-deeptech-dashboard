import React from 'react'
import Header from '../component/Header'
import Store from '../component/Store'
import SidePanel from '../component/SidePanel';

const data = [
  {
    "id": 1,
    "city": "City 277",
    "store": "Store 1",
    "brands": [
      {
        "id": 1,
        "name": "Efes",
        "products": [
          {
            "id": "1",
            "name": "Product 1",
          },
          {
            "id": "2",
            "name": "Product 2",
          },
          {
            "id": "3",
            "name": "Product 3",
          },
        ]
      },
      {
        "id": 2,
        "name": "Kozel",
        "products": [
          {
            "id": "1",
            "name": "Product 1",
          },
          {
            "id": "2",
            "name": "Product 2",
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "city": "City 321",
    "store": "Store 5",
    "brands": [
      {
        "id": 1,
        "name": "Efes",
        "products": [
          {
            "id": "1",
            "name": "Product 1",
          },
          {
            "id": "2",
            "name": "Product 2",
          },
          {
            "id": "3",
            "name": "Product 3",
          },
        ]
      },
      {
        "id": 2,
        "name": "Kozel",
        "products": [
          {
            "id": "1",
            "name": "Product 1",
          },
          {
            "id": "2",
            "name": "Product 2",
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "city": "City 321",
    "store": "Store 5",
    "brands": [
      {
        "id": 1,
        "name": "Efes",
        "products": [
          {
            "id": "1",
            "name": "Product 1",
          },
          {
            "id": "2",
            "name": "Product 2",
          },
          {
            "id": "3",
            "name": "Product 3",
          },
        ]
      },
      {
        "id": 2,
        "name": "Kozel",
        "products": [
          {
            "id": "1",
            "name": "Product 1",
          },
          {
            "id": "2",
            "name": "Product 2",
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "city": "City 321",
    "store": "Store 5",
    "brands": [
      {
        "id": 1,
        "name": "Efes",
        "products": [
          {
            "id": "1",
            "name": "Product 1",
          },
          {
            "id": "2",
            "name": "Product 2",
          },
          {
            "id": "3",
            "name": "Product 3",
          },
        ]
      },
      {
        "id": 2,
        "name": "Kozel",
        "products": [
          {
            "id": "1",
            "name": "Product 1",
          },
          {
            "id": "2",
            "name": "Product 2",
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "city": "City 321",
    "store": "Store 5",
    "brands": [
      {
        "id": 1,
        "name": "Efes",
        "products": [
          {
            "id": "1",
            "name": "Product 1",
          },
          {
            "id": "2",
            "name": "Product 2",
          },
          {
            "id": "3",
            "name": "Product 3",
          },
        ]
      },
      {
        "id": 2,
        "name": "Kozel",
        "products": [
          {
            "id": "1",
            "name": "Product 1",
          },
          {
            "id": "2",
            "name": "Product 2",
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "city": "City 321",
    "store": "Store 5",
    "brands": [
      {
        "id": 1,
        "name": "Efes",
        "products": [
          {
            "id": "1",
            "name": "Product 1",
          },
          {
            "id": "2",
            "name": "Product 2",
          },
          {
            "id": "3",
            "name": "Product 3",
          },
        ]
      },
      {
        "id": 2,
        "name": "Kozel",
        "products": [
          {
            "id": "1",
            "name": "Product 1",
          },
          {
            "id": "2",
            "name": "Product 2",
          }
        ]
      }
    ]
  },
]

const Dashboard = () => {
  return (
    <div className='flex flex-row justify-between items-center h-full'>
      <div className='flex flex-row items-center h-full w-full'>
        <SidePanel />
        <div className="flex flex-col w-full h-full bg-clean shadow-inner">
          <Header />
          <div className="flex-grow items-center justify-center mt-14">
            <div className="overflow-y-auto" style={{height: "32rem"}}>
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

export default Dashboard