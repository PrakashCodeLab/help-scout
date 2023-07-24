import React from "react";
import Styles from "./Footer.module.scss";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import FooterImage from "@/public/images/signature.png";
import Link from "next/link";
import LogoImage from "@/public/logos/logo.png";
import Footercertificate from "@/public/images/footStamp.svg";
import FooterPledge from "@/public/images/footPledge.svg";
import FooterLinks from "./FooterLinks";
import {
  FootGethelp,
  FootPlatform,
  FooterCompany,
  FooterCompare,
} from "@/constants/constants";

const Footer = () => {
  const FootYear = new Date();

  const FootCurrentYear = FootYear.getFullYear();

  return (
    <footer className=" w-full  bg-slate-900 ">
      <div className="max-w-[1250px]  m-auto">
        <div
          className={`${Styles.footer__top__section} pt-[4rem] pb-[2rem] p-[1rem]  gap-[50px] grid grid-cols-5  items-center max-tablet:pl-[3rem] max-laptop:pl-[10rem] max-laptop:grid-cols-2 max-laptop:justify-center max-laptop:p-[4rem] max-laptop:items-center max max-tablet:grid-cols-1`}
        >
          <div className="flex flex-col justify-between h-[350px] max-tablet:h-auto max-tablet:justify-center max-tablet:items-center max-tablet:gap-3">
            <div className="flex flex-col gap-[2rem] items-center justify-center max-tablet:items-center">
              <Image
                className="object-contain "
                width={40}
                height={40}
                src={LogoImage}
                alt="Logo Footer"
              />
              <p className="text-white font-normal text-base max-w-[250px] text-center pb-[2rem]">
                Tools for the world&apos; most customer-centric businesses
              </p>
            </div>
            <div className="flex gap-5">
              <Link href="/">
                <Image
                  width={60}
                  height={40}
                  className="w-auto"
                  src={Footercertificate}
                  alt="Logo Foot"
                />
              </Link>
              <Image
                width={40}
                height={40}
                className="w-auto"
                src={FooterPledge}
                alt="Logo Foot"
              />
            </div>
          </div>

          <FooterLinks FootTitle={"platform"} FootMap={FootPlatform}  FootLink='/'/>
          <FooterLinks FootTitle={"compare"} FootMap={FooterCompare}   FootLink='/'/>
          <FooterLinks FootTitle={"company"} FootMap={FooterCompany}  FootLink='/' />
          <FooterLinks FootTitle={"get help"} FootMap={FootGethelp}  FootLink='/'/>
        </div>
        <div
          className={`${Styles.footer__bottom__section}  flex w-full justify-around items-center border-t-2 border-gray-500 pt-[0.9rem] pb-[2.5rem] max-laptop:flex-col max-laptop:gap-4 max-laptop:justify-around max-laptop:items-center`}
        >
          <div className={`${Styles.footer__social_section} flex gap-5 `}>
            <Link href="/">
              {" "}
              <FaTwitterSquare className="text-gray-500 text-[1.5rem] " />
            </Link>
            <Link href="/">
              {" "}
              <FaFacebookSquare className="text-gray-500 text-[1.5rem] " />
            </Link>
            <Link href="/">
              {" "}
              <FaLinkedin className="text-gray-500 text-[1.5rem] " />
            </Link>
          </div>
          <div
            className={`${Styles.footer__content__section} flex gap-2 max-laptop:flex-col max-laptop:gap-6`}
          >
            <Image
              className="max-laptop:self-center max-laptop:mt-3 w-auto"
              src={FooterImage}
              width={50}
              height={30}
              alt="footer image"
            />
            <p className="text-white">
              {" "}
              Made by hand in over 125 cities around the world.{" "}
              <span className="max-laptop:block max-laptop:text-center max-laptop:pt-5">
                &copy;
                <span className="text-gray-600 ">
                  <span className="">{FootCurrentYear}</span>help scout
                </span>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
