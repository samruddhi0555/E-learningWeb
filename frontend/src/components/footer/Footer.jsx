import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h3>EduHub</h3>
          <p>Learn. Grow. Excel.</p>
        </div>

        {/* Team Members Section */}
        <div className="footer-team">
          <h4>Team Members</h4>
          <ul>
            <li>Anushka Patil</li>
            <li>Sanika Deshkar</li>
            <li>Samruddhi Raut</li>
          </ul>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        © 2026 EduHub | Built by Team
      </div>
    </footer>
  );
};

export default Footer;
