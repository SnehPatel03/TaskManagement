import React from 'react'
import { useState } from 'react';
import { getlocalStorage } from '../../utils/localStorage';

function CreateTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assign, setAssign] = useState("");

  const [task, setTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setTask({taskTitle,taskDate,category,taskDescription,assign,
    active:false,newTask:true,failed:false,completed:false,})

    const data = getlocalStorage('employeeData')
    console.log(data);

    data.employeeData.forEach(function(elem){
      if(assign === elem.firstName){
        elem.tasks.push(task)
        elem.taskCounts.newTask++;
      } 
    })
localStorage.setItem('employeeData' , JSON.stringify(data))
    console.log(data);
    setTaskTitle("");
    setTaskDate("");
    setCategory("");
    setTaskDescription("");
    setAssign("");
  }

  return (
    <form onSubmit={(e) => {
      submitHandler(e);
    }
    } className='h-[70vh]  w-full flex justify-center items-center px-7'>
      <div className='h-full w-[48%] text-white px-5 py-3'>
        <h2 className=' text-xl font-bold mt-6'>Task Title : </h2>
        <input
          value={taskTitle} onChange={(e) => {
            setTaskTitle(e.target.value);
          }}
          placeholder='Make Production Report etc....' className='outline-none h-12 p-2 border-2 w-[34vw] mt-5 font-semibold rounded-md' type="text" />
        <h2 className='text-xl font-bold mt-8'>Date</h2>
        <input
          value={taskDate} 
          onChange={(e) => {
            setTaskDate(e.target.value);
          }}
          placeholder='Date of Task' className='outline-none h-12 p-2 border-2 w-[34vw] mt-5 font-semibold rounded-md' type="Date" />
        <h2 className='text-xl font-bold mt-8'>Assign To :</h2>
        <input
          value={assign} onChange={(e) => {
            setAssign(e.target.value);
          }}
          placeholder='Task Assigned to whom' className='outline-none h-12 p-2 border-2 w-[34vw] mt-5 font-semibold rounded-md' type="text" />
        <h2 className='text-xl font-bold mt-8'>Category :</h2>
        <input
          value={category} onChange={(e) => {
            setCategory(e.target.value);
          }}
          placeholder='To which catagory belongs' className='h-12 px-2 outline-none border-2 w-[34vw] mt-5 font-semibold rounded-md' type="text" />
      </div>
      <div className='h-full w-[48%] flex flex-col justify-center text-white'>
        <h2 className='text-xl font-bold mt-7 text-white ml-5'>Description :</h2>
        <textarea
          value={taskDescription} onChange={(e) => {
            setTaskDescription(e.target.value);
          }}
          placeholder='Description of Task...' name="description" cols="70" rows="10" className='p-2 border-2 w-[34vw] rounded-md m-5 mt-5 font-semibold' ></textarea>
        <button className='ml-55 mt-17 border-none font-bold rounded-lg h-11 w-30 px-5 
      bg-[#2EB872] hover:bg-green-600 transition duration-300 ease-in-out'>
          <h2 className='text-md font-semibold'>Creat Task</h2>
        </button>
      </div>
    </form>
  )
}

export default CreateTask