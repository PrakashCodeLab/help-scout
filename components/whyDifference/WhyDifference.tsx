"use client"

import React ,{useEffect, useState}from 'react';
import WhyHelp from '../whyHelpScout/WhyHelp';
import DifferenceHelp from '../differenceHelp/DifferenceHelp';
import Styles from "./WhyDifference.module.scss";




const WhyDifference = () => {


const [statePage, setPage] = useState(true);

const [pageScroll , setScrollPage] = useState(false);
  

     useEffect(()=>{

    
         const handleScroll = ()=>{

          if(typeof window !== "undefined"){
            if(window.scrollY>80){
              setScrollPage(true);
            }else{
              setScrollPage(false);
            }
          }
         
         
          
         };

         if(typeof window !== "undefined"){
          window.addEventListener('scroll', handleScroll);

          return()=>{
           window.removeEventListener('scroll', handleScroll);
          };
         }
        },[])



  
  return (
    <section  className='   w-full grid items-center justify-center pb-[3rem] bg-blue-50'>
         <div className='max-w-[1250px] '>
          <div id='why-difference-section' className={`${pageScroll? Styles.sticky : ''} w-full flex justify-center items-center shadow-md rounded-md`}>
          <button  onClick={(pre)=>{setPage(true)}} className='flex-1   relative flex items-center justify-center p-4'>
           <span className={`${statePage? Styles.text : ""} text-base text-gray-600 font-medium capitalize`}>why?</span>
            <span className={`${statePage ? Styles.span__border : null}`}></span>
          </button> 
          <button  onClick={(pre)=>{setPage(false)}} className='flex-1  relative flex items-center justify-center p-4'>
           <span className={`${statePage!== true ? Styles.text : ""} text-base font-medium capitalize text-gray-800`}>the difference</span>
            <span className={`${statePage!== true ? Styles.span__border : null}`}></span>
          </button>

          </div>

          <div >

            {
              statePage ? 
                <WhyHelp/>
                :<DifferenceHelp/>
                
            }
            


           
          </div>
         
         </div>
    </section>
  );
}

export default WhyDifference;
