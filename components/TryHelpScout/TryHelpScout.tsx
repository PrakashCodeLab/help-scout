import React from "react";
import Styles from "./TryHelp.module.scss";
import Image from "next/image";
import TryImage from "@/public/images/tryScout.avif";
import Buttons from "../Buttons/Buttons";
import ImageStamp from "@/public/images/heroStamp.svg";
import LinkSec from "../LinkSec/LinkSec"; 
import ButtonLink from "../Buttons/Buttons";
import Link from "next/link";
 
const TryHelpScout = () => {
  return (
    <div className="w-full  flex justify-between items-center pt-[5rem] bg-gradient-to-r from-blue-100 to-white  max-laptop:flex-col">
      <div className="pl-[10rem] max-laptop:pl-[3rem] flex-1 flex flex-col">
        <h4 className="text-[3rem] font-bold  pb-[1rem] text-gray-700 capitalize ">
          try help scout
        </h4>
        <p className="max-w-[350px] pb-[1.5rem]  max-tablet:text-justify text-[1.2rem] capitalize text-slate-700 font-medium leading-[2.4rem] ">
          Learn the platform in less than an hour. Become a power user in less
          than a day.
        </p>

        <Link className={`${Styles.btn__free}`} href="/">try for free</Link>
         

        <div className="flex gap-[2rem] mt-[2rem] mb-[3rem] max-tablet:flex-col">
          <Image src={ImageStamp} alt="stamp image" />

          <div>
            <p>Want a tour of Help Scout?</p>
            <LinkSec btnTitle="get a demo" url="/" />
          </div>
        </div>
      </div>
      <div className="flex-1  self-end">
        <Image src={TryImage} className="w-auto" alt="image " />
      </div>
    </div>
  );
};

export default TryHelpScout;
