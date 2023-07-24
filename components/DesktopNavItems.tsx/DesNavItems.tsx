import React from 'react'
import SolutionDes from './SolutionDes'
import ProductDes from './ProductDes'
import ResorceDes from './ResorceDes'
import Link from 'next/link'

const DesNavItems = () => {
  return (
    <section className='w-full ml-6  flex  gap-5 justify-start items-center '>
    <SolutionDes/>
    <ProductDes/>
    <ResorceDes/>

    <ul className='flex justify-center items-center'>
     <li>
       <Link className='capitalize font-medium text-[1.2rem]  text-gray-500 ' href='/'>pricing</Link>
     </li>
    
    </ul>

    

</section>
  )
}

export default DesNavItems
