import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  //    console.log(authData)
  return (
    <div className="bg-[#1c1c1c] mt-20 p-5 rounded h-90 ">
      <div className="bg-gray-400 mb-2 flex py-2 px-4 justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h3 className="text-lg font-medium w-1/5">Active Task</h3>
        <h3 className="text-lg font-medium w-1/5">Completed</h3>
        <h3 className="text-lg font-medium w-1/5">Failed</h3>
      </div>

      <div id="alltask"  className="h-[90%] overflow-auto">
        {authData.employees.map(function (elem) {
          return (
            <div className=" mb-2 flex py-2 px-4 justify-between rounded border border-emerald-400">
              <h2 className="text-lg font-medium w-1/5 text-white ">{elem.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-600">{elem.taskNumbers.newTask}</h3>
              <h3 className="text-lg font-medium w-1/5 text-yellow-600">{elem.taskNumbers.active}</h3>
              <h3 className="text-lg font-medium w-1/5 text-green-600">{elem.taskNumbers.completed}</h3>
              <h3 className="text-lg font-medium w-1/5 text-red-600">{elem.taskNumbers.failed}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
