import React from 'react'

function AcceptTask({data}) {
  console.log(data.taskTitle )
  return (
     <div className="flex-shrink-0 h-full w-[310px] bg-red-500 rounded-2xl ">
        <div className="flex justify-between items-center px-5 py-6">
          <h3 className="text-sm bg-red-600 px-3 py-1 rounded-md font-bold text-white">
           {data.category}
          </h3>
          <h4 className="text-sm text-white font-bold">3 january 2024</h4>
        </div>
        <div className=" px-6">
          <h2 className="text-xl font-semibold text-white">
           {data.taskTitle}
          </h2>
          <h4 className="text-sm text-white font-semibold mt-5">
            {data.taskDescription}
          </h4>
          <div className='flex justify-between  mt-3 '>
          <button className=' flex justify-center bg-green-600 font-semibold  px-2 py-1 rounded-md text-[13px]  text-white  '> Marked as Completed</button>
          <button className='flex justify-center bg-red-700 font-semibold  px-2 py-1 rounded-md  text-[13px]  text-white '> Marked as Failed</button>
          </div>
        </div>

      </div>
   
  )
}

export default AcceptTask