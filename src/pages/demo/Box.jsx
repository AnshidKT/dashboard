import React from 'react'
import { CgArrowTopRight } from "react-icons/cg";

const Box = () => {
  return (
    <div className='py-3 px-3 flex justify-around items-center'>
        <div className='flex justify-around items-center bg-primary w-[24%] h-[150px] rounded-xl'>
            <div className='h-[100px] w-[70%] flex flex-col justify-between'>
                <div className='flex flex-col'>
                    <span className='text-xl font-bold'>$231,244</span>
                    <span>Total Sales</span>
                </div>
                <span className='text-xs font-extralight'> + 1877 today  </span> 
            </div>
            <div className='h-[100px]'>
                <CgArrowTopRight size={25}/>
            </div>
        </div>
        <div className='flex justify-around items-center bg-secondary w-[24%] h-[150px] rounded-xl'>
            <div className='h-[100px] w-[70%] flex flex-col justify-between'>
                <div className='flex flex-col'>
                    <span className='text-xl font-bold'>$231,244</span>
                    <span>Total Sales</span>
                </div>
                <span className='text-xs font-extralight'> + 1877 today  </span> 
            </div>
            <div className='h-[100px]'>
                <CgArrowTopRight size={25}/>
            </div>
        </div>
        <div className='flex justify-around items-center bg-third w-[24%] h-[150px] rounded-xl'>
            <div className='h-[100px] w-[70%] flex flex-col justify-between'>
                <div className='flex flex-col'>
                    <span className='text-xl font-bold'>$231,244</span>
                    <span>Total Sales</span>
                </div>
                <span className='text-xs font-extralight'> + 1877 today  </span> 
            </div>
            <div className='h-[100px]'>
                <CgArrowTopRight size={25}/>
            </div>
        </div>
        <div className='flex justify-around items-center bg-four w-[24%] h-[150px] rounded-xl'>
            <div className='h-[100px] w-[70%] flex flex-col justify-between'>
                <div className='flex flex-col'>
                    <span className='text-xl font-bold'>$231,244</span>
                    <span>Total Sales</span>
                </div>
                <span className='text-xs font-extralight'> + 1877 today  </span> 
            </div>
            <div className='h-[100px]'>
                <CgArrowTopRight size={25}/>
            </div>
        </div>
    </div>
  )
}

export default Box