"use client"

import React from 'react'
import Styles from './Navbar.module.scss';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import List from '../List/List';
import {featuresItems } from '@/constants/constants';
const ProductItems = () => {
  return (
      <section>
         <div className="w-full px-4 ">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center gap-2 w-full justify-between rounded-lg px-2 py-2 text-left  font-medium text-gray-500 capitalize hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className='text-[1.3rem]'>product</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p className='uppercase text-[1rem] font-medium '>overview</p>
               <ul  className='mt-4'>
               <List link="get an overview of the help scout platform" desc=''/>
              
               </ul>
               <div>
                  <p className='mt-[1.3rem] uppercase font-semibold text-lg '>industry</p>
                  <ul className='flex flex-col gap-3 mt-5 '>
                    {featuresItems.map((item)=>(
                      <li  key={item.id}><Link  className='text-[1rem] capitalize font-bold text-slate-500 ' href={item.link}>{item.title}</Link></li>  
                    ))}
                  </ul>
               </div>
              
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      </div>
   </section>
  )
}

export default ProductItems
