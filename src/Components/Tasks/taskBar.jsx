import React from 'react'

function taskBar({data}) {
  return (
      <div className="flex items-center justify-start  px-6   h-[27vh] w-[100%] mt-4 gap-6">
        <div className="h-[74%] w-[24%] bg-sky-700 rounded-xl flex flex-col justify-center px-10 py-4  hover:bg-sky-800  transition-all-ease-300 duration-300 ">
          <h1 className="text-3xl font-semibold text-white">{data.taskCounts.newTask}</h1>
          <h2 className="mt-2 text-white text-2xl font-bold">New Task</h2>
        </div>

        <div className="h-[74%] w-[24%] bg-emerald-700 rounded-xl flex flex-col justify-center px-10 py-4  hover:bg-emerald-800  transition-all-ease-300 duration-300">
          <h1 className="text-3xl font-semibold text-white">{data.taskCounts.completed}</h1>
          <h2 className="mt-2 text-white text-2xl font-bold">Completed Task</h2>
        </div>

        <div className="h-[74%] w-[24%] bg-amber-700 rounded-xl flex flex-col justify-center px-10 py-4  hover:bg-amber-700  transition-all-ease-300 duration-300">
          <h1 className="text-3xl font-semibold text-white">{data.taskCounts.active}</h1>
          <h2 className="mt-2 text-white text-2xl font-bold">Accepted Task</h2>
        </div>

        <div className="h-[74%] w-[24%] bg-red-700 rounded-xl flex flex-col justify-center px-10 py-4  hover:bg-red-800  transition-all-ease-300 duration-300">
          <h1 className="text-3xl font-semibold text-white">{data.taskCounts.failed}</h1>
          <h2 className="mt-2 text-white text-2xl font-bold">Failed Task</h2>
        </div>
      </div>
  )
}

export default taskBar