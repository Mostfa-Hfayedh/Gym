import React from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
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

const UpdateModal = (props) => {
  return (
    <div>
    <Modal
      open={props.open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="formModal">
          <input type="text" placeholder="First name" className="textInputs"  />
          <input type="text" placeholder="Last name" className="textInputs"   />
          <input type="text" placeholder="CIN" className="textInputs" />
          <input type="text" placeholder="Subscription" className="textInputs"   />
          <input type="text" placeholder="Gym" className="textInputs" />
          {/* Replacing the input with the custom file upload label */}
          <label className="custum-file-upload" htmlFor="file">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24">
                {/* SVG code */}
              </svg>
            </div>
            <div className="text">
              {/* <span>{image.slice(0,30)+"..."}</span> */}
              <img src={add} alt="" className="addImage"/>
            </div>
            <input type="file" id="file"   />
          </label>
          {/* End of custom file upload label */}
          <div className="modalButtons">
            <Button className="modalBtn" onClick={(e)=>{
                e.preventDefault();
                props.handleCloseUpdate();
            }}>Update</Button>
            <Button className="modalBtn" onClick={props.handleCloseUpdate}>Cancel</Button>
          </div>
        </div>
      </Box>
    </Modal>
  </div>
  )
}

export default UpdateModal