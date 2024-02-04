import React from 'react';

interface IProps {
  imageUrl: string;
  title: string;
  description: string;
  highlighted: boolean;
}

function DestinationCard({
  imageUrl,
  title,
  description,
  highlighted,
}: IProps) {
  return (
    <div className='flex relative flex-col justify-between  pb-[2.63rem] group'>
      <div className='  object-fill '>
        <img
          src={imageUrl}
          alt='destination image'
          className='w-[314px] h-[15.43rem]  object-cover rounded-t-[1.5rem]'
        />
      </div>
      <div className='bg-white h-[9rem] w-[314px] mt-[1.69rem] px-[1.62rem] shadow-md pb-[2rem] rounded-[1.5rem]'>
        <div className='flex text-lightGray text-[1.125rem] font-bold'>
          <p>{title}</p>
        </div>
        <div className='flex gap-4 items-center'>
          <p className='text-lightGray'>{description}</p>
        </div>
      </div>
      {highlighted && (
        <div className='absolute bottom-[5rem] right-[-4rem] -z-10 hidden md:block'>
          <img src='/images/stylish-ring.png' alt='curly ring' />
        </div>
      )}
    </div>
  );
}

export default DestinationCard;
