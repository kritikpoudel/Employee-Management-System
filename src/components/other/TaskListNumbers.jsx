const TaskListNumbers = ({data}) => {
  return (
    <div className="flex justify-center w-full mt-5">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 w-full px-4">
      <div className="bg-blue-400 py-6 px-9 rounded-xl ">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-emerald-400 py-6 px-9 rounded-xl ">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>
      <div className="bg-green-400 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.active}</h2>
        <h3 className="text-xl font-medium">Accepted</h3>
      </div>
      <div className="bg-red-400 py-6 px-9 rounded-xl ">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.failed}</h2>
        <h3 className="text-xl font-medium">Failed</h3>
      </div>
    </div>
    </div>
  )
}

export default TaskListNumbers