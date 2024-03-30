import React from 'react'
import OneCours from './OneCours'

const AllCours = () => {
  return (
       <div className="allUsersContent">
    <table className="table">
      <thead>
        <tr className='optionsUsers'>
          <th scope="col">Course Name</th>
          <th scope="col">Price</th>
          <th scope="col">Duration</th>
          <th scope="col"></th>
          <th scope="col"></th>
          
      
        </tr>
      </thead>
      <tbody>
        <OneCours/>
      </tbody>
    </table>
  </div>
  )
}

export default AllCours