import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./basicModal.css";
import add from "../../assets/add.png"

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

const BasicModal = () => {
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
            <input type="text" placeholder="First name" className="textInputs"  />
            <input type="text" placeholder="Last name" className="textInputs"   />
            <input type="text" placeholder="CIN" className="textInputs"    />
            <input type="text" placeholder="Subscription" className="textInputs"    />
            <input type="password" placeholder="Gym" className="textInputs"   />
            {/* Replacing the input with the custom file upload label */}
            <label className="custum-file-upload" htmlFor="file">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24">
                  {/* SVG code */}
                </svg>
              </div>
              <div className="text">
                <img src={ add} alt="" className="addImage"/>
              </div>
              <input type="file" id="file"    />
            </label>
            {/* End of custom file upload label */}
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

export default BasicModal