import React,{useState} from "react";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { FaUserCircle } from "react-icons/fa";
import { PiSignOutLight } from "react-icons/pi";
import { MdOutlineSettings } from "react-icons/md";

const Header = () => {
    const [anchorMyAcc, setAnchorMyAcc] = React.useState(null);
    const openMyAcc = Boolean(anchorMyAcc);
    const handleClickMyAcc = (event) => {
      setAnchorMyAcc(event.currentTarget);
    };
    const handleCloseMyAcc = () => {
      setAnchorMyAcc(null);
    };
    return (
        <header className="w-full h-[50px] pr-7 pl-64 bg-[#fff] flex items-center justify-between shadow-md">
            <div className="part1">
                <Button className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-[rgba(0,0,0,0.8)]">
                    <RiMenu2Line className="text-[18px] text-[rgba(0,0,0,0.8)]"/>
                </Button>
            </div>
            <div className="part2 w-[40%] flex items-center justify-end gap-5">
                <Button className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-[rgba(0,0,0,0.8)]">
                    <IoMdNotificationsOutline className="text-[25px] text-[rgba(0,0,0,0.8)]"/>
                </Button>

                <div className="relative">
                    <div className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer" onClick={handleClickMyAcc}>
                        <img src="src\assets\batman.jpg" className="w-full h-full object-cover"/>
                    </div>
                    <Menu
        anchorMyAcc={anchorMyAcc}
        id="account-menu"
        open={openMyAcc}
        onClose={handleCloseMyAcc}
        onClick={handleCloseMyAcc}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleCloseMyAcc} className="!bg-white">
        <div className="flex items-center gap-3">
                     <div className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer">
                        <img src="src\assets\batman.jpg" className="w-full h-full object-cover"/>
                    </div>
                    <div className="info">
                                <h3 className="text-[16px] font-[500] leading-5">Aniket Raj</h3>
                                <p className="text-[13px] font-[400] opacity-70">aniket123@gmail.com</p>
                    </div>
        </div>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleCloseMyAcc} className="flex items-center gap-3">
        <FaUserCircle /> <span className="text-[14px]">Profile</span>
        </MenuItem>
        <MenuItem onClick={handleCloseMyAcc} className="flex items-center gap-3">
        <PiSignOutLight /> <span className="text-[14px]">Sign out</span>
        </MenuItem>
        <MenuItem onClick={handleCloseMyAcc} className="flex items-center gap-3">
        <MdOutlineSettings /> <span className="text-[14px]">Settings</span>
        </MenuItem>
      </Menu>
                </div>

            </div>

        </header>
    )
}
export default Header;