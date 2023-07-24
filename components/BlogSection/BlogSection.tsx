import React from 'react';
import Styles from './BlogSection.module.scss';
import BlogImage1 from '@/public/images/blog-1.jpg'
import BlogImage2 from '@/public/images/blog-2.jpg'
import BlogImage3 from '@/public/images/blog-3.jpg'
import BlogImage4 from '@/public/images/blog-4.jpg'
import Image, { StaticImageData } from 'next/image';

interface BlogProps{
  
    id: number;
    desc: string;
    img: StaticImageData;

}


const blogItems : BlogProps[]=[
  {id:1 ,desc:"Buyer's Guide to Choosing the Right Customer Support Tool" ,  img:BlogImage1 },
  {id:2 ,desc:"How Brain.fm Achieved a 95% CSAT Score With Help Scout" ,  img:BlogImage2 },
  {id:3 ,desc:"Foundations of Great Service" ,  img:BlogImage3 },
  {id:4 ,desc:"Discovering your customer service vision and values" ,  img:BlogImage4 },
]


const BlogSection = () => {
  return (
    <div className="bg-blue-100 pb-[3rem] pt-[3rem] ">
    <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
      <h2 className="text-3xl capitalize text-slate-800  font-bold mb-4">Build a company people love</h2>
      <p className="mb-8 text-center leading-7 text-[1rem]  max-w-[500px] max-tablet:max-w-[400px]">Our thought leadership on customer engagement has become the gold standard for more than 10 million people. Help Scout is more than software — we&apos;re a partner in helping you succeed.</p>
      <div className="flex flex-wrap gap-5 justify-center items-center pt-[2rem]">
        {blogItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow w-[200px] h-[250px]">
            <Image src={item.img} alt="blog image" className="rounded-lg w-full " />
            <p className="mt-4 text-gray-600 ">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default BlogSection
