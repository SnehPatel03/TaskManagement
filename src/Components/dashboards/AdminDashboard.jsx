import React from 'react'
import Header from '../../../others/Header'

function AdminDashboard() {
  return (
    <>
    <div className='h-screen w-full bg-[#1c1c1c]  px-4'>
    <Header/>
    <div className='h-[65vh] w- full flex justify-center items-center px-7'>
      <div className='h-full w-[48%] text-white px-5 py-3'>
        <h2 className=' text-2xl font-bold mt-6'>Task Title : </h2>
        <input placeholder='Make Production Report etc....' className='outline-none h-12 p-2 border-2 w-[34vw] mt-5 font-semibold rounded-md' type="text" />
        <h2 className='text-2xl font-bold mt-8'>Date</h2>
        <input placeholder='Date of Task' className='outline-none h-12 p-2 border-2 w-[34vw] mt-5 font-semibold rounded-md' type="Date" />
        <h2 className='text-2xl font-bold mt-8'>Assign To :</h2>
        <input placeholder='Task Assigned to whom' className='outline-none h-12 p-2 border-2 w-[34vw] mt-5 font-semibold rounded-md' type="text" />
        <h2 className='text-2xl font-bold mt-8'>Category :</h2>
        <input placeholder='To which catagory belongs' className='h-12 px-2 outline-none border-2 w-[34vw] mt-5 font-semibold rounded-md' type="text" />
      </div>
      <div className='h-full w-[48%] flex flex-col justify-center text-white'>
        <h2 className='text-2xl font-bold mt-7 text-white ml-5'>Description :</h2>
      <textarea placeholder='Description of Task...' name="description" cols="70" rows="11" className='p-2 border-2 w-[34vw] rounded-md m-5 mt-5 font-semibold' ></textarea>
      <button className='ml-55 mt-17 border-none font-bold rounded-lg h-11 w-30 px-5 
      bg-[#2EB872] hover:bg-green-600 transition duration-300 ease-in-out'>         
            <h2 className='text-md font-semibold'>Creat Task</h2>
        </button>
      </div>
    </div>
    </div>
    </>
  )
}

export default AdminDashboard