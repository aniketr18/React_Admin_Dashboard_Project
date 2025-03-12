import React from "react";
import DashboardBoxes from "../../Components/DashboardBoxes";
import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Dashboard = () => {
    return (
        <>
    <div className="w-full py-2 px-5 bg-white border bg-[#f1faff] border-[rgba(0,0,0,0.1)] flex justify-between items-start mb-5 rounded-md">
  <div className="info">
    <h2 className="text-[20px] font-bold leading-10">Hello,</h2>
    <div className="flex items-center gap-2">
      <b><span className="text-[40px]">Aniket</span></b>
      <span>
        <img src="src\assets\waving-hand.999x1024.png" className="w-10 h-10"/>
      </span>
    </div>
    <span className="text-[16px] text-gray-600 mt-2">
      <p>Here's what's happening on your store today, see the statistics at once.</p>
    </span>
    <Link to="/Product/Upload">
        <button className="mt-11 bg-blue-500 text-white px-6 py-3 rounded-lg text-[14px] font-semibold shadow-md hover:bg-blue-600">
          + Add Product
        </button>
    </Link>
  </div>
  <span>
    <img src="src\assets\—Pngtree—mobile shopping concept a man_8644437.png" className="w-80 h-80"/>
  </span>
</div>
        <DashboardBoxes />

        <div className="card my-5 shadow-md sm:rounded-lg bg-white">
            <div className="flex items-center justify-between px-3 py-3 font-bold">
                <h2>Recent Orders</h2>
            </div>
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right shadow-md">
    <thead className="text-xs uppercase bg-[#009bff] font-bold">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Order Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Payment Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Product Image
                </th>
                <th scope="col" className="px-6 py-3">
                    Products
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Names
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone-No
                </th>
                <th scope="col" className="px-6 py-3">
                    Address
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-100 whitespace-nowrap dark:text-black">
                <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">ORD-ABC123-456XYZ</span>
                </th>
                <td className="px-6 py-4">
                <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">PAY-20250107-1A2B3C4D</span>
                </td>
                <td className="px-6 py-4">
                <img src="src\assets\New MacBook Pro 16-inch 2021-2022.G15.watermarked.2k.png"/>
                </td>
                <td className="px-6 py-4">
                Apple MacBook Pro 17
                </td>
                <td className="px-6 py-4">
                ₹257138.76
                </td>
                <td className="px-6 py-4">
                    <span className="font-bold">Oliver Bennett</span> 
                </td>
                <td className="px-6 py-4">
                     +1 (678) 901-2345
                </td>
                <td className="px-6 py-4">
                Avenida de la Constitución 45
                Madrid, 28012
                Spain
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-200 even:bg-gray-50 even:dark:bg-gray-200 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">ORD-KLZ890-QWE456</span>
                </th>
                <td className="px-6 py-4">
                <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">PAY-20250107-5E6F7G8H</span>
                </td>
                <td className="px-6 py-4">
                <img src="src\assets\Microsoft Surface Pro.G03.watermarked.2k.png"/>
                </td>
                <td className="px-6 py-4">
                Microsoft Surface Pro
                </td>
                <td className="px-6 py-4">
                ₹171397.26
                </td>
                <td className="px-6 py-4">
                <span className="font-bold">Liam Rodriguez</span> 
                </td>
                <td className="px-6 py-4">
                 +1 (567) 890-1234
                </td>
                <td className="px-6 py-4">
                Flat 6, 12 Pine Lane
                Sydney, NSW 2000
                Australia
                </td>

            </tr>
            <tr className="bg-whiteborder-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">ORD-MNO567-RST123</span>
                </th>
                <td className="px-6 py-4">
                <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">PAY-20250107-9J0K1L2M</span>
                </td>
                <td className="px-6 py-4">
                <img src="src\assets\Apple Magic Mouse.G03.watermarked.2k.png"/>
                </td>
                <td className="px-6 py-4">
                Magic Mouse 2
                </td>
                <td className="px-6 py-4">
                ₹8488.41
                </td>
                <td className="px-6 py-4">
                <span className="font-bold">Ava Thompson</span> 
                </td>
                <td className="px-6 py-4">
                 +1 (456) 789-0123
                </td>
                <td className="px-6 py-4">
                789 Maple Road
                Manchester, M14 7FB
                United Kingdom
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-200 even:bg-white even:dark:bg-gray-200 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">ORD-PQR345-ZXC789</span>
                </th>
                <td className="px-6 py-4">
                <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">PAY-20250107-V1W2X3Y4</span>
                </td>
                <td className="px-6 py-4">
                <img src="src\assets\Google Pixel 4 Clearly White.G03.watermarked.2k.png"/>
                </td>
                <td className="px-6 py-4">
                Google Pixel Phone
                </td>
                <td className="px-6 py-4">
                ₹68507.46
                </td>
                <td className="px-6 py-4">
                <span className="font-bold">Marwa Erramla</span> 
                </td>
                <td className="px-6 py-4">
                    +1 (234) 567-8901
                </td>
                <td className="px-6 py-4">
                456 Oak Avenue, Apt. 12B
                Vancouver, BC V5K 0A1
                Canada
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">ORD-UVW678-ASD234</span>
                </th>
                <td className="px-6 py-4">
                <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">PAY-20250107-3N4O5P6Q</span>
                </td>
                <td className="px-6 py-4">
                <img src="src\assets\Apple Watch Series 10 Black with Rubber Strap and Display On.G03.watermarked.2k.png"/>
                </td>
                <td className="px-6 py-4">
                Apple Watch 5
                </td>
                <td className="px-6 py-4">
                ₹85655.76
                </td>
                <td className="px-6 py-4">
                <span className="font-bold">Sophia Carter</span> 
                </td>
                <td className="px-6 py-4">
                +1 (345) 678-9012
                </td>
                <td className="px-6 py-4">
                123 Elm Street
                Springfield, IL 62704
                USA
                </td>
            </tr>
        </tbody>
    </table>
</div>
        </div>

        <div className="card my-5 shadow-md sm:rounded-lg bg-white">
            <div className="flex items-center justify-between px-3 py-3 font-bold">
                <h2>Products</h2>
            </div>
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right shadow-md">
    <thead className="text-xs uppercase bg-[#deaa44] font-bold">
            <tr>
                <th scope="col" className="px-6 py-3">
                <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Sub-Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Brand
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Rating
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-2 font-medium text-gray-100 whitespace-nowrap dark:text-black">
                <div className="w-[60px]">
                    <Checkbox {...label} size="small"/>
                </div>
                </th>
                <td className="px-6 py-2">
                    <div className="flex items-center gap-4 w-[350px]">
                    <Link to ="product/45745" >
                        <div className="img w-[75px] h-[75px] rounded-md overflow-hidden group">
                    <img src="src\assets\Sony Playstation 5 DualSense Controller.G03.watermarked.2k.png" className="w-full group-hover:scale-105 transition-all"/>
                    </div>
                    </Link>
                    <div className="info w-[55%]">
                        <h3 className="font-[600] text-[12px] leading-4 hover:text-primary">
                            <Link to ="product/45745" >Sony PS5 Controller | Wireless | Bluettoth </Link> 
                        </h3>
                        <span className="text-12px font-[400] opacity-[50%]">
                            Gaming Electronics
                        </span>
                    </div>
                    </div>
                </td>
                <td className="px-6 py-4">
                Apple MacBook Pro 17
                </td>
                <td className="px-6 py-4">
                ₹257138.76
                </td>
                <td className="px-6 py-4">
                    <span className="font-bold">Oliver Bennett</span> 
                </td>
                <td className="px-6 py-4">
                     +1 (678) 901-2345
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-200 even:bg-gray-50 even:dark:bg-gray-200 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                <div className="w-[60px]">
                    <Checkbox {...label} size="small"/>
                </div>
                </th>
            
                <td className="px-6 py-2">
                    <div className="flex items-center gap-4">
                    <img src="src\assets\Gaming PC On State Open.G03.watermarked.2k.png"/>
                    </div>
                </td>
                
                <td className="px-6 py-4">
                Microsoft Surface Pro
                </td>
                <td className="px-6 py-4">
                ₹171397.26
                </td>
                <td className="px-6 py-4">
                <span className="font-bold">Liam Rodriguez</span> 
                </td>
                <td className="px-6 py-4">
                 +1 (567) 890-1234
                </td>

            </tr>
            <tr className="bg-whiteborder-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                <div className="w-[60px]">
                    <Checkbox {...label} size="small"/>
                </div>
                </th>
                <td className="px-6 py-4">
                <img src="src\assets\iMac Apple Computer Monitor Screen.G03.watermarked.2k.png"/>
                </td>
                <td className="px-6 py-4">
                Magic Mouse 2
                </td>
                <td className="px-6 py-4">
                ₹8488.41
                </td>
                <td className="px-6 py-4">
                <span className="font-bold">Ava Thompson</span> 
                </td>
                <td className="px-6 py-4">
                 +1 (456) 789-0123
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-200 even:bg-white even:dark:bg-gray-200 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                <div className="w-[60px]">
                    <Checkbox {...label} size="small"/>
                </div>
                </th>
                <td className="px-6 py-4">
                <img src="src\assets\Headphones Red.G03.watermarked.2k.png"/>
                </td>
                <td className="px-6 py-4">
                Google Pixel Phone
                </td>
                <td className="px-6 py-4">
                ₹68507.46
                </td>
                <td className="px-6 py-4">
                <span className="font-bold">Marwa Erramla</span> 
                </td>
                <td className="px-6 py-4">
                    +1 (234) 567-8901
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                <div className="w-[60px]">
                    <Checkbox {...label} size="small"/>
                </div>
                </th>
                <td className="px-6 py-4">
                <img src="src\assets\Samsung Galaxy Tab S3 Silver.G03.watermarked.2k.png"/>
                </td>
                <td className="px-6 py-4">
                Apple Watch 5
                </td>
                <td className="px-6 py-4">
                ₹85655.76
                </td>
                <td className="px-6 py-4">
                <span className="font-bold">Sophia Carter</span> 
                </td>
                <td className="px-6 py-4">
                +1 (345) 678-9012
                </td>
            </tr>
        </tbody>
    </table>
</div>
</div>
        </>
    )
}
export default Dashboard;