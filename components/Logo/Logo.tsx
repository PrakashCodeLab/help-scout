import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import  Styles from './Logo.module.scss';

import LogoImage from '@/public/logos/logo.png';


const Logo = () => {
  return (
    <>
       <div className={Styles.navbar__logo__section}>
          <Link href="/" >
            <Image width={30} height={30} src={LogoImage} alt="logo image" />
            
          </Link>
          <p className='capitalize text-[1rem] font-bold ml-1 '>help scout</p>
        </div>
    </>
  )
}

export default Logo
