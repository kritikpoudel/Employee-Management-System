import React from "react";
import Accepttask from "./Accepttask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import Newtask from "./Newtask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] w-full mt-15 py-20 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto"
    >
      {data.tasks.map((elem,id) => {
        if (elem.active) {
          return <Accepttask key={id} />;
        }
        if(elem.newTask){
            return<Newtask key={id}/>
        }
        if(elem.completed){
            return <CompleteTask key={id}/>
        }
        if(elem.failed){
            return<FailedTask key={id}/>
        }
      })}
    </div>
  );
};

export default TaskList;
