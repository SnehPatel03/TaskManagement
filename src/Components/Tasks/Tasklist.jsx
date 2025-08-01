import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function Tasklist({ data }) {
  console.log(data.email)
  return (
    <>
      <div
        id="tasklist"
        className=" h-[50%] w-[89vw] flex flex-nowrap  items-center justify-start py-3 px-6 gap-5 overflow-x-auto scrollbar-hide mt-[55vw] -ml-1 sm:mt-[0vw] md:mt-0 md:ml-0"
      >
        {data.tasks.map((elem, index) => {

          if (elem.active) {
            return <AcceptTask data={elem} email={data.email} key={index} />
          }
          if (elem.newTask) {
            return <NewTask data={elem} email={data.email} key={index} />
          }
          if (elem.completed) {
            return <CompleteTask data={elem} email={data.email} key={index} />
          }
          if (elem.failed) {
            return <FailedTask data={elem} email={data.email} key={index} />
          }
        })}
      </div>
    </>
  );
}

export default Tasklist;
