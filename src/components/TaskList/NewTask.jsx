const Newtask = ({data}) => {
  return (
     <div className='h-full bg-blue-400 w-75 rounded-xl shrink-0 p-5 flex flex-col'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 rounded py-1 px-3'>{data.category}</h3>
                <h3 className='text-sm'>{data.date}</h3>
            </div>
            <h2 className='text-2xl mt-5 font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>
            <div className="mt-auto">
                <button className="bg-green-500 px-2 py-1 text-sm">Accept Task</button>
            </div>
        </div>
  )
}

export default Newtask