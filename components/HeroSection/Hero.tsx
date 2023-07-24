import React from "react";
import Styles from "./Hero.module.scss";
import Buttons from "../Buttons/Buttons";
import Image from "next/image";
import HeroImage from "@/public/images/HomeHero--collaboration-illo.avif";
import ImageContent from "@/public/images/heroStamp.svg"
import ButtonLink from "../Buttons/Buttons";
import Link from "next/link";
const Hero = () => {
  return (
    <section className='flex max-laptop:flex-col flex-row w-full max-w-[1250px] mt-[3.5rem] gap-[2rem]'>
      <div className={Styles["bg__patttren"]} />
      <div className={Styles.hero__section__left}>
        <div className={`${Styles.hero__left__content} max-mobile:max-w-[400px] pl-[1rem] max-tablet:pl-[2rem]`}>
          <h2 className="text-[2.5rem] max-w-[400px] font-extrabold text-gray-600 capitalize tracking-normal leading-[3.6rem]">A better way to talk with your customers</h2>
          <p className="max-w-[400px]  pt-5 text-lg text-justify leading-[2rem] font-normal text-slate-900">
            Manage all your customer conversations in one powerful platform that
            feels just like your inbox.
          </p>

          <div className={Styles.hero__left__btn }>
            <Link className={`${Styles.btn__hero__blue}`} href="/">try for free</Link>

            <Link className={`${Styles.btn__hero__white}`} href="/">get a demo</Link>
          </div>
         <div className={`${Styles.hero__left__contentImage} mt-[3rem] w-[300px] h-[100px] object-cover self-center `}>
          <Image  src={ImageContent} alt="hero stmap image "/>
         </div>

        </div>
      </div>
      <div className={Styles.hero__section__right}>
        <div className={`${Styles.hero__right__img}`}>
          <Image className="object-cover brightness-100" src={HeroImage} alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
