import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex justify-between gap-5 mt-10 screen'>
      <div className='w-[45%] rounded-xl px-9 py-6 bg-red-400' >
        <h1 className='text-2xl font-semibold'>{data.taskCounts.newTasks}</h1>
        <h3 className='text-xl font-medium'>New Tasks</h3>
      </div>
      <div className='w-[45%] rounded-xl px-9 py-6 bg-green-500' >
        <h1 className='text-2xl font-semibold'>{data.taskCounts.completed}</h1>
        <h3 className='text-xl font-medium'>Competed Tasks</h3>
      </div>
      <div className='w-[45%] rounded-xl px-9 py-6 bg-yellow-300' >
        <h1 className='text-2xl font-semibold'>{data.taskCounts.active}</h1>
        <h3 className='text-xl font-medium'>Accepted Tasks</h3>
      </div>
      <div className='w-[45%] rounded-xl px-9 py-6 bg-blue-600' >
        <h1 className='text-2xl font-semibold'>{data.taskCounts.failed}</h1>
        <h3 className='text-xl font-medium'>Failed Tasks</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
