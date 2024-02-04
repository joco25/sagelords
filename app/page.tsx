import NavBar from '@/components/common/NavBar';
import FooterSection from '@/components/sections/FooterSection';
import HeroSection from '@/components/sections/HeroSection';
import LogoGroupSection from '@/components/sections/LogoGroupSection';
import TopSellingSection from '@/components/sections/TopSellingSection';

export default function Home() {
  return (
    <main className='relative poppins md:px-[9rem] max-w-screen-2xl mx-auto'>
      <NavBar />
      <div className='px-4 flex flex-col gap-[2.69rem]'>
        <HeroSection />
        <LogoGroupSection />
        <div className='absolute top-0 right-0 -z-10'>
          <img src='/images/blob-shape.png' alt='blob background shape' />
        </div>
        <div className='absolute top-0 left-0 -z-10'>
          <img
            src='/images/top-left-gradient.png'
            alt='blob background shape'
          />
        </div>
        <div className='relative'>
          <div className='absolute top-0 right-0'>
            <img src='/images/plus-group.png' alt='blob background shape' />
          </div>
        </div>

        <TopSellingSection />
        <FooterSection />
      </div>
    </main>
  );
}
