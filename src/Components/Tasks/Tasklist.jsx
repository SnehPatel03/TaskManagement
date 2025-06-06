import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function Tasklist({ data }) {
  return (
    <div
      id="tasklist"
      className="h-[50%] w-full flex flex-nowrap  items-center justify-start py-3 px-6 gap-6 overflow-x-auto"
    >
      {data.tasks.map((elem, index) => {
        if (elem.active) {
          return <AcceptTask data={elem} key={index} />
        }
        if (elem.newTask) {
          return <NewTask key={index} />
        }
        if (elem.completed) {
          return <CompleteTask key={index} />
        }
        if (elem.failed) {
          return <FailedTask key={index} />
        }
      })}
    </div>
  );
}

export default Tasklist;
