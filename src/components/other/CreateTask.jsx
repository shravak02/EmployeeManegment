import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => { 

    const [userData,setUserData] = useContext(AuthContext)

    const [taskTitle, settaskTitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [asignTo, setasignTo] = useState('')
    const [category, setcategory] = useState('')

    const [Newtask, setNewtask] = useState({})
    const submitHandler = (e)=>{
        e.preventDefault()

        setNewtask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})

        //const data = JSON.parse(localStorage.getItem('employees'))
        const data = userData
        
        
        data.forEach(function(elem){
            if(asignTo == elem.name){
                elem.tasks.push(Newtask)
           
            }
        })
        setUserData(data)
       
        
            //localStorage.setItem('employees',JSON.stringify(data))

        settaskDate('')
        setasignTo('')
        setcategory('')
        settaskTitle('')
        settaskDescription('')
    }
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded-xl'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex items-start flex-wrap bg-[#1c1c1c] w-full justify-between'>
            <div className='w-1/2'>
            <div className='text-sm text-gray-300 mb-0.5'>
                <h3>Task Title</h3>
                <input 
                 value={taskTitle}
                 onChange={(e)=>{
                    settaskTitle(e.target.value)
                 }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type='text' placeholder='fb'/>
            </div>
            <div className='text-sm text-gray-300 mb-0.5'>
                <h3>Date</h3>
                <input
                value={taskDate}
                onChange={(e)=>{
                   settaskDate(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type="Date"  />
            </div >
            <div className='text-sm text-gray-300 mb-0.5'>
                <h3>Assign to</h3>
                <input 
                value={asignTo}
                onChange={(e)=>{
                   setasignTo(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type="text" placeholder="employ name" />
            </div>
            <div className='text-sm text-gray-300 mb-0.5'>
                <h3>Category</h3>
                <input 
                value={category}
                onChange={(e)=>{
                   setcategory(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type="text" placeholder='design,dev,etc' />
            </div>
            </div>
            <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea 
                value={taskDescription}
                onChange={(e)=>{
                   settaskDescription(e.target.value)
                }}
                className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 ' name="" id="" ></textarea>
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 mt-4 rounded text-sm w-full'>Create Task</button>
            </div>
        </form>
      </div>
  )
}

export default CreateTask
