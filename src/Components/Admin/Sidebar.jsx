import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import DataGridDemo from './DataGridDemo'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                {/* <BsCart3  className='icon_header'/>  */}
                Hi,Admin
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <hr />

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/Admin">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/Addquestion">
                    <BsFillArchiveFill className='icon'/> Add/removal Questions
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/GroupedStudents">
                    <BsFillGrid3X3GapFill className='icon'/> Students Group
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/StudentsData">
                    <BsPeopleFill className='icon'/> Students Data
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> performance
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar