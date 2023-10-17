import React from "react";
import Navbar from "../navbar";
import Image from "next/image";
import { Nunito, DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
const inter = Nunito({ subsets: ["latin"] });
const DM = DM_Sans({ subsets: ["latin"] });
const bt = Plus_Jakarta_Sans({ subsets: ["latin"] });

const Hero = () => {
  return (
    <>
      <section className="Hero-bg pt-[100px]">
        <Navbar />
        <section className="flex flex-col md:flex-row items-center max-w-[1347.76px] mx-auto">
          <div className="flex w-full flex-col md:flex-row items-start mt-[80px] text-white">
            <div className="w-[35%]  text-left  ">
              <h1
                className={`text-[64px] line-height-[90.6px] font-[800] ${inter.className}`}
              >
                Supporting <span className="flex">Daycare</span>
                Providers
              </h1>
              <p
                className={`${DM.className} text-[30px] line-height-[35.82px] mt-[26.87]`}
              >
                Because Your passion Doesn't <br /> Clock Out
              </p>
              <button
                className={`${bt.className} text-white bg-[#25314C]  line-height-[26.87px] mt-[44.78px]  font-[500] px-[50px]  py-[16px] rounded-md`}
              >
                Read More
              </button>
            </div>
            <div className="w-[70%] relative left-[90px]  ">
              <div className="pr-[30px]">
                <Image
                  className="w-[170px] ml-auto"
                  src="Rocket.png"
                  alt="rocket"
                  width={200}
                  height={200}
                />
              </div>

              <Image
                className="w-full mt-[-24px]"
                src="/1.png"
                alt="hero"
                width={3000}
                height={3000}
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
