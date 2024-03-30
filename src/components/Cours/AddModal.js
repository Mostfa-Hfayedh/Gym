import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid black",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };

const AddModal = () => {

    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

  return (
    <div>
    <Button className="addBtn" onClick={handleOpen}>
      Add
    </Button>
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="formModal">
          <input type="text" placeholder="Course name" className="textInputs"  />
          <input type="text" placeholder="Price" className="textInputs"   />
          <input type="text" placeholder="Duration" className="textInputs"    />

          <div className="modalButtons">
            <Button className="modalBtn" >Add</Button>
            <Button className="modalBtn" onClick={handleClose}>Cancel</Button>
          </div>
        </div>
      </Box>
    </Modal>
  </div>
  )
}

export default AddModal