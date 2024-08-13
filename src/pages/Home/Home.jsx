import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">
      <div className="w-full flex mt-2 p-2 justify-between items-center text-black">
        <div className="w-[290px] ml-5">
          <span className="text-4xl font-normal">Record Pages Monitor</span>
        </div>

        <div className="flex flex-wrap gap-4 mr-8">
          {[
            { label: "Last Week", value: 277 },
            { label: "Last Month", value: 1318 },
            { label: "All Time", value: 22113 },
          ].map(({ label, value }) => (
            <div className="w-56 flex flex-col justify-between p-2  bg-white  rounded-lg">
              <div className="flex w-full justify-between">
                <span>{label}</span>
                <GoArrowUpRight className="text-gray-500" />
              </div>
              <div className="flex-grow pt-5 flex items-end">
                <span className="text-xl font-bold">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full mb-2 pl-4 flex justify-between   text-black">
        <div className="w-[30%] h-full   flex flex-col  bg-slate-800 text-black">
          <div className="w-[100%] h-1/3 pl-2  flex flex-col  bg-slate-100 text-black  border-l-2 border-black">
            <span>Estimate Edit</span>

            <div className="flex items-center justify-between pr-4 mt-2 mb-2 ">
              <span className="text-4xl">2.55s</span>
              <span className="text-2xl">92</span>
              <span className="text-2xl">1867</span>
            </div>

            <span className="text-xs text-gray-400">Response Time</span>

            <div className="flex justify-between p-2">
              <div className="w-[80px] h-[40px] bg-custom-orange  rounded-lg"></div>
              <div className="w-[60px] h-[40px] bg-gray-500  rounded-lg"></div>
              <div className="w-[70px] h-[40px] bg-black  rounded-lg"></div>
              <div className="w-[70px] h-[40px] bg-white rounded-lg flex items-center justify-center">
                <GoArrowUpRight className="text-gray-500" />
              </div>
            </div>
          </div>

          <div className="w-[100%] h-1/3 pl-2  flex flex-col  bg-slate-100 text-black  border-l-2 border-white">
            <span className="mt-2">Estimate Edit</span>

            <div className="flex items-center justify-between pr-4 mt-2 mb-2 ">
              <span className="text-4xl">1.42s</span>
              <span className="text-2xl">12</span>
              <span className="text-2xl">1352</span>
            </div>

            <span className="text-xs text-gray-400">Response Time</span>

            <div className="flex justify-between p-2">
              <div className="w-[70px] h-[40px] bg-gray-300  rounded-lg"></div>
              <div className="w-[50px] h-[40px] bg-gray-300  rounded-lg"></div>
              <div className="w-[80px] h-[40px] bg-gray-300  rounded-lg"></div>
              <div className="w-[90px] h-[40px] bg-white  rounded-lg"></div>
            </div>
          </div>

          <div className="w-[100%] h-1/3 pl-2  flex flex-col  bg-slate-100 text-black  border-l-2 border-white">
            <span className="mt-2">Estimate Edit</span>

            <div className="flex items-center justify-between pr-4 mt-2 mb-2 ">
              <span className="text-4xl">3.25s</span>
              <span className="text-2xl">82</span>
              <span className="text-2xl">1227</span>
            </div>

            <span className="text-xs text-gray-400">Response Time</span>

            <div className="flex justify-between p-2">
              <div className="w-[50px] h-[40px] bg-gray-300  rounded-lg"></div>
              <div className="w-[60px] h-[40px] bg-gray-300  rounded-lg"></div>
              <div className="w-[110px] h-[40px] bg-gray-300  rounded-lg"></div>
              <div className="w-[70px] h-[40px] bg-white  rounded-lg"></div>
            </div>
          </div>
        </div>

        <div className="w-[63%] mr-10 gap-3 p-2 flex flex-col">
          <div className="w-full h-1/2 bg-custom-orange rounded-lg"></div>
          <div className="w-full h-1/2 bg-black rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
