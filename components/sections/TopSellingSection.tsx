import React from 'react';
import DestinationCard from '../cards/DestinationCard';

function TopSellingSection() {
  const destinations = [
    {
      id: 0,
      imageUrl: '/webdev.jpg',
      title: 'Web development',
      description:
        'Learn to build web applications with modern tools like React, Node.js, Python, and MongoDB.',
      highlighted: false,
    },
    {
      id: 1,
      imageUrl: '/mobile.jpg',
      title: 'Mobile development',
      description:
        'Learn to build mobile applications with modern tools like React Native, Swift, and Kotlin.',
      highlighted: false,
    },
    {
      id: 2,
      imageUrl: '/data.jpg',
      title: 'Data analytics',
      description:
        'Learn to analyze data with modern tools like Python, SQL, PowerBI, Excel, and Tableau.',
      highlighted: true,
    },
  ];
  return (
    <section>
      <p className='volkhov text-[2.125rem] text-title font-[700] text-center'>
        Career-changing bootcamps in Web, Mobile & Data
      </p>
      <p className='text-center text-[1.125rem] text-slate-500 mt-4'>
        Join thousands of students who have changed their career through our
        bootcamps
      </p>
      <div className='flex flex-col gap-4 md:flex-row items-center md:justify-between mt-16 w-full'>
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            imageUrl={destination.imageUrl}
            title={destination.title}
            description={destination.description}
            highlighted={destination.highlighted}
          />
        ))}
      </div>
    </section>
  );
}

export default TopSellingSection;
