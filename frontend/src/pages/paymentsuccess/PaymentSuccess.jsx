import React, { useEffect } from "react";
import "./paymentSuccess.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../../config";
import { UserData } from "../../context/UserContext";

const PaymentSuccess = () => {
  const params = useParams(); 
  const { user, fetchUser } = UserData();

  useEffect(() => {
    const enrollCourse = async () => {
      try {
        await axios.post(
          `${server}/api/course/enroll/${params.id}`,
          {},
          { withCredentials: true }
        );

        
        fetchUser();
      } catch (error) {
        console.log(error);
      }
    };

    enrollCourse();
  }, []);

  return (
    <div className="payment-success-page">
      {user && (
        <div className="success-message">
          <h2>Payment Successful ✅</h2>
          <p>Your course subscription has been activated!</p>
          <p>Reference no: {params.id}</p>

          <Link
            to={`/${user._id}/dashboard`}
            className="common-btn"
          >
            Go to Dashboard
          </Link>
        </div>
      )}
    </div>
  );
};

export default PaymentSuccess;
