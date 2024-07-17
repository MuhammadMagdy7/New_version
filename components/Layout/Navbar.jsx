"use client";

import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import logo from "../../public/img/logo.png";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();

  const handleShowDropdown = () => setShowDropdown((prev) => true);
  const handleHideDropdown = () => setShowDropdown((prev) => false);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <Image src={logo} className="w-[40px] md:w-[60px]" />
        </Link>


        {
                session?.user ? (
                    <>
                        <li className="list-none">
                            <div className='relative'>
                                <Image 
                                    onClick={handleShowDropdown}
                                    src='/img/logo.png'
                                    alt='avatar'
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                    className='w-10 h-10 rounded-full cursor-pointer'
                                />
                                {showDropdown && (
                                    <div className='absolute top-0 right-0 bg-primaryColorLight p-5'>
                                        <AiOutlineClose onClick={handleHideDropdown} className='w-full cursor-pointer' />
                                        <Link onClick={handleHideDropdown} href={"/account"}>Profile</Link>
                                        <Link onClick={handleHideDropdown} href="/dashboard"  className={ pathname === '/dashboard' ? "text-primaryColor font-bold block" : "block"}>Create</Link>
                                        <button onClick={() => {signOut(); handleHideDropdown();}}>Logout</button>
                                    </div>
                                )}
                            </div>
                        </li>
                    </>
                ): ""}

        <Menu

        />

        {mobileMenu && (
          <MenuMobile
            setMobileMenu={setMobileMenu}
          />
        )}

        <div className="flex items-center gap-2 text-black  md:hidden">
          {/* Mobile icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* Mobile icon end */}
        </div>
        
      </Wrapper>
    </header>
  );
};

export default Header;
