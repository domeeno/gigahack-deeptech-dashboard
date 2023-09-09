import React from 'react'

const StoreOption = ({brand}) => {
    return (
        <div className='flex flex-col'>
            <div className=''>{brand.name}</div>
            <div className='flex flex-row flex-wrap'>
                {
                    brand.products.map((product, index) => {
                        return (
                            <div key={index} className='flex flex-row items-center justify-center p-2 m-2 bg-gray-100 rounded-lg'>
                                <div className=''>{product.name}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StoreOption