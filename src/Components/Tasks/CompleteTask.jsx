import React from 'react'

function CompleteTask() {
  return (
   <div className="flex-shrink-0 h-full w-[310px] bg-sky-500 rounded-2xl ">
        <div className="flex justify-between items-center px-5 py-6">
          <h3 className="text-sm bg-red-600 px-3 py-1 rounded-md font-bold text-white">
            High
          </h3>
          <h4 className="text-sm text-white font-bold"> 03 Jan 2025</h4>
        </div>
        <div className=" px-6">
          <h2 className="text-xl font-semibold text-white">
            Make a UI/UX for a website of company
          </h2>
          <h4 className="text-sm text-white font-semibold mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            enim Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores fuga sint ad consequatur.
          </h4>
        <div className='flex justify-center gap-1 '>
          
          <button className='flex justify-center bg-blue-700 font-semibold  px-2 py-1 rounded-md  text-[13px]  text-white '> Task Completed </button>
          </div>
        </div>
      </div>
  )
}

export default CompleteTask