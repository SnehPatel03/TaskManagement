import React from 'react'

function CompleteTask({data}) {
  return (
   <div className="flex-shrink-0 h-full w-[310px] bg-emerald-600 rounded-2xl ">
        <div className="flex justify-between items-center px-5 py-6">
          <h3 className="text-sm bg-red-600 px-3 py-1 rounded-md font-bold text-white">
          {data.category}
          </h3>
          <h4 className="text-sm text-white font-bold">{data.taskDate}</h4>
        </div>
        <div className=" px-6">
          <h2 className="text-3xl font-bold text-white">
           {data.taskTitle}
          </h2>
          <h4 className="text-2asm text-white font-semibold mt-5">
            {data.taskDescription}
          </h4>
        <div className='flex justify-center gap-1 '>
          
          <button className='flex justify-center absolute bottom-15 bg-green-500 font-semibold  px-2 py-1 rounded-md  text-[13px]  text-white '> Task Completed </button>
          </div>
        </div>
      </div>
  )
}

export default CompleteTask