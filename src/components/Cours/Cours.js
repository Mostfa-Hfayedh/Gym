import React from 'react'

import AllCours from './AllCours'
import AddModal from './AddModal'

const Cours = () => {
  return (
    <div className='users-list'>
        <AddModal  />
        <AllCours  /> 
    </div>
  )
}

export default Cours