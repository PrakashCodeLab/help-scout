"use client"

import React from 'react'
import Styles from './Navbar.module.scss';
import Logo from '../Logo/Logo';
import Link from 'next/link';
import Buttons from '../Buttons/Buttons';
import { StyesTail } from '@/constants/constants';
import DesNavItems from '../DesktopNavItems.tsx/DesNavItems';
import ButtonLink from '../Buttons/Buttons';


const DesktopNavbar = () => {
  return (
    <nav className={Styles.desnavbar__section}>
        <Logo/> 
        <DesNavItems/>
      
      
      <div className={Styles.button__group__navbar }>
      <Link className='text-sm capitalize ' href='/login'>login</Link>
      <Link href='/'  className={`${Styles.btnNav}`}>free trial</Link>

    </div>
        
    </nav>
  )
}

export default DesktopNavbar
