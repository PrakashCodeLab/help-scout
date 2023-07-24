import Link from 'next/link'
import React from 'react'

interface FooterLink {
  id: number;
  title: string;
  link: string;
}

interface FooterLinksProps {
  FootTitle: string;
  FootMap: FooterLink[];
  FootLink: string;
}

const FooterLinks :React.FC<FooterLinksProps> = ({ FootTitle , FootMap ,FootLink }) => {
    return (
      <div className='flex flex-col gap-2 justify-start items-baseline max-tablet:items-center '>
        <h4 className='text-lg uppercase text-white font-medium tracking-normal self-start max-tablet:self-center'>{FootTitle}</h4> 
        <ul className='flex flex-col gap-2 justify-start items-baseline'>
          {FootMap.map((link) => (
            <li  key={link.id}>
              <Link className='text-gray-400 hover:text-white capitalize text-sm' href={link.link}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default FooterLinks
