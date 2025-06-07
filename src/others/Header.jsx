import React, { useEffect } from 'react'
import { useState } from 'react';

function Header({data}) {
const [userName, setUserName] = useState('');
useEffect(() => {
  if(!data){
    setUserName('Admin');
  }
  else{
    setUserName(data.firstName);
  }

  
}, [data])
const logOutUser = () => {
  localStorage.setItem('userLoggedInData','');
  window.location.reload();
} 

  return (
    <>
    <div className='h-[18vh] w-full bg-[#1c1c1c] flex items-center justify-between px-7 text-white  py-8'>
            <h1 className='text-3xl font-extralight'>
                Hello <br /> <span className='text-4xl font-bold'>{userName}👋</span>
            </h1>
      <button 
  className='mr-6 py-1 border-none rounded-lg px-3 bg-red-700 transition-all duration-200 hover:bg-red-800 active:scale-95'
>
  <h2 
    className='text-md font-semibold text-white transition-all duration-200'
    onClick={logOutUser}
  >
    Logout
  </h2>
</button>

    </div>
    </>
  )
}

export default Header;