import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';
import { useEffect } from 'react';

const BestSeller = () => {
    const {products}=useContext(ShopContext);
    const [bestSeller, setBestSeller]=useState([]);
    useEffect(()=>{
        const bestProducts=products.filter((items)=>items.bestseller===true);
        setBestSeller(bestProducts.slice(0,5));
    },[]);
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'Best'} text2={'Sellers'}/>
        </div>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 pb-8'>
            Discover our Best Sellers collection, featuring top-rated and most-loved products by our customers. These items have been carefully selected for their exceptional quality, style, and value, making them the perfect choice for anyone looking to enhance their wardrobe with trusted favorites.
        </p>
        
        {/*Rendering section*/}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller