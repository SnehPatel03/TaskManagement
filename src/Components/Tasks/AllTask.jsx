import React, { useContext } from 'react'
import { AuthContext } from "./../../Context/AuthProvider";


function AllTask() {
    const [userData, setUserData] = useContext(AuthContext);

    return (
<div className="bg-[#1c1c1c] min-h-screen py-8 px-2 md:px-10 flex flex-col items-center mt-[100vw] sm:mt-19">
  {/* Header Row */}
  <div className="w-[80vw] md:w-full mb-2">
    <div className="flex flex-wrap md:flex-nowrap bg-emerald-600 border-2 border-white rounded-md px-3 md:px-14 py-2 md:py-3 justify-between items-center gap-2 ">
      <h4 className="font-bold text-xs sm:text-sm md:text-base flex-1 text-center">Employee Name</h4>
      <h4 className="font-bold text-xs sm:text-sm md:text-base flex-1 text-center">New Task</h4>
      <h4 className="font-bold text-xs sm:text-sm md:text-base flex-1 text-center">Active Task</h4>
      <h4 className="font-bold text-xs sm:text-sm md:text-base flex-1 text-center">Completed</h4>
      <h4 className="font-bold text-xs sm:text-sm md:text-base flex-1 text-center">Failed</h4>
    </div>
  </div>

  <div className="w-[80vw] md:w-full  space-y-2">
    {userData.employeeData.map((elem, idx) => (
      <div
        key={idx}
        className="flex flex-wrap md:flex-nowrap border-2 border-white bg-[#222] text-white rounded-md px-3 md:px-5 py-2 md:py-3 items-center w-full justify-between"
      >
        <h4 className="font-semibold flex-1 text-xs sm:text-sm md:text-base text-center">{elem.firstName}</h4>
        <h4 className="font-semibold flex-1 text-xs sm:text-sm md:text-base text-blue-700 text-center">{elem.taskCounts.newTask}</h4>
        <h4 className="font-semibold flex-1 text-xs sm:text-sm md:text-base text-amber-600 text-center">{elem.taskCounts.active}</h4>
        <h4 className="font-semibold flex-1 text-xs sm:text-sm md:text-base text-emerald-600 text-center">{elem.taskCounts.completed}</h4>
        <h4 className="font-semibold flex-1 text-xs sm:text-sm md:text-base text-red-700 text-center">{elem.taskCounts.failed}</h4>
      </div>
    ))}
  </div>
</div>

    )
}

export default AllTask