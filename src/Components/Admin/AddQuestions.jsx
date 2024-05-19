import { useState } from 'react'
import './Admin.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import AdminDeleteQues from './AdminDeleteQues'
import AdminCreateQuestion from './AdminCreateQuestion'
import AdminAddTestCase from './AdminAddTestCase'

function AddQuestions() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div>
      <AdminDeleteQues />
      <AdminCreateQuestion />
      <AdminAddTestCase />

      </div>
    </div>
  )
}

export default AddQuestions