import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaGift } from "react-icons/fa6";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa";
import { PiChartLineDownLight } from "react-icons/pi";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { GiGreekTemple } from "react-icons/gi";
import { GiChart } from "react-icons/gi";
import { PiWarehouseFill } from "react-icons/pi";
import { FcComboChart } from "react-icons/fc";
const DashboardBoxes = () => {
    return (
        <>
        <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="dashboardBoxesSlider"
      >
<SwiperSlide>
    <div className="box p-1 cursor-pointer hover:bg-[#fff] rounded-md border border-[rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <FaGift className="text-[25px] text-[#3872fa]" />
                <div>
                    <h3 className="text-[16px] font-medium text-gray-600">New Orders</h3>
                    <b className="text-[20px] font-bold text-black">1,390</b>
                </div>
            </div>
            <IoStatsChartSharp className="text-[50px] text-[#3872fa]" />
        </div>
        <div className="border-t border-dotted border-gray-300 my-4"></div>
        <div className="flex items-center gap-2 text-sm text-green-500">
          <MdOutlineKeyboardDoubleArrowUp className="text-[16px]"/>
            <span>+32.40%</span>
            <p className="text-gray-500 text-[13px]">Increased last month</p>
        </div>
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className="box p-1 cursor-pointer hover:bg-[#fff] rounded-md border border-[rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <FaChartPie className="text-[25px] text-[#10b981]" />
                <div>
                    <h3 className="text-[16px] font-medium text-gray-600">Sales</h3>
                    <b className="text-[20px] font-bold text-black">₹54,665</b>
                </div>
            </div>
            <PiChartLineDownLight className="text-[50px] text-red-500" />
        </div>
        <div className="border-t border-dotted border-gray-300 my-4"></div>
        <div className="flex items-center gap-2 text-sm text-green-500">
        <MdKeyboardDoubleArrowDown className="text-[16px] text-red-500"/>
        <span className="text-red-500">-5.63%</span>
            <p className="text-gray-500 text-[13px]">Decreased last month</p>
        </div>
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className="box p-1 cursor-pointer hover:bg-[#fff] rounded-md border border-[rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <GiGreekTemple className="text-[30px] text-[#b100cd]" />
                <div>
                    <h3 className="text-[16px] font-medium text-gray-600">Revenue</h3>
                    <b className="text-[20px] font-bold text-black">₹20,069</b>
                </div>
            </div>
            <GiChart className="text-[50px] text-[#b100cd]" />
        </div>
        <div className="border-t border-dotted border-gray-300 my-4"></div>
        <div className="flex items-center gap-2 text-sm text-green-500">
        <MdOutlineKeyboardDoubleArrowUp className="text-[16px]"/>
            <span>+32.40%</span>
            <p className="text-gray-500 text-[13px]">Increased last month</p>
        </div>
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className="box p-1 cursor-pointer hover:bg-[#fff] rounded-md border border-[rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <PiWarehouseFill className="text-[30px] text-[#0099cc]" />
                <div>
                    <h3 className="text-[16px] font-medium text-gray-600">Total Products</h3>
                    <b className="text-[20px] font-bold text-black">1200</b>
                </div>
            </div>
            <FcComboChart className="text-[50px]" />
        </div>
        <div className="border-t border-dotted border-gray-300 my-4"></div>
        <div className="flex items-center gap-2 text-sm text-green-500">
        <MdOutlineKeyboardDoubleArrowUp className="text-[16px]"/>
            <span>+12%</span>
            <p className="text-gray-500 text-[13px]">Increased last month</p>
        </div>
    </div>
</SwiperSlide>
        </Swiper>
        </>
    )
}
export default DashboardBoxes;