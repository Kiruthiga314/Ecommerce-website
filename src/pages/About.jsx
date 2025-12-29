import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>We are committed to bringing you a seamless and enjoyable online shopping experience by offering high-quality products at honest prices. Our platform is designed to maFrke browsing, selecting, and purchasing simple and secure, with a wide range of products carefully curated to meet everyday needs and lifestyle preferences. </p>
          <p>At the heart of our business is a passion for serving our customers with transparency and care. We believe shopping should be convenient, trustworthy, and enjoyable, which is why we provide safe payment options, timely delivery, and responsive customer support.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to make online shopping simple, reliable, and enjoyable for everyone. We strive to offer high-quality products at affordable prices while ensuring a smooth and secure shopping experience. </p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Every product on our platform goes through careful checks to ensure it meets our standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>We are committed to making your shopping experience effortless and time-saving.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>We believe great customer service is the foundation of a trusted shopping experience. </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About