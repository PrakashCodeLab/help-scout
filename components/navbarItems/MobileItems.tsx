import React from 'react';
import SolutionsItems from './SolutionItems';
import ProductItems from './ProductItems';
import ResourceItems from './ResourcesItems';
import Link from 'next/link';

interface MobileItemsProps {
  isOpen : boolean ;
  handleLinkClick : React.MouseEventHandler<HTMLAnchorElement>;
}


const MobileItems = ({ isOpen, handleLinkClick }:MobileItemsProps) => {
  return (
    <section className={` w-full h-auto  border   overflow-y-scroll bg-white`}>
      <div className='w-full h-[100vh] px-7 pt-[3rem] pb-[5rem] flex flex-col gap-5 justify-start items-start'>
        <SolutionsItems/>
        <ProductItems/>
        <ResourceItems/>

        <ul className='px-7 flex flex-col gap-4'>
          <li>
            <Link onClick={handleLinkClick} className='capitalize font-bold text-[1.3rem] text-slate-700' href='/'>pricing</Link>
          </li>
          <li>
            <Link onClick={handleLinkClick} className='capitalize font-bold text-[1.3rem] text-slate-700' href='/login'>login</Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default MobileItems;
