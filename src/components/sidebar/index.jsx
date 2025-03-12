import { Button } from "@mui/material";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { RiHome9Fill } from "react-icons/ri";
import { FaUsersCog } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import {Collapse} from 'react-collapse';

const Sidebar = () => {
        const [SubMenuIndex, setSubMenuIndex] = useState(null);
        const isOpenSubMenu = (index) => {
            if(SubMenuIndex===(index)){
                setSubMenuIndex(null); 
            }else{
            setSubMenuIndex(index);}
                };

    return (
        <>
            <div className="sidebar fixed top-0 left-0 bg-[#eeeeee] w-[16%] h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-4">
                <div className="py-2 w-[60%]">
                    <Link to="/">
                        <img src="src\assets\DEDSEC.png" className="w-[120px]"/>
                    </Link>
                </div>
                <ul className="mt-4">
                    <li>
                        <Link to="/">
                        <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] !py-2 !items-center hover:!bg-[#9e9e9e]">
                            <MdSpaceDashboard className="text-[18px]"/><span>Dashboard</span>
                            </Button>
                            </Link>
                    </li>
                    <li>
                        <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] !py-2 !items-center hover:!bg-[#9e9e9e]"  onClick={()=>isOpenSubMenu(1)}>
                            <RiHome9Fill className="text-[18px]"/><span>Home Slides</span>
                            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
                            <FaAngleDown className={`transition-all ${SubMenuIndex === 1 ? 'rotate-180' : ''}`} />
                            </span>
                            </Button>
                                <Collapse isOpened={SubMenuIndex===1 ? true : false}>
                                <ul className="w-full">
                                <li className="w-full">
                                    <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-10 flex gap-3">
                                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.5)]"></span>
                                    Home Banners List
                                    </Button>
                                </li>

                                <li className="w-full">
                                    <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-10 flex gap-3">
                                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.5)]"></span>
                                    Home Slide List
                                    </Button>
                                </li>
                            
                            </ul>
                                </Collapse>
                    </li>
                    <li>
                        <Link to="/users">
                        <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] !items-center !py-2 hover:!bg-[#9e9e9e]">
                            <FaUsersCog className="text-[18px]"/><span>Users</span>
                            </Button>
                            </Link>
                    </li>
                    <li>
                        <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] !items-center !py-2 hover:!bg-[#9e9e9e]" onClick={()=>isOpenSubMenu(3)}>
                            <MdOutlineProductionQuantityLimits className="text-[20px]"/><span>Products</span>
                            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
                            <FaAngleDown className={`transition-all ${SubMenuIndex === 3 ? 'rotate-180' : ''}`} />
                            </span>
                            </Button>
                            <Collapse isOpened={SubMenuIndex===3 ? true : false}>
                                <ul className="w-full">
                                <li className="w-full">
                                <Link to="/Products">
                                    <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-10 flex gap-3">
                                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.5)]"></span>
                                    Product List
                                    </Button>
                                    </Link>
                                </li>

                                <li className="w-full">
                                <Link to="/Product/Upload">
                                    <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-10 flex gap-3">
                                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.5)]"></span>
                                    Product Upload
                                    </Button>
                                    </Link>
                                </li>
                            
                            </ul>
                                </Collapse>
                    </li>
                    <li>
                        <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] !py-2 !items-center hover:!bg-[#9e9e9e]" onClick={()=>isOpenSubMenu(4)}>
                            <MdCategory className="text-[20px]"/><span>Category</span>
                            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
                            <FaAngleDown className={`transition-all ${SubMenuIndex === 4 ? 'rotate-180' : ''}`} />
                            </span>
                            </Button>
                            <Collapse isOpened={SubMenuIndex===4 ? true : false}>
                                <ul className="w-full">
                                <li className="w-full">
                                <Link to="/Categories">
                                    <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-10 flex gap-3">
                                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.5)]"></span>
                                    Category List
                                    </Button>
                                    </Link>
                                </li>

                                <li className="w-full">
                                <Link to="/Category/Add Category">
                                    <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-10 flex gap-3">
                                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.5)]"></span>
                                    Add a Category
                                    </Button>
                                    </Link>
                                </li>

                                <li className="w-full">
                                <Link to="/Category/Sub-Category">
                                    <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-10 flex gap-3">
                                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.5)]"></span>
                                Sub-Category
                                    </Button>
                                    </Link>
                                </li>

                                <li className="w-full">
                                <Link to="/Category/Sub-Category/Add">
                                    <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-10 flex gap-3">
                                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.5)]"></span>
                                    Add a Sub-Category
                                    </Button>
                                    </Link>
                                </li>
                            
                            </ul>
                                </Collapse>
                    </li>
                    <li>
                    <Link to="/Orders">
                        <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] !py-2 !items-center hover:!bg-[#9e9e9e]">
                            <IoBagHandleSharp className="text-[20px]"/><span>Orders</span>
                            </Button>
                            </Link>
                    </li>
                    <li>
                        <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] !py-2 !items-center hover:!bg-[#9e9e9e]">
                            <IoLogOut className="text-[20px]"/><span>Logout</span>
                            </Button>
                    </li>
                </ul>

            </div>
        </>
            )
}
export default Sidebar;