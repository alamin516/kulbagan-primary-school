import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Hero: React.FC<Props> = () => {
  return (
    <div className="w-full 1000px:flex items-center">
      <div className="absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1000px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[50vh] w-[50vh] hero_animation "></div>
      <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-center 800px:justify-end pt-[70px] 1000px:pt-0 z-10">
        <Image
          src={"/assets/images/hero.jpg"}
          alt="hero-image"
          width={1000}
          height={1000}
          className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-auto z-10 rounded-full"
          priority
        />
      </div>
      <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-0 text-center 1000px:text-left mt-[150px]">
        <h2 className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:!w-[55%]">
          Improve Your online Learning Experience Better Instantly
        </h2>
        <br />
        <p className="dark:text-white text-[#000000c7] text-[18px] font-[600] font-Josefin  1500px:!w-[55%] 1100px:!w-[78%] px-3">
          We have 10k Online course & 50k+ Online registered students. Find your
          desired Courses from them
        </p>
        <br />
        <br />
        <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative px-3">
          <input
            type="search"
            placeholder="Search Course"
            className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-sm p-2 w-full h-full outline-none text-green-300 dark:text-[#ffffffe5] text-xl font-medium font-Josefin"
          />
          <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-green-600 rounded-r-[5px]">
            <Search className="text-white" />
          </div>
        </div>
        <br />
        <br />
        <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center px-3">
          <Image
            src={"/assets/images/hsp.webp"}
            alt="hero-image"
            width={50}
            height={50}
            className="rounded-full h-[50px] w-[50px] border-[2px] dark:border-white border-green-500"
          />
          <Image
            src={"/assets/images/hsp-1.webp"}
            alt="hero-image"
            width={50}
            height={50}
            className="rounded-full h-[50px] w-[50px] ml-[-20px] border-[2px] dark:border-white border-green-500"
          />
          <Image
            src={"/assets/images/hsp-2.webp"}
            alt="hero-image"
            width={50}
            height={50}
            className="rounded-full h-[50px] w-[50px] ml-[-20px] border-[2px] dark:border-white border-green-500"
          />
          <p className="font-Josefin dark:text-green-200 text-[#000000b2] 1000px:pl-3 text-[18px] font-[600]">
            50k+ People already trusted us.{" "}
            <Link href={"/courses"} className="text-green-600">
              View Courses
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
