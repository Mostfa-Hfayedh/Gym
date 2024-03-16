import React from 'react'
import "./OverView.css"
import SideBar from '../SideBar/SideBar'
import Profile from '../Profile/Profile'
import EditPassword from '../EditPassword/EditPassword'
import EditProfile from '../EditProfile/EditProfile'
import UsersView from '../AllUsers/UsersView'
import Course from '../CourseList/Course'

const OverView = () => {
  return (
    <div className='overview' >
        <SideBar/>
        <Course/>
        {/* <UsersView/> */}
        {/* <Profile/> */}
        {/* <EditPassword/> */}
        {/* <EditProfile/> */}
    </div>
  )
}

export default OverView