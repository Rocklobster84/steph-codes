"use client";

import Link from "next/link";
import CustomButton from "./CustomButton";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="px-5 py-3 bg-neutral-900 shadow-md ">
      <nav className="px-10">
        <div className="h-8 items-center flex justify-between">
          <div className="text-xl text-white font-bold px-5 uppercase"><Link href="/">Steph Codes</Link></div>
          <div className="hidden sm:block">
          <Link href="/">
            <span className="px-5">Home</span>
          </Link>
          <Link href="/#my-work">
            <span className="px-5">My Work</span>
          </Link>
          <Link href="/#experience">
            <span className="px-5">Experience</span>
          </Link>
          <Link href="/#about">
            <span className="px-5">About</span>
          </Link>
          <Link href="/photography">
            <span className="px-5">Photography</span>
          </Link>
          <Link href="/#hire-me">
            <CustomButton
              title="Hire Me"
              btnType="button"
              containerStyles="text-white rounded-sm bg-neutral-500 min-w-[130px]"
            />
          </Link>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="block sm:hidden px-4 text-2xl"><CiMenuBurger /></button>
        </div>

        <div className={`${ isOpen ? "block" : "hidden" } sm:hidden bg-neutral-900 space-y-2 pt-3 pb-3`}>
          <Link href="/">
            <span className="px-5 text-lg text-white-600 block">Home</span>
          </Link>
          <Link href="/#my-work">
            <span className="px-5 text-lg text-white-600 block">My Work</span>
          </Link>
          <Link href="/#experience">
            <span className="px-5 text-lg text-white-600 block">Experience</span>
          </Link>
          <Link href="/#about">
            <span className="px-5 text-lg text-white-600 block">About</span>
          </Link>
          <Link href="/photography">
            <span className="px-5">Photography</span>
          </Link>
          <Link href="/#hire-me">
            <span className="px-5 text-lg text-white-600 block">Hire Me</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

