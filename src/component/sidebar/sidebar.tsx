import React from "react";
import { useAppSelector } from "../../hooks/hooks";

const Sidebar = () => {
  const { getProduct }: any = useAppSelector((state) => state.product);
  return (
    <aside className="w-[280px] h-[220px] mt-[22px] flex flex-col gap-[10px] md:hidden">
      <div className="w-full h-[70px] flex items-center gap-[15px] ">
        <img
          src={getProduct?.user?.profilePicture}
          alt=""
          className="w-[70px] h-[70px] rounded-full"
        />
        <div className=" h-[43px] flex flex-col items-start ">
          <h1 className='font-semibold text-[18px] font-["Open_Sans"] text-[#374151]'>{getProduct?.user?.firstName} {getProduct?.user?.lastName}</h1>
          <p  className='font-normal text-[16px] font-["Open_Sans"] text-[#374151]'>{getProduct?.company?.name}</p>
        </div>
      </div>
      <div className="w-full h-[40px] flex items-center gap-[12px] pl-[8px] cursor-pointer">
        <img src="/inno_home.svg" alt="" className="w-[16px] h-[16px]" />
        <h1 className='font-normal text-base font-["Open_Sans"] text-[ #374151]'>Home</h1>
      </div>
      <div className="w-full h-[40px] flex items-center gap-[12px] pl-[8px] cursor-pointer">
        <img src="/inno_group.svg" alt="" className="w-[16px] h-[16px]" />
        <h1 className='font-normal text-base font-["Open_Sans"] text-[ #374151]'>Members</h1>
      </div>
      <div className="w-full h-[40px] flex items-center pl-[8px]">
        <img src="/inno_organizations.svg" alt="" className="w-[16px] h-[16px] cursor-pointer" />
        <h1 className='font-normal text-base font-["Open_Sans"] text-[ #374151] ml-[12px]'>Organizations</h1>
        <img src="/inno_accordion-down-light1.svg" alt="" className="w-[16px] h-[16px] ml-[113px]" />
      </div>
  
    </aside>
  );
};

export default Sidebar;
