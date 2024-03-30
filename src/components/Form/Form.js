import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="container">
      <div className="form-container">
        <div class="coolinput">
          <input
            type="text"
            placeholder="Write here..."
            name="input"
            class="input"
          />
        </div>
        <div class="radio-input">
          <input value="value-1" name="value-radio" id="value-1" type="radio" />
          <label for="value-1">Value 1</label>
          <input value="value-2" name="value-radio" id="value-2" type="radio" />
          <label for="value-2">Value 2</label>
          <input value="value-3" name="value-radio" id="value-3" type="radio" />
          <label for="value-3">Value 3</label>
        </div>
        <div className="check">
          <label class="container-check">
            <input type="checkbox" />
            <div class="checkmark"></div>
          </label>
          <p>Check</p>
        </div>
        <p className="button">Submit</p>
      </div>
    </div>
  );
};

export default Form;
