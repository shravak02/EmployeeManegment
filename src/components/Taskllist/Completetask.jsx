import React from 'react'

const Completetask = ({data}) => {
  return (
    <div className=' shrink-0 h-full rounded-xl w-[300px] p-5 bg-green-400 '>
        <div className='flex justify-between items-center '>
            <h3 className='bg-red-600 px-3 py-1 rounded-md text-sm '>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='mt-2'>
            <button className='w-full'>Completed</button>
        </div>
    </div>
  )
}

export default Completetask
