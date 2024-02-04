import React from 'react';

function FooterSection() {
  return (
    <section>
      <div className='flex flex-col md:flex-row justify-between gap-8 '>
        <div className='flex gap-8 flex-grow justify-between'>
          <div className='flex flex-col gap-4'>
            <p className='text-lightBlack font-[700] text-[1.3125rem]'>
              Company
            </p>
            <div className='flex flex-col gap-2'>
              <p className='text-lightGray text-[1.125rem] font-[500]'>About</p>
              <p className='text-lightGray text-[1.125rem] font-[500]'>
                Careers
              </p>
              <p className='text-lightGray text-[1.125rem] font-[500]'>
                Mobile
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-lightBlack font-[700] text-[1.3125rem]'>
              Contact
            </p>
            <div className='flex flex-col gap-2'>
              <p className='text-lightGray text-[1.125rem] font-[500]'>
                Help/FAQ
              </p>
              <p className='text-lightGray text-[1.125rem] font-[500]'>Press</p>
              <p className='text-lightGray text-[1.125rem] font-[500]'>
                Affilates
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-lightBlack font-[700] text-[1.3125rem]'>More</p>
            <div className='flex flex-col gap-2'>
              <p className='text-lightGray text-[1.125rem] font-[500]'>
                Portfolio
              </p>
              <p className='text-lightGray text-[1.125rem] font-[500]'>
                Scholarships
              </p>
              <p className='text-lightGray text-[1.125rem] font-[500]'>
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 items-center'>
          <div className='flex gap-4 items-center'>
            <img src='/images/facebook-icon.png' alt='social icon' />
            <img src='/images/instagram-icon.png' alt='social icon' />
            <img src='/images/x-icon.png' alt='social icon' />
          </div>
          <p className='text-lightGray font-[500] text-[1.25rem]'>
            Discover our platform
          </p>
        </div>
      </div>
      <p className='my-[5.25rem] text-lightGray text-[0.875rem] font-[600] flex justify-center'>
        All rights reserved@sagelords.com
      </p>
    </section>
  );
}

export default FooterSection;
