import React from 'react';
import MetaLogo from '/public/hired/meta.svg';
import AirbnbLogo from '/public/hired/airbnb.svg';
import GoogleLogo from '/public/hired/google.svg';
import AccentureLogo from '/public/hired/accenture.svg';
import IBMLogo from '/public/hired/ibm.svg';
import ShopifyLogo from '/public/hired/shopify.svg';
import Image from 'next/image';

function LogoGroupSection() {
  return (
    <div className='bg-purple-400 p-6 rounded-2xl items-center flex-col justify-center'>
      <div className='text-center text-xl text-white px-3 mb-4'>
        Top tech companies hire our graduates
      </div>
      <div className='flex justify-center'>
        <div className='flex justify-between items-center w-[80%]'>
          <Image src={MetaLogo} width={90} height={30} alt='Meta' />
          <Image src={AirbnbLogo} alt='Airbnb' width={90} height={30} />
          <Image src={GoogleLogo} alt='Google' width={90} height={30} />
          <Image src={AccentureLogo} alt='Accenture' width={90} height={30} />
          <Image src={IBMLogo} alt='IBM' width={90} height={30} />
          <Image src={ShopifyLogo} alt='Shopify' width={90} height={30} />
        </div>
      </div>
    </div>
  );
}

export default LogoGroupSection;
