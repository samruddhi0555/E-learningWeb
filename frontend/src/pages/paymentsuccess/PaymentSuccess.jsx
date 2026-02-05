import React from 'react'
import './paymentSuccess.css'
import { Link, useParams } from 'react-router-dom'

const PaymentSuccess = () => {
    const params = useParams()
  return (
    <div className="payment-success-page">
        {user && <div className='success-message'>
            <h2>Payment Successfull</h2>
            <p>Your course subsription has been activated!</p>
            <p>Reference no: {params.id}</p>
            <Link to={`/${user._id}/dashboard`} className='common-btn'></Link>
            </div>}
    </div>
  )
}

export default PaymentSuccess