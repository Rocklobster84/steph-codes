"use client";
import * as React from "react";
import CustomButton from "../CustomButton";
import Link from "next/link";


export const NavigationSection = () => {
  return (
    <nav className="flex gap-6 items-center flex-col md:flex-row self-stretch my-auto text-md md:text-2xl leading-none text-center text-white max-md:mt-10 max-md:max-w-full">
      <Link href="/#hero">
        Home
      </Link>
      <Link href="/#my-work">
        My Work
      </Link>
      <Link href="/#experience">
        Experience
      </Link>
      <Link href="/#about">
        About
      </Link>
      <Link href="/#hire-me">
        <CustomButton
              title="Hire Me"
              btnType="button"
              containerStyles="text-white rounded-sm bg-neutral-500 min-w-[130px] py-3"
        />
      </Link>
    </nav>
  );
};
