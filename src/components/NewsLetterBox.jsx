import React from 'react'

const NewsLetterBox = () => {
    const onSubmiHandler=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe to our Newsletter</p>
        <p className='text-gray-400 mt-3'>Get latest news, updates and offers</p>
        <form onSubmit={onSubmiHandler} className='w-full sm:w-1/2 flex items-center gap-3 my-6 mx-auto border pl=3'>
            <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none'/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>

    </div>
  )
}

export default NewsLetterBox