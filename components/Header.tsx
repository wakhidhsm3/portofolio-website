'use client';

import Image from 'next/image';

import ProfilePic from '@/app/images/profile.jpeg';

const Header = () => {
  return (
    <div className='w-full flex flex-col-reverse lg:flex-row gap-14 justify-between items-center -z-10'>
      <div className='flex flex-col gap-2 w-full lg:w-4/5'>
        <h1 className='text-4xl font-bold mb-4'>Hi! I&apos;m Wakhid</h1>
        <p className='text-base text-gray-800 text-justify dark:text-gray-300'>
          Hello, I am a Web Developer focused on Backend Development. I enjoy
          challenging myself to learn new technologies and continuously improve
          my skills. <br />I am skilled in various programming languages such as
          PHP, JavaScript, and TypeScript. I have successfully developed
          applications using various technologies, including CodeIgniter 3,
          Laravel, Express, and React. I enjoy honing my technical expertise to
          enhance my adaptability and problem-solving abilities.
        </p>
      </div>
      <div className='flex items-center justify-center md:mb-0'>
        <Image
          src={ProfilePic}
          alt='Profiile Picture'
          width={160}
          height={160}
          className='border-2 border-gray-100 rounded-full object-cover'
        />
      </div>
    </div>
  );
};

export default Header;
