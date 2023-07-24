import React from 'react'
import Styles from './Customers.module.scss';
import Image from 'next/image';
import Company1 from '@/public/images/company1.svg';
import Company2 from '@/public/images/company2.svg';
import Company3 from '@/public/images/company3.svg';
import Company4 from '@/public/images/company4.svg';
import Company5 from '@/public/images/company5.svg';
import Company6 from '@/public/images/company6.svg';


const Customers = () => {
  return (
    <section className='max-w-[1250px] w-full flex flex-col items-center justify-center mt-[5rem]'>
      <div className='flex items-center justify-center '>
        <p className='text-[1.5rem] max-laptop:text-center  font-medium max-laptop:max-w-[400px]  '>More than 12,000 businesses delight their customers with Help Scout.</p>

      </div>
      <div className='flex flex-wrap items-center gap-5 justify-center mt-6'>
        <Image src={Company1} alt='image company logo' />
        <Image src={Company2} alt='image company logo' />
        <Image src={Company3} alt='image company logo' />
        <Image src={Company4} alt='image company logo' />
        <Image src={Company5} alt='image company logo' />
        <Image src={Company6} alt='image company logo' />
      </div>
    </section>
  )
}

export default Customers
