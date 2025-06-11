import React from 'react'
import Header from './../../others/Header'
import CreateTask from '../Tasks/CreateTask'
import AllTask from '../Tasks/AllTask'

function AdminDashboard() {
  return (
    <>
    <div className='h-screen w-full bg-[#1c1c1c] '>
    <Header/>
   <CreateTask/>
   <AllTask/>
    </div>
    </>
  )
}

export default AdminDashboard