import React from 'react';
import MainButton from '../common/MainButton';

function HeroSection() {
  return (
    <section className='relative bg-bootcamp-img bg-cover text-white text-center py-20 h-[550px] rounded-2xl flex justify-between px-[4rem]'>
      <div className='absolute inset-0 bg-black opacity-50 rounded-2xl'>
        {/* This is the overlay */}
      </div>
      <div className='relative w-[45%] text-left'>
        <h1 className='text-left text-4xl font-medium text-white mb-4 md:text-4xl lg:text-5xl max-w-full md:max-w-3/4 xl:max-w-full'>
          Learn new skills today. Build your career in tech.
        </h1>
        <p className='text-left text-md mt-4 text-opacity-50'>
          Join our immersive courses in web development, mobile development, and
          data to transform your career and access new opportunities.
        </p>
        <button className='mt-8 bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded'>
          Apply Now
        </button>
      </div>
      <div className='w-[55%]'></div>
    </section>
  );
}

export default HeroSection;
