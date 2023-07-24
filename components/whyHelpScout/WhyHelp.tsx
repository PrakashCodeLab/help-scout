import Image from 'next/image';
import React from 'react';
import whyImage1 from "@/public/images/why1.avif";
import whyImage2 from "@/public/images/why2.avif";
import whyImage3 from "@/public/images/why3.avif";



  const whyPageItems = [
    {
      id: 1,
      title: "Get started in minutes",
      desc: "Help Scout is as easy to use as an email inbox, so your whole team can focus on what really matters: customer relationships.",
      img1: whyImage1,
    },
    {
      id: 2,
      title: "Increase productivity by 52%",
      desc: "Level-up your teamwork, organize your inbox, and automate repeated tasks so your people can respond to more customers.",
      img1: whyImage2,
    },
    {
      id: 3,
      title: "Scale to support millions",
      desc: "Unlock power as you grow. Global teams use Help Scout to support tens of millions of customers and get to inbox zero.",
      img1: whyImage3,
    },
  ];



const WhyHelp = () => {
  return (
    <div className="w-full container flex justify-center items-center flex-col bg-light-sky-blue p-4">
    <div className="text-center mb-6 mt-[4rem] flex flex-col justify-center items-center">
      <h3 className="text-3xl font-bold mb-2 max-tablet:max-w-[300px] pt-3">Voted “Best ROI” by Customers on G2</h3>
      <p className="text-gray-700 max-tablet:max-w-[400px] pt-3">Happy customers become loyal customers. That&apos;s why Help Scout has won “Best ROI” year after year.</p>
    </div>

    <div className="flex justify-center items-center gap-5 mt-[3rem] max-desktop:flex-col ">
      {whyPageItems.map((item) => (
        <div key={item.id} className="p-4 bg-white shadow-md rounded-lg w-[400px]">
          <div className="w-32 mx-auto mb-4">
            <Image src={item.img1} alt={`${item.title}`} width={128} height={128} />
          </div>
          <h6 className="text-xl font-semibold mb-2">{item.title}</h6>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  );
}

export default WhyHelp;
