import Image from 'next/image';
import React from 'react';
import test1 from "@/public/images/test1.avif";
import test2 from "@/public/images/test2.avif";
import test3 from "@/public/images/testStamp.svg";
const TestImg = () => {
  return (
    <section className='w-full grid justify-center items-center pt-[3rem] pb-[3rem]'>
        <div className='grid grid-cols-3 max-laptop:grid-cols-1   justify-center items-center w-full '>
           <Image className='max-laptop:hidden' src={test1} alt="test image" />
           <Image className='max-laptop:w-[400px] max-laptop:object-cover  max-laptop:h-[100px]' src={test3} alt="test image" />
           <Image className='max-laptop:hidden' src={test2} alt="test image" />
        </div>
    </section>
  );
}

export default TestImg;
