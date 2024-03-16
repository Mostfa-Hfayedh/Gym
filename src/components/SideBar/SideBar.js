import React from "react";
import "./SideBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard , faPenToSquare , faUserLock} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="sidebarContainer">
      <div className="sidebarOptions">
        <FontAwesomeIcon icon={faIdCard} className="icons" />
        <p>Profile</p>
      </div>
      <div className="sidebarOptions">
        <FontAwesomeIcon icon={faPenToSquare}  className="icons" />
        <p>Edit Profile</p>
      </div>
      <div className="sidebarOptions">
        <FontAwesomeIcon icon={faUserLock} className="icons" />
        <p>Edit Password</p>
      </div>
    </div>
  );
};

export default SideBar;
