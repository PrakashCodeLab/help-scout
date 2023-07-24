import Link from "next/link";
import React from "react";

const List = ({ link, desc }:{link:string ,desc:string}) => {
  return (
    <>
      <li className="mt-[1rem]">
<Link className=" font-bold text-[1.2rem] mt-[0.8rem] text-gray-600  capitalize"
          href="/"
        >
          {link}
        </Link>
        <p className="pt-2 text-justify text-sm tracking-wide max-w-[280px]">{desc}</p>
      </li>
    </>
  );
};

export default List;
