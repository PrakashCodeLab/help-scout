"use client"

import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import {MdKeyboardArrowRight} from 'react-icons/md'
import Styles from "./LinkSec.module.scss";

interface linkProps {
  url:string;
  btnTitle: string;
}

const LinkSec = ({url,btnTitle}:linkProps ) => {
   
    const router = useRouter();


  return (
    <div>
        <button  className={`${Styles.btn__arrow} flex w-[100px] h-[50px] justify-center items-center text-blue-700  capitalize text-sm  `}   onClick={()=>{router.push(`${url}`)}}>
            
         <span> {btnTitle}</span>  
        
         <span><MdKeyboardArrowRight  className={Styles.arrow} size={20}/> </span>
        </button>
    </div>
  )
}

export default LinkSec
