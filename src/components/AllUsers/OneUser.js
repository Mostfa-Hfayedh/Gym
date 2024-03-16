import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faLock , faLockOpen , faPen , faTrash} from '@fortawesome/free-solid-svg-icons';
import "./oneUser.css"
import UpdateModal from './UpdateModal';
import DeleteModal from './DeleteModal';

const OneUser = () => {
  const [block,setBlocked] = useState(true)
  const [openDelete,setOpenDelete] = useState(false);
  const [open, setOpen] = useState(false);

  

  const handleOpenUpdate = () => setOpen(true);
  const handleCloseUpdate = () => setOpen(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);


  return (
    <tr className="oneTip">
    <td>
      <img className="img_tip" src="" alt=''/>
    </td>
    <td>
      <h5>test</h5>
    </td>
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
    <td>
    {( block && true )?<FontAwesomeIcon icon={faLockOpen} className='lock'  />  :
            <FontAwesomeIcon icon={faLock} className='lock' style={{color:"red"}} />
            }
    </td>
    
    <td className='buttons' >
    <FontAwesomeIcon icon={faTrash} className='lock' style={{color:"red"}}  onClick={handleOpenDelete}  />
    </td>
    <td className='buttons' >
     
    <FontAwesomeIcon icon={faPen} className='lock'   onClick={handleOpenUpdate} />

    </td>
    

    <UpdateModal open={open} handleCloseUpdate={handleCloseUpdate}    />
    <DeleteModal open={openDelete} handleClose={handleCloseDelete}   />
  </tr>
  )
}

export default OneUser