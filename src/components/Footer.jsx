import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-14 text-sm'>
            <div>
                <img src={assets.logo} alt="Company Logo" className='w-32 mb-5'/>
                <p className='w-full sm:w-2/3 text-gray-600'>ShopEase is your ultimate online shopping destination, offering a vast selection of products across various categories. From trendy fashion to cutting-edge electronics, we provide quality items at competitive prices. </p>
            </div>  
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>1234567890</li>
                    <li>kiruthi@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>copyright@2025 Forever. All Rights Reserved.</p>


        </div>

    </div>
  )
}

export default Footer