"use client";



import Link from "next/link";


interface ButtonProps {
  BtnStyles: string;
  btnLink: string;
  btnTitle: string;     
}

const ButtonLink: React.FC<ButtonProps>  = ({ BtnStyles, btnLink, btnTitle }) => {

 
  return (
    <div>
      <Link 
        className={BtnStyles}
         href={btnLink}> 
        {btnTitle}
      </Link>
    </div>
  );
};

export default ButtonLink;
