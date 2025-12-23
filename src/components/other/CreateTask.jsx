import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
    const authData = useContext(AuthContext);

  if (!authData) return null;

  const { employees, setUserData } = authData;


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignTo, setAssignTo] = useState("");

  // const [newTask,setNewTask]=useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    const task = {
    title,
    date,
    category,
    description,
    active: true,
    newTask: true,
    failed: false,
    completed: false,
  };
    // setNewTask({title,date,category,description,active:true,newTask:true,failed:false,completed:false})
      const updatedEmployees = employees.map((emp) => {
      if (emp.firstName === assignTo) {
        return {
          ...emp,
          tasks: [...emp.tasks, task],
        };
      }
      return emp;
    });

     setUserData((prev) => ({
      ...prev,
      employees: updatedEmployees,
    }));

    //  data.forEach(function(elem){
    //   if(assignTo==elem.firstName)
    //    {
    //      elem.tasks.push(newTask)
    //      console.log(elem)
    //    }
    //  })
     localStorage.setItem('employees',JSON.stringify(updatedEmployees))
     setTitle('')
     setDate('')
     setCategory('')
     setDescription('')
     setAssignTo('')
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between "
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="date"
              name=""
              id=""
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Design,Development,etc...."
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400 "
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 cursor-pointer px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
