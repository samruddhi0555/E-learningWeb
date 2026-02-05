import React from 'react'
import './account.css'
import { MdDashboard } from 'react-icons/md'

const Account = () => {
  return (
    <div className="profile">
        <h2>My Profile</h2>
        <div className="profile-info">
            <p>
                <strong>Name - Sanika</strong>
            </p>
            <p>
                <strong>Email - Sanika@gmail.com</strong>
            </p>
            <button className='common-btn'><MdDashboard/>Dashboard</button>
        </div>
    </div>
  )
}

export default Account