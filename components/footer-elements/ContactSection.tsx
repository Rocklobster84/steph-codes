"use client";
import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export const ContactSection = () => {
  return (
    <section className="flex grow gap-8 items-center text-md md:text-2xl tracking-normal leading-none text-white mr-10 md:mr-0">
      <div className="flex flex-col grow shrink-0 items-center md:items-start my-auto basis-0 w-fit pl-10">
        <h4>Get in Touch</h4>
        <div className="mt-6">
          <a href="mailto:steph@stephcodes.dev">steph@stephcodes.dev</a>
        </div>
        <div className="mt-6">
          <a href="tel:+18175219221">+1 817-521-9221</a>
        </div>
        <div className="flex gap-8 my-auto mt-6">
        <a href="https://github.com/Rocklobster84" target="_blank"><FaGithub /></a>

        <a href="https://www.instagram.com/rocklobster1984/" target="_blank"><FaInstagram /></a>

        <a href="https://www.linkedin.com/in/stephthomp/" target="_blank"><FaLinkedin /></a>
      </div>
      </div>

      
    </section>
  );
};