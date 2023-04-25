import { AiOutlineBars } from "react-icons/ai";
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';


const Nav = ({setType,popUpToggle}) => {


  return (
    <>
      <div className="w-1/3"><img className="h-[50px] md:h-[70px]" src="banner.jpg"/></div>
      <div className={` flex flex-row p-2 font-kanit border-b-4 border-red-500  justify-between w-screen px-4 text-sm md:text-xl cursor-pointer ${popUpToggle === true ?"backdrop blur-sm":""}`}>
      <div onClick={()=>setType([])} className="active:bg-red-600 hover:bg-red-500 px-1 rounded-lg md:px-6">หน้าแรก</div>
      <div onClick={()=>setType("เรื่องฮอต")} className="active:bg-red-600 hover:bg-red-500 px-1 rounded-lg md:px-6">เรื่องฮอต</div>
      <div onClick={()=>setType("บันเทิง")} className="active:bg-red-600 hover:bg-red-500 px-1 rounded-lg md:px-6">บันเทิง</div>
      <div onClick={()=>setType("กีฬา")} className="active:bg-red-600 hover:bg-red-500 px-1 rounded-lg md:px-6">กีฬา</div>
      <div onClick={()=>setType("รถยนต์")} className="active:bg-red-600 hover:bg-red-500 px-1 rounded-lg md:px-6">รถยนต์</div>
      <div onClick={()=>setType("ไอที")} className="active:bg-red-600 hover:bg-red-500 px-1 rounded-lg md:px-6">ไอที</div>
     
        {/* <div className="my-auto mr-2">
          <AiOutlineBars className="text-xl"/>
        </div> */}
        <div className="md:mr-7">
        <select onChange={(e)=>setType(e.target.value)}>
          <option>เรื่องฮอต</option>
          <option>บันเทิง</option>
          <option>กีฬา</option>
          <option>รถยนต์</option>
          <option>ไอที</option>
        </select>
        </div>
      </div>
    </>
  );
};
export default Nav;
