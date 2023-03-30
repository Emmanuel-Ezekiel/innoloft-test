import React from "react";
import { useAppSelector } from "../../hooks/hooks";


const Nav = () => {
  const { getProduct }: any = useAppSelector((state) => state.product);

  return (
    <nav className="w-full md:w-auto lgs:w-full h-14 bg-[#272E71] px-[240px] md:px-[20px] flex items-center justify-center md:justify-start">
      <img
        src="/Logo.svg"
        alt=""
        className="w-[140px] h-[26.29px] md:block hidden float-left"
      />
      <div className=" w-[90rem]  h-7 md:hidden flex lgs:hidden">
        <img src="/Logo.svg" alt="" className="w-[140px] h-[26.29px]" />
        <div className="ml-[170px] w-[500px] h-[27px] border border-[#ffffff] flex  items-center justify-between bg-[#ffffff] rounded">
          <input
            type="text"
            placeholder="Enter interests, keyword, company name, etc."
            className='w-[255px] ml-[9px] text-[#374151] h-[16px] font-normal text-xs font-["Open_Sans"]'
          />
          <img src="/inno_search.svg" alt="" className="mr-[10px]" />
        </div>
        <div className="ml-[446px] w-[184px] h-[25px] flex items-center justify-center cursor-pointer">
          <img src="/inno_messenger.svg" alt="" />
          <h1 className='font-normal text-base font-["Open_Sans"] text-[#ffffff] ml-[19px]'>
            EN
          </h1>
          <img
            src="/inno_accordion-down-light.svg"
            alt=""
            className="ml-[9px]"
          />
          <img src="/inno_notification.svg" alt="" className="ml-[19px]" />
          <div className="flex items-center justify-center">
            <div className="w-[25px] h-[25px] rounded-full">
              <img
                src={getProduct?.user?.profilePicture}
                alt=""
                className="rounded-full"
              />
            </div>
            <img
              src="/inno_accordion-down-light.svg"
              alt=""
              className="ml-[6px]"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
