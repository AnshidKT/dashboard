import React from "react";
import { LuMessageSquarePlus } from "react-icons/lu";
import { CiBellOn } from "react-icons/ci";
import { IoIosMan } from "react-icons/io";
import Box from "./Box";
const Demo = () => {
  return (
    <div className="w-full flex flex-col items-center h-[100vh] bg-gray-200">
      <div className="w-[80%] h-[80px] flex justify-between bg-white mt-3 rounded-full">
        <div className="w-[75%] h-[100%] flex justify-end ">
          <div className="w-[70%] h-[100%] flex items-center justify-around">
            <div className="w-[100px] h-[35px] bg-black rounded-full flex justify-center items-center ">
              <span className="text-sm text-white">Dashboard</span>
            </div>
            <div className="w-[100px] h-[35px] rounded-full flex justify-center items-center text-white">
              <span className="text-sm text-black">Orders</span>
            </div>
            <div className="w-[100px] h-[35px] rounded-full flex justify-center items-center text-white">
              <span className="text-sm text-black">Payment</span>
            </div>
            <div className="w-[100px] h-[35px] rounded-full flex justify-center items-center text-white">
              <span className="text-sm text-black">Products</span>
            </div>
            <div className="w-[100px] h-[35px] rounded-full flex justify-center items-center text-white">
              <span className="text-sm text-black">Target</span>
            </div>
          </div>
        </div>

        <div className="w-[20%] flex justify-end gap-5 items-center h-full mr-5">
          <div className="w-[35px] flex justify-center items-center h-[35px] rounded-full border border-black">
            <LuMessageSquarePlus style={{ width: 20, height: 20 }} />
          </div>
          <div className="w-[35px] flex justify-center items-center h-[35px] rounded-full border border-black">
            <CiBellOn style={{ width: 20, height: 20 }} />
          </div>
          <div className="w-[35px] flex justify-center items-center h-[35px] rounded-full border border-black">
            <IoIosMan style={{ width: 20, height: 20 }} />
          </div>
        </div>
      </div>

      {/* <Box/> */}
    </div>
  );
};

export default Demo;
