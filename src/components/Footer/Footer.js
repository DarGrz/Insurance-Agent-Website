import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="container">
          <p>Dariusz Grzegorczyk &copy; 2023</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.7940866142812!2d20.931828316375697!3d49.99646987941546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d84ee7fb4bfd5%3A0xca6e67c3b0deabd4!2zUsOzd25vbGVnxYJhIDVBLCAzMy0xMDAgVGFybsOzdw!5e0!3m2!1spl!2spl!4v1669160275321!5m2!1spl!2spl"
            width="100%"
            height="150"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
    </>
  );
};

export default Footer;
