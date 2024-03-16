import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMoneyBill} from '@fortawesome/free-solid-svg-icons';

const OneCourse = () => {
  return (
    <div className="cardRole">
          <div className="card-details">
            <p className="text-title">hello</p>
          </div>
          <div className="card-button">
                <FontAwesomeIcon icon={faMoneyBill} className="roleButtons"  />
          </div>
        </div>
  )
}

export default OneCourse