import React from 'react'
import "./allUsers.css"
import OneUser from './OneUser'

const AllUsers = () => {
  return (
    <div className="allUsersContent">
    <table className="table">
      <thead>
        <tr className='optionsUsers'>
          <th scope="col">Profile image</th>
          <th scope="col">Username</th>
          <th scope="col">CIN</th>
          <th scope="col">Subscription</th>
          <th scope="col">Gym</th>
          <th scope="col">Blocked</th>
          <th scope="col"></th>
          <th scope="col"></th>
      
        </tr>
      </thead>
      <tbody>
        <OneUser/>
        <OneUser/>
        <OneUser/>
        <OneUser/>
        <OneUser/>
      </tbody>
    </table>
  </div>
  )
}

export default AllUsers