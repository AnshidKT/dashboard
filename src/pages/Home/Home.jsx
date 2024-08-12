import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">
      <div className="w-full flex mt-10 p-2 justify-between items-center text-black">
        <div className="w-[290px] ml-5">
          <span className="text-4xl font-normal">Record Pages Monitor</span>
        </div>

        <div className="flex flex-wrap gap-4 mr-8">
          {[
            { label: "Last Week", value: 277 },
            { label: "Last Month", value: 1318 },
            { label: "All Time", value: 22113 },
          ].map(({ label, value }) => (
            <div className="w-52 flex flex-col justify-between p-2  bg-white  rounded-lg">
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



      <div className="w-full h-[300px] pl-4 flex   bg-slate-400 text-black">

      <div className="w-[34%] h-full   flex flex-col  bg-slate-800 text-black">
      <div className="w-[100%] h-1/2 pl-2  flex flex-col  bg-slate-100 text-black  border-l-2 border-black">
<span>Estimate Edit</span>
      </div>
      </div>



      </div>








    </div>
  );
};

export default Home;
