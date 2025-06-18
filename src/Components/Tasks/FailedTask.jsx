import React from 'react'

function FailedTask({ data }) {
  return (
    <div className="flex-shrink-0 h-full w-[310px] bg-red-700 rounded-2xl ">
      <div className="flex justify-between items-center px-5 py-6">
        <h3 className="text-sm bg-red-800 px-3 py-1 rounded-md font-bold text-white">
          {data.category}
        </h3>
        <h4 className="text-sm text-white font-bold"> {data.taskDate}</h4>
      </div>
      <div className=" px-6">
        <h2 className="text-2xl font-bold text-white">
          {data.taskTitle}
        </h2>
        <h4 className="h-[15vh] overflow-x-auto scrollbar-hide text-white font-semibold mt-5">
          {data.taskDescription}
        </h4>
      </div>
      <div className='flex relative justify-center gap-10  '>
        <div className="inline-flex items-center gap-1 px-3 py-1    text-white font-xl rounded-lg  justify-center"
        >
          <svg className='m-1' width="25" height="26" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 13L37 37" stroke="white" stroke-width="5" stroke-linecap="round" />
            <path d="M37 13L13 37" stroke="white" stroke-width="5" stroke-linecap="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default FailedTask