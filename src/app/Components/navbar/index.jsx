import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <section className="relative">
        <nav className="flex  justify-center items-center bg-white lg:w-[1347.76px] lg:h-[75px] mx-auto  lg:px-[22.39px] lg:py-[17.91px] lg:pb-[17.91px] border-white border-[11.19px] rounded-[11.19px]  justify-between  ">
          <div className="flex lg:gap-[26.87px] whitespace-nowrap">
            <Link
              href=""
              className="lg:w-[53px] lg:h-[27px]  lg:text-[17.91px] lg:font-[600]  "
            >
              Home
            </Link>
            <Link
              href=""
              className=" lg:w-[79px] lg:h-[27px]  lg:text-[17.91px] lg:font-[600]  "
            >
              About Us
            </Link>
            <Link
              href=""
              className="lg:w-[76px] lg:h-[27px]  lg:text-[17.91px] lg:font-[600]  "
            >
              Features
            </Link>
            <Link
              href=""
              className="lg:w-[41px] lg:h-[27px]  lg:text-[17.91px] lg:font-[600]  "
            >
              Blog
            </Link>
          </div>
          <div className="flex justify-center z-10 bg-white items-center lg:w-[255.22px] lg:h-[194.78px] lg:rounded-[33.58px] shadow-md lg:mr-[95px]">
            <Image src="/Logo.png" width={217.16} height={161.19} alt="Logo" />
          </div>
          <div className="flex lg:gap-[11.19px] items-center justify-center">
            <Link
              href=""
              className="flex lg:w-[39.18px] lg:h-[39.18px] lg:rounded-[19.61px] bg-[#F85F89] text-white items-center justify-center"
            >
              <FaInstagram className=" lg:w-[12.31px] lg:h-[14.55px] lg:top-[12.31px] lg:left-[13.43px] lg:font-[400] lg:text-[13.43px]" />
            </Link>
            <Link
              href=""
              className="flex items-center justify-center lg:w-[39.18px] lg:h-[39.18px]  rounded-[19.61px] bg-[#55ACEE] text-white"
            >
              <FaTwitter className="" />
            </Link>
            <Link
              href=""
              className="flex items-center justify-center lg:w-[39.18px] lg:h-[39.18px] rounded-[19.61px] bg-[#3B5998] text-white"
            >
              <FaFacebook className="" />
            </Link>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
