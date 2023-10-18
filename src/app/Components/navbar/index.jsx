import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <section className="relative">
        <nav className="flex  justify-center items-center bg-white lg:w-[1347.76px] lg:h-[75px] mx-auto  lg:px-[22.39px] lg:py-[17.91px] lg:pb-[17.91px] border-white border-[11.19px] rounded-[11.19px]  justify-between  ">
          <div className="flex gap-[26.87px] whitespace-nowrap">
            <Link
              href=""
              className="w-[53px] h-[27px]  text-[17.91px] font-[600]  "
            >
              Home
            </Link>
            <Link
              href=""
              className=" w-[79px] h-[27px]  text-[17.91px] font-[600]  "
            >
              About Us
            </Link>
            <Link
              href=""
              className="w-[76px] h-[27px]  text-[17.91px] font-[600]  "
            >
              Features
            </Link>
            <Link
              href=""
              className="w-[41px] h-[27px]  text-[17.91px] font-[600]  "
            >
              Blog
            </Link>
          </div>
          <div className="flex justify-center z-10 bg-white items-center w-[255.22px] h-[194.78px] rounded-[33.58px] shadow-md mr-[95px]">
            <Image src="/Logo.png" width={217.16} height={161.19} alt="Logo" />
          </div>
          <div className="flex gap-[11.19px] items-center justify-center">
            <Link
              href=""
              className="flex w-[39.18px] h-[39.18px] rounded-[19.61px] bg-[#F85F89] text-white items-center justify-center"
            >
              <FaInstagram className=" w-[12.31px] h-[14.55px] top-[12.31px] left-[13.43px] font-[400] text-[13.43px]" />
            </Link>
            <Link
              href=""
              className="flex items-center justify-center w-[39.18px] h-[39.18px]  rounded-[19.61px] bg-[#55ACEE] text-white"
            >
              <FaTwitter className="" />
            </Link>
            <Link
              href=""
              className="flex items-center justify-center w-[39.18px] h-[39.18px] rounded-[19.61px] bg-[#3B5998] text-white"
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
