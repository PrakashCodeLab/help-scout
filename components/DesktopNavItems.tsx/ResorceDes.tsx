"use client"

import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import React ,{Fragment} from 'react'
import List from '../List/List'
import { inspirationItems , doItems } from '@/constants/constants';
import Link from 'next/link'
import Image from 'next/image'

import dogLogo from "@/public/images/SiteNav-overview-resources-graphic.png"
import LinkSec from '../LinkSec/LinkSec'
const ResorceDes = () => {
  return (
    <section>
       <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md px-3 py-2 text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className='capitalize font-medium text-[1.2rem]  text-gray-500 '>resources</span>
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2  mt-3 w-screen flex justify-around items-start max-w-[800px]   -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl z-40">
                <div className="overflow-hidden  p-6   bg-white rounded-lg shadow-lg  flex  gap-[2rem]">
               
               <ul  className='mt-2'>
               <p className='uppercase text-[1rem] font-medium '>tool & templates</p>
               <List  link="explore the support toolkit" desc=''/>
                <p className='pt-3 max-w-[300px]'>grow your skills and teams with our collection of free resources , guides and courses</p>

                <li className='mt-5'>
                       <LinkSec btnTitle='learn more' url='/'/>
                      
                    </li>

                    
                     <Link className='absolute bottom-0 left-[200px] block' href='/'>
                     
                       <Image src={dogLogo}  width={100} height={250} alt="dog image to help scout" />


                     </Link>

               </ul>
               <div>
                  <p className='mt-[1.3rem] uppercase font-semibold text-lg '>inspiration</p>
                  <ul className='flex flex-col gap-3 mt-5 '>
                    {inspirationItems.map((item)=>(
                      <li  key={item.id}><Link  className='text-[1rem] capitalize font-bold text-slate-500 ' href={item.link}>{item.title}</Link></li>  
                    ))}
                  </ul>
               </div>

               <div>
                  <p className='mt-[1.3rem] uppercase font-semibold text-lg '>how-tos</p>
                  <ul className='flex flex-col gap-3 mt-5 '>
                    {doItems.map((item)=>(
                      <li  key={item.id}><Link  className='text-[1rem] capitalize font-bold text-slate-500 ' href={item.link}>{item.title}</Link></li>  
                    ))}
                  </ul>
               </div>
                     


                </div>
                
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </section>
  )
}

export default ResorceDes
