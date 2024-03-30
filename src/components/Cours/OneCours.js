import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faLock , faLockOpen , faPen , faTrash} from '@fortawesome/free-solid-svg-icons';

import CoursUpdateModal from './CoursUpdateModal';
import CoursDeleteModal from './CoursDeleteModal';

const OneCours = () => {

    const [openDelete,setOpenDelete] = useState(false);
    const [open, setOpen] = useState(false);    
  
    
  
    const handleOpenUpdate = () => setOpen(true);
    const handleCloseUpdate = () => setOpen(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);
  return (
    <tr className="oneTip">
    
    
    <td>
      <h5>12345678</h5>
    </td>

    <td>
      <label className="date_tip">
        cours
      </label>
    </td>
    <td>
      <label className="date_tip">
        gym
      </label>
    </td>
    
    <td className='buttons' >
    <FontAwesomeIcon icon={faTrash} className='lock' style={{color:"red"}}  onClick={handleOpenDelete}  />
    </td>
    <td className='buttons' >
     
    <FontAwesomeIcon icon={faPen} className='lock'   onClick={handleOpenUpdate} />

    </td>
    

    <CoursUpdateModal open={open} handleCloseUpdate={handleCloseUpdate}    />
    <CoursDeleteModal open={openDelete} handleClose={handleCloseDelete}   />
  </tr>
  )
}

export default OneCours