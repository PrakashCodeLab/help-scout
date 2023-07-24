import Image from 'next/image';
import React from 'react';
import TopImage from "@/public/images/topimage.avif";
import BottomImage from "@/public/images/bottom1.avif";
import Styles from "./Difference.module.scss";
import Img1 from '@/public/images/differnce1.jpg'
import Img2 from "@/public/images/Difference2.avif";
import Img3 from '@/public/images/Differnce3.avif';



const differnceItems = [
  {
    id: 1,
    title: "Just the right balance for growth",
    desc: "Enterprise tools cost more, are difficult to use, and take longer to implement. According to G2, Help Scout is the easiest-to-use platform, with the fastest time to ROI.",
    img: Img1,
  },
  {
    id: 2,
    title: "A better platform and partner",
    desc: "Third party research shows Help Scout has a net promoter score of 31, while our competitors&apos; score is 2. The market has spoken—more customers are satisfied with our platform and service.",
    img: Img2,
  },
  {
    id: 3,
    title: "How Brain.fm Achieved a 95% CSAT Score With Help Scout",
    desc: "Figuring out which support tool to choose — or even where to start researching — can be challenging. And even after  solution.",
    img: Img3,
  },
];





const DifferenceHelp = () => {
  return (
    <div className="w-full container flex justify-center items-center flex-col bg-light-sky-blue p-4 ">
    <div className="text-center mb-6 mt-[4rem] flex flex-col justify-center items-center">
      <h3 className="text-3xl font-bold mb-2 max-tablet:max-w-[300px] pt-3 max-w-[600px] capitalize leading-[3rem]">Over 80% of midsize businesses that start with Help Scout stick around for 4 or more years</h3>
      <p className="text-gray-700 max-tablet:max-w-[400px] pt-3">And customers that compare us with other platforms repeatedly come back.</p>
    </div>

    <div className={Styles.img__section}>
        <Image src={TopImage} className={Styles.img__top} alt="top image" />
        <Image className={Styles.img__bottom} src={BottomImage} alt="bottom image" />
    </div>

    <div className="flex justify-center items-center gap-5 mt-[7rem] max-desktop:flex-col  ">
      {differnceItems.map((item) => (
        <div key={item.id} className="p-4 bg-white shadow-md rounded-lg w-[400px]">
          <div className="w-32 mx-auto mb-4">
            <Image className='object-cover w-full h-[100px]' src={item.img} alt={`${item.title}`} />
          </div>
          <h6 className="text-xl font-semibold mb-2">{item.title}</h6>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
  );
}

export default DifferenceHelp;
