import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FaildTask from './FaildTask'
import Completetask from './Completetask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='flex overflow-x-auto h-[50%] mt-10 py-5 gap-4 itmes-center justify-start w-full flex-nowrap rounded-xl'>
              {data.tasks.map((elem ,idx)=>{  
                      if(elem.active) {  
                         return <AcceptTask key={idx} data={elem}/>  
                      }  
                      if(elem.newTask) {  
                         return <NewTask key={idx} data={elem}/>  
                      }  
                      if(elem.completed) {  
                         return <Completetask key={idx} data={elem}/>  
                      }  
                      if(elem.failed) {  
                         return <FaildTask key={idx} data={elem}/>  
                      }  
})}
                  

    </div>
  )
}

export default TaskList
