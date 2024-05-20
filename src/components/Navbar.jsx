import React from "react";
import { VscDebugRestart } from "react-icons/vsc";
import { FiPlus } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { BiColumns } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
const Navbar = () => {
  return (
    <>
      <div className=" min-w-[1280px]  max-w-[1300px] mx-auto bg-white rounded-lg ">
        <div className="w-full h-[64px] flex items-center justify-between pl-[20px]  ">
          <p className="text-[#5B6871] text-[18px] font-semibold">
            Список акций
          </p>
          <div className="w-[331px] h-full flex items-center justify-between pr-[20px] ">
            <hr className="w-[1px] h-full bg-gray-200" />
            <VscDebugRestart className="text-[#4094F7] w-[20px] h-[20px]" />
            <p className="text-[14px] text-[#4094F7] font-semibold leading-[24px]">
              Обновить Telegram
            </p>
            <hr className="w-[1px] h-full bg-gray-200" />
            <FiPlus className="text-[#1AC19D] w-[20px] h-[20px]" />
            <p className="text-[#1AC19D] text-[14px] leading-[24px] font-semibold">
              Добавить
            </p>
          </div>
        </div>
        <div className="w-full h-[56px] flex items-center bg-[#f9f9f9] justify-between pl-[20px] rounded-lg ">
          <div className="w-[410px] h-[32px] rounded-[6px] flex items-center bg-white justify-around border border-[#E5E9EB]">
            <IoSearch className="text-[#9AA6AC]" />
            <input
              type="search"
              placeholder="Поиск..."
              className="text-black text-[14px] w-[355px] outline-none text-"
            />
          </div>

          <div className="flex items-center">
            <div className=" flex items-center gap-[12px]">
              <BiColumns className="w-[20px] h-[18px] text-[#303940] ml-[12px]" />
              <p className="text-[14px] text-[#303940] font-medium">Столбцы</p>
            </div>
            <div className=" flex items-center gap-[12px]">
              <FaFilter className="w-[20px] h-[16px] text-[#303940] ml-[12px]" />
              <p className="text-[14px] text-[#303940] font-medium">Фильтр</p>
            </div>
            <div className=" flex items-center gap-[12px]">
              <HiDownload className="w-[20px] h-[18px] text-[#303940] ml-[12px]" />
              <p className="text-[14px] text-[#303940] mr-[20px] font-medium">
                Скачать
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
