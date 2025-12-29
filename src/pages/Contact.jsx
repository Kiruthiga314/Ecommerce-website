import React from 'react'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
import Title from '../components/Title'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>OUR STORE</p>
          <p className='text-gray-500'>10 Mahatma Gandhi Nagar<br />Madurai-625014</p>
          <p className='text-gray-500'>Phone: 8754962341 <br />Email: adminkiru@forever.com</p>
          <p className='font-semibold text-xl text-gray-600'>CAREERS AT FOREVER</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>EXPLORE NOW</button>
        </div>
        
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact