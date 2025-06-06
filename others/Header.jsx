import React from 'react'

function Header({data}) {
  
  return (
    <>
    <div className='h-[18vh] w-full bg-[#1c1c1c] flex items-center justify-between px-7 text-white  py-8'>
            <h1 className='text-3xl font-extralight'>
                Hello <br /> <span className='text-4xl font-bold'>{data.firstName}👋</span>
            </h1>
        <button className='mr-6 py-1 border-none rounded-lg  px-3 bg-red-700'>
            <h2 className='text-md font-semibold' >Logout</h2>
        </button>
    </div>
    </>
  )
}

export default Header