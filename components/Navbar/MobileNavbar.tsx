import React, { useState } from "react";
import Styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MobileItems from "../navbarItems/MobileItems";
import Logo from "../Logo/Logo";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={Styles.mobnavbar__section}>
      <Logo />
      <div className={Styles.navbar__hamburger__section}>
        <button onClick={handleToggle} className="w-[35px] h-[35px] text-gray-500">
          {isOpen ? (
            <XMarkIcon className="w-[35px] h-[35px]" />
          ) : (
            <Bars3Icon className="w-[35px] h-[35px]" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="block w-full top-[5.5rem] absolute overflow-auto left-0 z-50">
          <MobileItems isOpen={isOpen} handleLinkClick={handleToggle} />
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
