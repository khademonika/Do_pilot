import React from 'react'
import Home from './pages/Home'
import Dashboard from './Dashboard'
import Sidebar from './components/Sidebar'
import Tasks from './pages/Task'
const App = () => {
  return (
    <div className='flex'>
      <div>
        <Sidebar/>
      </div>
      <Home/> 

    </div>
  )
}

export default App
