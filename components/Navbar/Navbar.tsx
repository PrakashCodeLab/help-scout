"use client"


import React ,{useState, useEffect} from 'react'
import  Styles from './Navbar.module.scss';
import MobileNavbar from './MobileNavbar';
import MobileItems from '../navbarItems/SolutionItems';
import DesktopNavbar from './DesktopNavbar';


const Navbar = () => {

    
   const [mobnavbar ,setNavbar]= useState(false);
   const [scrollPage , setScrollPage] = useState(false);
  
   useEffect(()=>{ 
          const handleresize =()=>{
            if (typeof window !== 'undefined') { 
              setNavbar(window.innerWidth < 1000);
            }    
          }

       const handleScroll =()=>{
        if (typeof window !== 'undefined') {
    
        setScrollPage(window.scrollY > 0);  
      
    }
       }   

       if (typeof window !== 'undefined') {
        setNavbar(window.innerWidth < 1000);
        window.addEventListener('resize', handleresize);
        window.addEventListener('scroll', handleScroll);
      }
  
  return(()=>{
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', handleresize);
      window.removeEventListener('scroll', handleScroll);
    }
  })

   },[])



  return (
    <header className={`${Styles.header__section}  ${scrollPage ? Styles.scrolled : ''}`}>
    
    
     {
    mobnavbar ?(
      <MobileNavbar/>
     
    ):(
     <DesktopNavbar/>
    )
     }
   
    </header>
  )
}

export default Navbar
