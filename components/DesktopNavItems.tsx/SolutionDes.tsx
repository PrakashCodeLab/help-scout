"use client"

import React from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import List from '../List/List'
import Link from 'next/link'
import { industryItems } from '@/constants/constants'
const SolutionDes = () => {

 




  return (
    <section>
     <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`${open ? '' : 'text-opacity-90'} group inline-flex items-center rounded-md px-3 py-2 text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
              <span className='capitalize font-medium text-[1.2rem]  text-gray-500 '>Solutions</span>
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
              <Popover.Panel className="absolute left-1/2  mt-3 w-screen flex justify-around items-start  -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl z-40">
                <div className="overflow-hidden  bg-white p-6  rounded-lg shadow-lg  flex  gap-[2rem]">
               
               <ul  className='mt-2'>
               <p className='uppercase text-[1rem] font-medium '>use cases</p>
               <List  link="customer support" desc='Support customers across email, live chat, and more'/>
               <List link="shared inbox" desc='Manage and respond to emails as a team'/>
               <List link="help center" desc='Create sites with answers to FAQs'/>
               </ul>
               <div className=' p-3'>
                  <p className='mt-[1.3rem] uppercase font-semibold text-lg '>industry</p>
                  <ul className='flex  flex-col gap-5 mt-5'>
                    {industryItems.map((item)=>(
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

export default SolutionDes
