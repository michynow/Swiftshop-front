"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  const [showSidebar, setShowSidebar] = useState<Boolean>(false);
  return (
    <>
      <header className="border-b py-4 font-semibold">
        <div className="container flex flex-row items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt=""
              width={125}
              height={45}
            />
          </Link>
          <div className="flex gap-4">
            <button className="account">
              <AiOutlineUser className="w-6 h-6" />
            </button>
            <button className="favourites">
              <AiOutlineHeart className="w-6 h-6" />
            </button>
            <button className="cart">
              <SlBasket className="w-6 h-6" />
            </button>
            <button
              onClick={() => setShowSidebar(true)}
              className="mobileNav"
            >
              <RxHamburgerMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </>
  );
}
