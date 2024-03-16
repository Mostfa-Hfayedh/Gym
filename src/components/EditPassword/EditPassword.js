import React from "react";
import "./EditPassword.css"

const EditPassword = () => {
  return (
    <div  className="EditPassword">
      <form class="form">
        <p class="form-title">Edit Password</p>
        <div class="input-container">
          <input type="password" placeholder="Enter old password" />
          <span></span>
        </div>
        <div class="input-container">
          <input type="password" placeholder="Enter new password" />
          <span></span>
        </div>
        <div class="input-container">
          <input type="password" placeholder="Confirm new password" />
        </div>
        <button type="submit" class="submit">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditPassword;
