import React, { useEffect, useState } from 'react'
import Title from './Title';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import ProductItem from './ProductItem.jsx';

const LatestCollection = () => {
    const {products}= useContext(ShopContext);
    const [latestProducts, setLatestProducts]=useState([]);
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[]);
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'Latest'} text2={'Collections'}/>
        </div>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 pb-8'>
            Explore the Latest Collection of stylish and comfortable designs made to match your everyday lifestyle. Crafted with premium materials and modern aesthetics, these new arrivals bring freshness and confidence to every look
        </p>
        {/*Rendering section*/}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />


                ))
            }
        </div>
        
        
    </div>
  )
}

export default LatestCollection