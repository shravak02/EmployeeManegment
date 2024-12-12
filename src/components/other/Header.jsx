import React from 'react'

const Header = (props) => {

  // const [username, setusername] = useState('')

  // if(!data){
  //   setusername('Admin')
  // }else{
  //   setusername(data.name)
  // }
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    //window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='test-2xl font-medium'>hello<br/><span className='text-3xl font-semibold'>🤣🤣</span></h1>
      <button onClick = {logOutUser} className='bg-gradient-to-r from-red-500 to-red-800 text-black  text-lg font-medium px-3 py-2 rounded-md'>Logout</button>
    </div>
  )
}

export default Header
