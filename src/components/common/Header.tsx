"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { NavItems } from "./NavItems";
import ThemeSwitcher from "@/utils/ThemeSwitcher";
import { CircleUserRound, Text } from "lucide-react";

interface Props {}

const Header: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  const handleClose = (e: any) => {
    if (e.target.id === "screen") {
      setOpenSidebar(false);
    }
  };

  return (
    <div className="w-full relative">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[90] border-b dark:border-[#ffffff1c] duration-300"
            : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[90] dark:shadow"
        }`}
      >
        <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
          <div className="w-full flex items-center justify-between p-3">
            <div>
              <Link
                href={"/"}
                className={`text-[25px] font-Poppins font-[500] text-black dark:text-white !cursor-pointer`}
              >
                Dot Learning
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <NavItems activeItem={activeItem} isMobile={false} />
              <ThemeSwitcher />
              {/* mobile view */}
              <div className="800px:hidden">
                <Text
                  className="!cursor-pointer h-6 w-6 dark:text-white transform rotate-180"
                  onClick={() => setOpenSidebar(true)}
                />
              </div>
              <div className="hidden 800px:block">
                <CircleUserRound
                  className="!cursor-pointer h-6 w-6 dark:text-white"
                  onClick={() => setOpen(true)}
                />
              </div>
            </div>
          </div>
        </div>
        {/*mobile sidebar */}
        {openSidebar && (
          <div
            className={`fixed w-full h-screen top-0 left-0 z-[999999] dark:bg-[unset] bg-[#00000024] `}
            onClick={handleClose}
            id="screen"
          >
            <div className={`fixed w-[70%] z-[99999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0`}>
              <div className="h-[80px] flex items-center border-b justify-between">
              <Text
                className="!cursor-pointer h-6 w-6 dark:text-white transform rotate-180 ml-4"
                onClick={() => setOpenSidebar(false)}
              />
              <div className="text-center mr-4">
              <Link
                href={"/"}
                className={`text-[22px] font-Poppins font-[500] text-black dark:text-white `}
              >
                Dot Learning
              </Link>
            </div>
              </div>
              
              <NavItems activeItem={activeItem} isMobile={true} />
              <br />
              <div className="px-2 pl-5">
                <CircleUserRound
                  className="!cursor-pointer h-6 w-6 dark:text-white"
                  onClick={() => setOpen(false)}
                />
              </div>
              <br />
              <br />
              <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
                copyright @ {new Date(Date.now()).getFullYear()} Dot Learning
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
