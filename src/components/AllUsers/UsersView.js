import React from 'react'
import AllUsers from './AllUsers'
import BasicModal from './BasicModal'

const UsersView = () => {
  return (
    <div className='usersList'>
        <BasicModal  />
        <AllUsers   />     
    </div>
  )
}

export default UsersView