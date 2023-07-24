import React from 'react';
import Styles from './WhatHelp.module.scss';
import Image, { StaticImageData } from 'next/image';

interface helpCardProps {
  img:StaticImageData;
  title:string;
  desc:string;
}


const HelpCard  = ({img , title , desc}:helpCardProps) => {
  return (
    <div className={`${Styles.container__box} `}>
        <div className={Styles.container__img}>
       <Image  className={Styles.img} src={img} alt='Help Card' />
       </div>

       <p className='text-[0.7rem] capitalize font-medium max-w-[50px] text-center '>{title}</p>
       
       <div className={`${Styles.container__content} `}>
        <p className={Styles.paragraph}>{desc}</p>
       </div>
       
       </div>
  );
}

export default HelpCard;
