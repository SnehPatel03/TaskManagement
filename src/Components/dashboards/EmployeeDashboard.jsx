import React from "react";
import Header from "../../../others/Header";
import Tasklist from "../Tasks/Tasklist";
import TaskBar from "../Tasks/taskBar";

function EmployeeDashboard({ data }) {
  console.log(data);

  return (
    <div className="h-screen w-full bg-[#1c1c1c] py-8 px-4">
      <Header data={data} />
      <TaskBar data={data} />
      <Tasklist data={data} />
    </div>
  );
}

export default EmployeeDashboard;
