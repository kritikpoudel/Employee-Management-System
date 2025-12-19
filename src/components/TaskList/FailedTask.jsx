import React from 'react'

const FailedTask = () => {
  return (
 <div className='h-full bg-red-400 w-75 rounded-xl shrink-0 p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 rounded py-1 px-3'>High</h3>
                <h3 className='text-sm'>16 dec 2025</h3>
            </div>
            <h2 className='text-2xl mt-5 font-semibold'>Make new Repository</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam quia facere accusantium quibusdam dolorem natus aliquid alias libero beatae consectetur laudantium officia quam, ducimus rerum dignissimos consequuntur, qui dolor voluptate!</p>
            <div className="mt-4">
                <button className="bg-green-500 px-2 py-1 text-sm w-full">Failed</button>
            </div>
        </div>
  )
}

export default FailedTask