import React from "react";
import Tasklist from "../Tasks/Tasklist";
import TaskBar from "../Tasks/taskBar";
import Header from './../../others/Header'


function EmployeeDashboard(props) {
  console.log(props);

  return (
    <div className="h-screen w-full bg-[#1c1c1c] py-8 px-4">
      <Header data={props.data} />
      <TaskBar data={props.data} />
      <Tasklist data={props.data} />
    </div>
  );
}

export default EmployeeDashboard;
